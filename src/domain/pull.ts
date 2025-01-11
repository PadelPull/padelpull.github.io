import { Match, Team } from "./match";
import { Player, PreferredSide } from "./player";

export class PadelPull {

  constructor(private players: Player[] = []) {
  }

  addPlayer(player: Player): void {
    this.players.push(player);
  }

  generateMatches(): Match[] {
    let pullMatches: Match[] = []
    const numberOfMatches = Math.floor(this.players.length / 4);
    for (let i = 0; i <= numberOfMatches; i++) {
      const team1 = this.generateRandomTeam();
      const team2 = this.generateRandomTeam();
      if (team1 !== undefined && team2 !== undefined) {
        const match = new Match(team1, team2);
        pullMatches.push(match);
      }
    }
    return pullMatches;
  }

  private removePlayerFromList(player: Player) {
    this.players = this.players.filter(p => p !== player);
  }
  private generateRandomTeam(): Team | undefined {
    const firstPlayer = this.getRandomPlayer(this.players)
    if (firstPlayer === undefined) {
      return undefined;
    }
    this.removePlayerFromList(firstPlayer);
    let player2: Player | undefined = undefined;
    if (firstPlayer.preferredSide === PreferredSide.Backhand) {
      player2 = this.getRandomPlayer(this.getPlayers(PreferredSide.Drive));
      if (player2 === undefined) {
        player2 = this.getRandomPlayer(this.getPlayers(PreferredSide.Both));
        if (player2 === undefined) {
          console.log("error, no more players");
        }
      }
    } else if (firstPlayer.preferredSide === PreferredSide.Drive) {
      player2 = this.getRandomPlayer(this.getPlayers(PreferredSide.Backhand));
      if (player2 === undefined) {
        player2 = this.getRandomPlayer(this.getPlayers(PreferredSide.Both));
        if (player2 === undefined) {
          console.log("error, no more players")
        }

      }

    } else {
      player2 = this.getRandomPlayer(this.players);
      if (player2 === undefined) {
        console.log("error, no more players")
      }

    }
    if (player2 !== undefined) {
      this.removePlayerFromList(player2);
      return new Team(firstPlayer, player2)
    }
    return undefined;
  }

  private getPlayers(side: PreferredSide): Player[] {
    return this.players.filter(p => p.preferredSide === side)

  }


  private getRandomPlayer(players: Player[]): Player | undefined {
    if (players.length <= 0) return undefined;
    const randomPosition = Math.floor(Math.random() * players.length);
    return players[randomPosition];
  }

}
