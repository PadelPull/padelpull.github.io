import { Player } from "./player"

export interface Match {
    local: Team;
    visitor: Team;
}

export interface Team {
    drivePlayer: Player;
    backhandPlayer: Player;
}