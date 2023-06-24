import { MouseEvent } from "react"

interface IFishEntry {
    fishType: string
    amount: number
    sellPriceOne: number
    sellPriceAll: number
    onSellOneClicked(e: MouseEvent<HTMLButtonElement>): void
    onSellAllClicked(e: MouseEvent<HTMLButtonElement>): void
}
const FishEntry = ({
    fishType,
    amount,
    sellPriceOne,
    sellPriceAll,
    onSellOneClicked,
    onSellAllClicked
}: IFishEntry) => {


    return (
        <div className="grid-x fish-entry">
            <div className="small-3">
                <p className="inventory-text">{fishType}</p>
            </div>
            <div className="small-3">
                <p className="inventory-text">{amount}</p>
            </div>
            <div className="small-3">
                <p className="inventory-text">${sellPriceOne} / ${sellPriceAll}</p>
            </div>
            <div className="sell-button-group">
                <button id={fishType} onClick={onSellOneClicked} className="button sell-one-button">Sell ONE</button>
                <button id={fishType} onClick={onSellAllClicked} className="button sell-all-button">Sell ALL</button>
            </div>
        </div>
    )
}

export default FishEntry