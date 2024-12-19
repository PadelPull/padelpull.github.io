
import { useState } from "react"
import PadelPull from "./screens/PadelPull"
import FullScreen from "./utils/FullScreen"
import { PlayerStore } from "./storage/PlayersStore";
import { Player } from "./domain/player";

const storage = new PlayerStore();
function App() {
  const [players, setPlayers] = useState(storage.getAllPlayers());
  const onAddPlayer = (player: Player) => {
    storage.savePlayer(player);
    const updatedPlayers = storage.getAllPlayers();
    setPlayers(updatedPlayers);
  }
  const onDeletePlayer = (player: Player) => {
    storage.deletePlayer(player.id);
    const updatedPlayers = storage.getAllPlayers();
    setPlayers(updatedPlayers);
  }
  return (
    <FullScreen>
      <PadelPull 
        players={players}
        onAddPlayer={onAddPlayer}
        onDeletePlayer={onDeletePlayer}
      />
    </FullScreen>
  )
}

export default App
