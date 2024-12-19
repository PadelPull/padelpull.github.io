import AddIcon from '@mui/icons-material/Add';
import DeleteIcon  from '@mui/icons-material/Delete';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { v4 as uuidv4 } from 'uuid';
import { Fab, IconButton, List, ListItemButton, ListItemText } from "@mui/material";
import { Player, PreferredSide } from '../domain/player';

const PadelPull = () => {
    const players: Player[] = new Array(1000).fill(new Player(uuidv4(), "Pedro", PreferredSide.Both));
    return <>
        <PadelPullTitle/>
        <PlayersList players={players}/>
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