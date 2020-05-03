/* eslint-disable @typescript-eslint/no-explicit-any */

const FOLDERS = [
    "1st&substream",
    "2nd style",
    "3rd style",
    "4th style",
    "5th style",
    "6th style",
    "7th style",
    "8th style",
    "9th style",
    "10th style",
    "IIDX RED",
    "HAPPY SKY",
    "DistorteD",
    "GOLD",
    "DJ TROOPERS",
    "EMPRESS",
    "SIRIUS",
    "Resort Anthem",
    "Lincle",
    "tricoro",
    "SPADA",
    "PENDUAL",
    "copula",
    "SINOBUZ",
    "CANNON BALLERS",
    "Rootage",
    "HEROIC VERSE"
]

const FOLDER_INDEX: Map<string, number> = new Map(FOLDERS.map((f, i) => [f, i + 1]))

export function folder(versionName: string): number {
    return FOLDER_INDEX.get(versionName)!
}
