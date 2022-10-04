import { IGames } from './games';

export interface ISelectTop {
    code: number;
    data: IGames[];
    message: string;
}