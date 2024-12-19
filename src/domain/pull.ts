import { Player, PreferredSide } from "./player";

export class PadelPull {
    private players: Player[];
  
    constructor() {
      this.players = [];
    }
  
    addPlayer(player: Player): void {
      this.players.push(player);
    }
  
    generateMatches(numberOfMatches: number): { team1: Player[], team2: Player[] }[] {
      const matches: { team1: Player[], team2: Player[] }[] = [];
  
      const totalPlayersRequired = numberOfMatches * 4;
      if (this.players.length < totalPlayersRequired) {
        return [];
      }
  
      const shuffledPlayers = this.shuffleArray([...this.players]);
  
      const backhandPlayers = shuffledPlayers.filter(player => player.preferredSide === PreferredSide.Backhand);
      const drivePlayers = shuffledPlayers.filter(player => player.preferredSide === PreferredSide.Drive);
      const bothPlayers = shuffledPlayers.filter(player => player.preferredSide === PreferredSide.Both);
  
      for (let i = 0; i < numberOfMatches; i++) {
        const matchPlayers: Player[] = [];
        if (backhandPlayers.length >= 1 && drivePlayers.length >= 1) {
          matchPlayers.push(backhandPlayers.shift()!);
          matchPlayers.push(drivePlayers.shift()!);
          matchPlayers.push(backhandPlayers.shift()!);
          matchPlayers.push(drivePlayers.shift()!);
        } else {
          matchPlayers.push(bothPlayers.shift()!);
          matchPlayers.push(bothPlayers.shift()!);
          matchPlayers.push(bothPlayers.shift()!);
          matchPlayers.push(bothPlayers.shift()!);
        }
        const team1 = [matchPlayers[0], matchPlayers[2]];
        const team2 = [matchPlayers[1], matchPlayers[3]];
        matches.push({ team1, team2 });
      }
  
      return matches;
    }
  
    private shuffleArray(array: Player[]): Player[] {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
      }
      return array;
    }
  }