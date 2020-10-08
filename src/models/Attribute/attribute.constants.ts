import { AttributeProperties } from "./types.ts";

const STRENGTH: AttributeProperties = {
    name: 'strength',
    description: `
        Strength directly increases mellee damage
    `,
    defaultValue: 0
}

const AGILITY: AttributeProperties = {
    name: 'agility',
    description: `
        Agility directly increases reaction speed and movement
    `,
    defaultValue: 0
}

const INTELLIGENCE: AttributeProperties = {
    name: 'intelligence',
    description: `
        Intelligence:
            1. directly increases spell damage
            2. allows comprehension of more complex spells and abilities
    `,
    defaultValue: 0
}

export const PRIMARY = [
    STRENGTH,
    AGILITY
]

export const SECONDARY = [

];