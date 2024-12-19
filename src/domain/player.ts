import { v4 as uuidv4 } from 'uuid';

export enum PreferredSide {
    Drive = "Drive",
    Backhand = "Backhand",
    Both = "Both"
}

export class Player {
    constructor(public readonly id = uuidv4(), public readonly name: string, public preferredSide: PreferredSide) {

    }
}