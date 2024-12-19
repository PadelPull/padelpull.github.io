import { v4 as uuidv4 } from 'uuid';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { Modal, TextField, MenuItem, Select, SelectChangeEvent, Fab, Card } from "@mui/material";
import { useState } from "react";
import { Player, PreferredSide } from '../domain/player';

export interface AddPlayerModalProps {
    visible: boolean;
    onClose: () => void;
    onAddPlayer: (player: Player) => void;
}

const AddPlayerModal = (props: AddPlayerModalProps) => {
    const [preferredSide, setPreferredSide] = useState(PreferredSide.Backhand);
    const [playerName, setPlayerName] = useState("");
    const addPlayerButtonEnabled = playerName.trim().length > 0;
    return (
        <Modal
            open={props.visible}
            onClose={props.onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
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
                }}
                >
                <div>
                    <h1 style={{ textAlign: "center" }}>🎾 Nuevo jugador 🎾</h1>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                    }}>
                        <TextField 
                            id="filled-basic"
                            label="Nombre"
                            variant="filled"
                            value={playerName}
                            onChange={(value) => {
                                setPlayerName(value.target.value);
                            }}
                            />
                        <PrefferedSideSelector
                            currentSide={preferredSide}
                            onChange={(value) => {
                                const side = value.target.value as PreferredSide.Backhand;
                                setPreferredSide(side);
                            }}
                        />
                        <div style={{
                            alignSelf: 'flex-end',
                            marginTop: 8,
                        }}
                        >
                            <Fab
                                onClick={() => {
                                    setPlayerName("");
                                    setPreferredSide(PreferredSide.Backhand);
                                    props.onClose();
                                }}
                                aria-label="Clear form"
                                size="large"
                                color="primary"
                            >
                                <ClearIcon />
                            </Fab>
                            <Fab
                                disabled={!addPlayerButtonEnabled}
                                aria-label="Add player"
                                size="large"
                                color="primary"
                                sx={{
                                    alignSelf: 'flex-end',
                                    marginLeft: 2,
                                }}
                                onClick={() => {
                                    const player = new Player(uuidv4(), playerName, preferredSide);
                                    props.onAddPlayer(player);
                                    setPlayerName("");
                                }}
                                >
                                <CheckIcon />
                            </Fab>
                        </div>
                    </div>
                </div>
            </Card>
        </Modal>
    )
}

interface PreferredSideSelectorProps {
    currentSide: PreferredSide;
    onChange: (side: SelectChangeEvent) => void;
}

const PrefferedSideSelector = (props: PreferredSideSelectorProps) => {
    return <>
        <Select
            labelId="preferred-side"
            value={props.currentSide}
            label="Lado"
            onChange={props.onChange}
        >
            <MenuItem value={PreferredSide.Backhand}>Revés</MenuItem>
            <MenuItem value={PreferredSide.Drive}>Derecha</MenuItem>
            <MenuItem value={PreferredSide.Both}>Ambos</MenuItem>
        </Select>
    </>;
};

export default AddPlayerModal;