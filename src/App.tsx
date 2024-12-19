
import { useState } from "react"
import PadelPull from "./screens/PadelPull"
import FullScreen from "./utils/FullScreen"
import { PlayerStore } from "./storage/PlayersStore";
import { Player } from "./domain/player";
import AddPlayerModal from "./screens/AddPlayerModal";
import ShowPullModal from "./screens/ShowPullModal";
import { MatchesClipboard } from "./clipboard/MatchesClipboard";

const storage = new PlayerStore();
function App() {
  const [showAddPlayerModal, setShowAddPlayerModal] = useState(false);
  const [showPullModal, setShowPullModal] = useState(false);
  const [players, setPlayers] = useState(storage.getAllPlayers());
  const onAddPlayerClick = () => {
    setShowAddPlayerModal(true);
  }
  const onDeletePlayer = (player: Player) => {
    storage.deletePlayer(player.id);
    const updatedPlayers = storage.getAllPlayers();
    setPlayers(updatedPlayers);
  }
  const onCloseAddPlayerModal = () => {
    setShowAddPlayerModal(false)
  };
  const onAddPlayer = (player: Player) => {
    storage.savePlayer(player);
    const updatedPlayers = storage.getAllPlayers();
    setPlayers(updatedPlayers);
  };
  const onShowPullModalClick = () => {
    setShowPullModal(true);
  };
  
  return (
    <FullScreen>
      <PadelPull 
        players={players}
        onAddPlayerClick={onAddPlayerClick}
        onShowPullModalClick={onShowPullModalClick}
        onDeletePlayerClick={onDeletePlayer}
      />
      <AddPlayerModal
        onAddPlayer={onAddPlayer}
        visible={showAddPlayerModal}
        onClose={onCloseAddPlayerModal}
      />
      <ShowPullModal
        players={players}
        visible={showPullModal}
        onClose={() => setShowPullModal(false)}
        onCopyMatches={(matches) => {
          new MatchesClipboard(matches).copyToClipboard();
        }
        }
      />
      <Authors/>
    </FullScreen>
  )
}

const Authors = () => {
  return <p style={{
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 8,
    color: 'white',
    backgroundColor: 'black',
    fontSize: 12,
  }}>
    Hecho por <a href="https://x.com/pedro_g_s">Pedro Gómez</a> & Juan Zamudio
  </p>
};

export default App
