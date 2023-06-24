import { SaveGame } from "../interfaces/SaveData"

const StatsCard = ({ saveGame }: { saveGame: SaveGame }) => {
  return (
    <div className="small-12">
      <div className="card cast-rod-card">
        <div className="card-section">
        <h4 className="text-center">Stats</h4>

          <div className="grid-x">
            <div className="small-4">
              <p className="inventory-text">Cash</p>
            </div>
            <div className="small-4">
              <p className="inventory-text">Level (xp/level cap)</p>
            </div>
            <div className="small-4">
              <p className="inventory-text">Storage (current/max)</p>
            </div>
          </div>

          <div className="divider" />

          <div className="grid-x fish-entry">
            <div className="small-4">
              <p className="inventory-text">${saveGame.cash}</p>
            </div>
            <div className="small-4">
              <p className="inventory-text">0 (0/0)</p>
            </div>
            <div className="small-4">
              <p className="inventory-text">0/0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsCard