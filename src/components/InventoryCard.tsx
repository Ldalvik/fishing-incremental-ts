import { SaveGameState } from "../interfaces/SaveData"
import FishEntry from "./FishEntry"
import { FunctionComponent } from "react"

const InventoryCard: FunctionComponent<SaveGameState> = ({ saveGame, setSaveGame }: SaveGameState) => {

  const onSellOneClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.id)
  }

  const onSellAllClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.id)
  }

  const onCastRodClicked = (_e: React.MouseEvent<HTMLButtonElement>) => {
    setSaveGame(old => ({
      ...old,
      inventory: {
        ...old.inventory,
        Common: old.inventory.Common + 1
      }
    }))
  }

  return (
    <div className="small-12">
      <div className="card sell-fish-card">
        <div className="card-section">
          <div className="text-center">
            <h5>Fishing Dock</h5>
            <button onClick={onCastRodClicked} className="button cast-rod-button">Cast Rod</button>
          </div>
          <div className="grid-x">
            <div className="small-3">
              <p className="inventory-text">Fish Type</p>
            </div>
            <div className="small-3">
              <p className="inventory-text">Amount</p>
            </div>
            <div className="small-3">
              <p className="inventory-text">Sell Price (one/all)</p>
            </div>
          </div>

          <div className="divider" />

          <FishEntry
            fishType="Common"
            amount={saveGame.inventory.Common}
            sellPriceOne={0}
            sellPriceAll={0}
            onSellOneClicked={onSellOneClicked}
            onSellAllClicked={onSellAllClicked}
          />
          <FishEntry
            fishType="Uncommon"
            amount={saveGame.inventory.Uncommon}
            sellPriceOne={0}
            sellPriceAll={0}
            onSellOneClicked={onSellOneClicked}
            onSellAllClicked={onSellAllClicked}
          />
          <FishEntry
            fishType="Rare"
            amount={saveGame.inventory.Rare}
            sellPriceOne={0}
            sellPriceAll={0}
            onSellOneClicked={onSellOneClicked}
            onSellAllClicked={onSellAllClicked}
          />
          <FishEntry
            fishType="Very Rare"
            amount={saveGame.inventory.VeryRare}
            sellPriceOne={0}
            sellPriceAll={0}
            onSellOneClicked={onSellOneClicked}
            onSellAllClicked={onSellAllClicked}
          />
          <FishEntry
            fishType="Ultra Rare"
            amount={saveGame.inventory.UltraRare}
            sellPriceOne={0}
            sellPriceAll={0}
            onSellOneClicked={onSellOneClicked}
            onSellAllClicked={onSellAllClicked}
          />
          <FishEntry
            fishType="Legendary"
            amount={saveGame.inventory.Legendary}
            sellPriceOne={0}
            sellPriceAll={0}
            onSellOneClicked={onSellOneClicked}
            onSellAllClicked={onSellAllClicked}
          />
          <FishEntry
            fishType="Mythic"
            amount={saveGame.inventory.Mythic}
            sellPriceOne={0}
            sellPriceAll={0}
            onSellOneClicked={onSellOneClicked}
            onSellAllClicked={onSellAllClicked}
          />
        </div>
      </div>
    </div>
  )
}

export default InventoryCard