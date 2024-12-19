import { Match } from "../domain/match";

export class MatchesClipboard {
    constructor(private readonly matches: Match[]) { }

    copyToClipboard(): void {
        navigator.clipboard.writeText(JSON.stringify(this.matches));
    }
}