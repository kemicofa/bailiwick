import { ClassProperties } from "./types.ts";

export const MAGE: ClassProperties = {
    name: 'mage',
    description: 'uses magic',
    evolutionTree: []
}

export const WARRIOR: ClassProperties = {
    name: 'warrior',
    description: 'mellee',
    evolutionTree: [
        '#knight',
    ]
}

export const KNGIHT: ClassProperties = {
    name: 'knight',
    description: 'mellee',
    evolutionTree: [
        '#paladin'
    ],
}

export const PALADIN: ClassProperties = {
    name: 'paladin',
    description: 'mellee and holy',
    evolutionTree: []
}

export const CLASSES: ClassProperties[] = [];