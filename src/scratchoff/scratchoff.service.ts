import { HttpService, Injectable } from '@nestjs/common';
import { Scratchoff } from './scratchoff';
import * as cheerio from 'cheerio';
import { Prize } from './prize';

@Injectable()
export class ScratchoffService {

    constructor(private httpService: HttpService) { }

    async findScratchoffs() {
        const url = 'https://www.mdlottery.com/wp-admin/admin-ajax.php?action=jquery_shortcode&shortcode=scratch_offs&atts=%7B%22null%22%3A%22null%22%7D';
        const response = await this.httpService.get<string>(url).toPromise();
        const $ = cheerio.load(response.data);
        const scratchoffs: Scratchoff[] = $('.ticket').map((i, ticket) => {

            const prizes: Prize[] = $('.prize-details tbody tr', ticket).map((j, detail) => {
                const prize = new Prize();
                prize.amount = +$('td:nth-child(1)', detail).text().replace(/[\$,]/g, '');
                prize.start = +$('td:nth-child(2)', detail).text();
                prize.remaining = +$('td:nth-child(3)', detail).text();
                return prize;
            }).get();

            const scratchoff = new Scratchoff();
            scratchoff.id = +$(ticket).attr('id').replace('ticket_', '');
            scratchoff.price = +$('.price', ticket).text().replace('$', '');
            scratchoff.name = $('.name', ticket).text();
            scratchoff.art = $('.art img', ticket).attr('src');
            scratchoff.topprize = +$('.topprize', ticket).text().replace(/[\$,]/g, '');
            scratchoff.topstart = prizes.find(p => p.amount === scratchoff.topprize).start;
            scratchoff.topremaining = +$('.topremaining', ticket).text();
            scratchoff.allstart = prizes.reduce((p, c) => p + c.start, 0);
            scratchoff.allremaining = +$('.allremaining', ticket).text();
            scratchoff.chancestowin = +$('.chancestowin', ticket).text();
            scratchoff.launchdate = new Date($('.launchdate', ticket).text());
            scratchoff.probability = +$('.probability', ticket).text();
            scratchoff.prizes = prizes;
            return scratchoff;
        }).get().sort((a, b) => a.id - b.id);


        return { scratchoffs };
    }
}
