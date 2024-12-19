
import { useState } from "react"
import PadelPull from "./screens/PadelPull"
import FullScreen from "./utils/FullScreen"
import { PlayerStore } from "./storage/PlayersStore";

const storage = new PlayerStore();
function App() {
  const [players, _] = useState(storage.getAllPlayers());
  return (
    <FullScreen>
      <PadelPull players={players}/>
    </FullScreen>
  )
}

export default App
