import { Dispatch, SetStateAction} from "react"

export interface FishTypes {
    Common: any
    Uncommon: any
    Rare: any
    VeryRare: any
    UltraRare: any
    Legendary: any
    Mythic: any
}

export interface SaveGame {
    cash: number
    xp: number
    inventory: {
        "Common": number
        "Uncommon": number
        "Rare": number
        "VeryRare": number
        "UltraRare": number
        "Legendary": number
        "Mythic": number
    }
}

export interface SaveGameState {
    saveGame: SaveGame
    setSaveGame: Dispatch<SetStateAction<SaveGame>>
}