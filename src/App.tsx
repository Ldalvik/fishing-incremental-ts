import CastRodCard from "./components/StatsCard";
import InventoryCard from "./components/InventoryCard";
import { useState } from "react"
import { SaveGame } from "./interfaces/SaveData";
function App() {
  const [saveGame, setSaveGame] = useState<SaveGame>({
    cash: 0,
    xp: 0,
    inventory: {
      Common: 0,
      Uncommon: 0,
      Rare: 0,
      VeryRare: 0,
      UltraRare: 0,
      Legendary: 0,
      Mythic: 0
    }
  })

  return (
    <div className="grid-container">
      <div className="grid-x grid-padding-x grid-padding-y medium-up-3 align-center">
          <CastRodCard saveGame={saveGame} />
          <InventoryCard saveGame={saveGame} setSaveGame={setSaveGame} />
          
        </div>
    </div>
  )
}

export default App;
