import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { Fab, IconButton, List, ListItemButton, ListItemText } from "@mui/material";
import { Player, PreferredSide } from '../domain/player';

export interface PadelPullProps {
    players: Player[];
    onAddPlayerClick: () => void;
    onDeletePlayerClick: (player: Player) => void;
}

const PadelPull = (props: PadelPullProps) => {
    return <>
        <PadelPullTitle />
        <PlayersList players={props.players} onDeletePlayerClick={props.onDeletePlayerClick} />
        <GeneratePullButton />
        <AddPlayerButton onClick={props.onAddPlayerClick} />
    </>
}

const PadelPullTitle = () => {
    return <h1 style={{
        textAlign: 'center',
    }}>🎾 Padel Pull 🎾</h1>
}

interface PlayersListProps {
    players: Player[];
    onDeletePlayerClick: (player: Player) => void;
}

const PlayersList = (props: PlayersListProps) => {
    return <List>
        {props.players.map(player => <PlayerItem player={player} onDeletePlayerClick={props.onDeletePlayerClick} />)}
    </List>;
}

interface PlayerItemProps {
    player: Player;
    onDeletePlayerClick: (player: Player) => void;
}

const PlayerItem = (props: PlayerItemProps) => {
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
        <IconButton
            edge="start"
            color="error"
            sx={{
                marginRight: 2
            }}
            onClick={() => props.onDeletePlayerClick(props.player)}
        >
            <DeleteIcon />
        </IconButton>
        <ListItemText> {playerLabel} </ListItemText>
    </ListItemButton>;
};

interface AddPlayerButtonProps {
    onClick: () => void;
}
const AddPlayerButton = (props: AddPlayerButtonProps) => {
    return <Fab
        aria-label="Add Player"
        size="large"
        color="primary"
        onClick={props.onClick}
        onKeyUp={(event) => {
            event.key === 'Enter' && props.onClick();
        }}
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