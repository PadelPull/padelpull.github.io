import { Match } from "../domain/match";
import { Player } from "../domain/player";

export class MatchesClipboard {
    constructor(private readonly matches: Match[], private readonly reservePlayers: Player[]) { }

    copyToClipboard(): void {
        let matchIndex = 1;
        const clipboardLines = this.matches.map(match => {
            const localTeam = match.local;
            const visitorTeam = match.visitor;
            const team1 = `${localTeam.backhandPlayer.name} - ${localTeam.drivePlayer.name} `
            const team2 = `${visitorTeam.backhandPlayer.name} - ${visitorTeam.drivePlayer.name}`
            return `Partido ${matchIndex++} 👉 ${team1} - vs - ${team2}`
        }).join('\n');
        const header = "🎾🎾🎾\n     Partidos generados con https://padelpull.github.io\n🎾🎾🎾\n\n";
        const footer = `\n\nReservas:\n${this.reservePlayers.map(player => player.name).join('\n')}`;
        const clipboardContent = header + clipboardLines + footer;
        navigator.clipboard.writeText(clipboardContent);
    }
}