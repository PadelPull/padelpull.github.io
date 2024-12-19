import AddIcon from '@mui/icons-material/Add';
import DeleteIcon  from '@mui/icons-material/Delete';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { Fab, IconButton, List, ListItemButton, ListItemText } from "@mui/material";
import { Player, PreferredSide } from '../domain/player';

export interface PadelPullProps {
    players: Player[];
    onAddPlayer: (player: Player) => void;
    onDeletePlayer: (player: Player) => void;
}

const PadelPull = (props: PadelPullProps) => {
    return <>
        <PadelPullTitle/>
        <PlayersList players={props.players}/>
        <GeneratePullButton/>
        <AddPlayerButton/>
        </>
}

const PadelPullTitle = () => {
    return <h1 style={{
        textAlign: 'center',
    }}>🎾 Padel Pull 🎾</h1>
}

interface PlayersListProps {
    players: Player[];
}

const PlayersList = (props: PlayersListProps) => {
    return <List>
        {props.players.map(player => <PlayerItem player={player}/>)}
    </List>;
}

const PlayerItem = (props: {player: Player}) => {
    let sideEmoji = "⬅️"
    switch (props.player.preferredSide) {
        case PreferredSide.Drive:
            sideEmoji = "➡️";
            break;
        case PreferredSide.Backhand:
            sideEmoji = "⬅️";
            break;
        case PreferredSide.Both:
            sideEmoji = "↔️";
    }
    const playerLabel = `${props.player.name} - ${sideEmoji}`;
    return <ListItemButton>
        <IconButton edge="start" color="error" sx={{
            marginRight: 2
        }}>
            <DeleteIcon />
        </IconButton>
        <ListItemText> {playerLabel} </ListItemText>
        </ListItemButton>;
};

const AddPlayerButton = () => {
    return <Fab 
            aria-label="Add Player" 
            size="large" 
            color="primary"
            sx={{
                position: 'fixed',
                bottom: 16,
                right: 16
              }}>
                <AddIcon />
        </Fab>
}

const GeneratePullButton = () => {
    return <Fab 
            aria-label="Generate Pull" 
            size="large" 
            color="primary"
            sx={{
                position: 'fixed',
                bottom: 16,
                right: 80
              }}>
                <ShuffleIcon />
        </Fab>
}

export default PadelPull;