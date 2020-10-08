import { ClassProperties } from "./types.ts";

export default class Class implements ClassProperties {
    name: string;
    description: string;
    evolutionTree: string[];
    constructor(classProperties: ClassProperties) {
        this.name = classProperties.name;
        this.description = classProperties.description;
        this.evolutionTree = classProperties.evolutionTree;
    }
}