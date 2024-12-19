
import { useState } from "react"
import PadelPull from "./screens/PadelPull"
import FullScreen from "./utils/FullScreen"
import { PlayerStore } from "./storage/PlayersStore";
import { Player } from "./domain/player";
import AddPlayerModal from "./screens/AddPlayerModal";

const storage = new PlayerStore();
function App() {
  const [showAddPlayerModal, setShowAddPlayerModal] = useState(false);
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
  return (
    <FullScreen>
      <PadelPull 
        players={players}
        onAddPlayerClick={onAddPlayerClick}
        onDeletePlayerClick={onDeletePlayer}
      />
      <AddPlayerModal
        onAddPlayer={onAddPlayer}
        visible={showAddPlayerModal}
        onClose={onCloseAddPlayerModal}
      />
    </FullScreen>
  )
}

export default App
