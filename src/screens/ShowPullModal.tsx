import { Button, Card, ListItem, Modal } from "@mui/material"
import { Player } from "../domain/player";
import { PadelPull } from "../domain/pull";
import { useState } from "react";
import { Match } from "../domain/match";

export interface ShowPullModalProps {
    visible: boolean;
    players: Player[];
    onClose: () => void;
    onCopyMatches: (matches: Match[], reservePlayers: Player[]) => void;
}

const ShowPullModal = (props: ShowPullModalProps) => {
    if (!props.visible) return null;
    const players = props.players;
    const pull = new PadelPull(players);
    const [matches] = useState(pull.generateMatches());
    const reservePlayers = players.filter(player => !matches.some(match => match.local.backhandPlayer === player || match.local.drivePlayer === player || match.visitor.backhandPlayer === player || match.visitor.drivePlayer === player));
    return (
        <Modal
            open={props.visible}
            onClose={props.onClose}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Card
                sx={{
                    padding: 8,
                    borderRadius: 2,
                    width: 500,
                    maxHeight: "80%",
                }}
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <h1 style={{ textAlign: "center" }}>🎾 Partidos 🎾</h1>
                    <MatchesList matches={matches} reservePlayers={reservePlayers}/>
                    <Button
                        aria-label="Copy to clipbord"
                        size="large"
                        color="primary"
                        sx={{
                            marginTop: 4,
                            alignSelf: 'center',
                        }}
                        onClick={() => {
                            props.onCopyMatches(matches, reservePlayers);
                        }}
                        >
                        Copiar partidos
                    </Button>
                </div>
            </Card>
        </Modal>
    );
};

interface MatchesListProps {
    matches: Match[];
    reservePlayers: Player[];
}

const MatchesList = (props: MatchesListProps) => {
    if (props.matches.length === 0) { 
        return <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: "400px",
        }}>
            <h3>No tienes jugadores suficientes!</h3>
        </div>;
    } else {
        return <div style={{
            overflowX: "hidden",
            overflowY: "scroll",
            height: "400px",
        }}>
            {props.matches.map((match, index) => <MatchItem key={index} match={match} index={index}/>)}
            {props.reservePlayers.length > 0 && 
            <div>
                <h3>Reservas: </h3>
                {props.reservePlayers.map(player => <ListItem key={player.id}>{player.name}</ListItem>)}
            </div>}
        </div>;
    }
    
};

interface MatchItemProps {
    match: Match;
    index: number;
}

const MatchItem = (props: MatchItemProps) => {
    const localTeam = props.match.local;
    const visitorTeam = props.match.visitor;
    const team1 = `${localTeam.backhandPlayer.name} - ${localTeam.drivePlayer.name} `
    const team2 = `${visitorTeam.backhandPlayer.name} - ${visitorTeam.drivePlayer.name}`
    return <ListItem style={{
        display: 'flex',
        justifyContent: 'center',
    }}>
        <span><b>Partido {props.index + 1}: </b></span>
        &nbsp;
        <span>{team1}</span>
        &nbsp;-&nbsp;
        <span>{team2}</span>
        
    </ListItem>
};

export default ShowPullModal;