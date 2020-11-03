import { Prize } from './prize';

export class Scratchoff {
    id: number;
    price: number;
    name: string;
    art: string;
    topprize: number;
    topstart: number;
    topremaining: number;
    allstart: number;
    allremaining: number;
    chancestowin: number;
    launchdate: Date;
    probability: number;
    prizes: Prize[];
}
