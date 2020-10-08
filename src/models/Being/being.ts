import { Serializable } from "../../types.ts";
import Attribute from "../Attribute/attribute.ts";
import Class from "../Class/class.ts";
import Race from "../Race/race.ts";
import { BeingJSON } from './types.ts';

abstract class Being implements Serializable {
    private class?: Class;
    private race?: Race;
    private attributes?: Attribute[];

    toJSON(): BeingJSON {
        return { class: this.class?.name, race: this.race?.name };
    }
}

export default Being;