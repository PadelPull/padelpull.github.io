import { Match } from "../domain/match";

export class MatchesClipboard {
    constructor(private readonly matches: Match[]) { }

    copyToClipboard(): void {
        let matchIndex = 1;
        const clipboardLines = this.matches.map(match => {
            const localTeam = match.local;
            const visitorTeam = match.visitor;
            const team1 = `${localTeam.backhandPlayer.name} - ${localTeam.drivePlayer.name} `
            const team2 = `${visitorTeam.backhandPlayer.name} - ${visitorTeam.drivePlayer.name}`
            return `Partido ${matchIndex++} 👉 ${team1} - vs - ${team2}`
        }).join('\n');
        const header = "🎾🎾🎾🎾🎾🎾🎾🎾🎾🎾🎾🎾🎾🎾🎾🎾\n     Partidos generados con https://padelpull.github.io\n🎾🎾🎾🎾🎾🎾🎾🎾🎾🎾🎾🎾🎾🎾🎾🎾\n\n";
        const clipboardContent = header + clipboardLines
        navigator.clipboard.writeText(clipboardContent);
    }
}