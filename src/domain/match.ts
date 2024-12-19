import { Player } from "./player"

export class Match {
    constructor(readonly local: Team, readonly visitor: Team) {}
}

export class Team {
    constructor(readonly drivePlayer: Player, readonly backhandPlayer: Player) {}
}