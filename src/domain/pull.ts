import { Match, Team } from "./match";
import { Player, PreferredSide } from "./player";

export class PadelPull {
  
    constructor(private readonly players: Player[] = []) {
    }
  
    addPlayer(player: Player): void {
      this.players.push(player);
    }
  
    generateMatches(): Match[] {
       const matches: Match[] = [];
       const player1 = new Player("1", "Player 1", PreferredSide.Drive);
       const player2 = new Player("2", "Player 2", PreferredSide.Backhand);
       const player3 = new Player("3", "Player 3", PreferredSide.Both);
       const player4 = new Player("4", "Player 4", PreferredSide.Drive);
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       matches.push(new Match(new Team(player1, player2), new Team(player3, player4)));
       return matches;
    }
  
  }