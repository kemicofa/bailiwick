import Being from "../Being/being.ts";
import { BeingJSON } from "../Being/types.ts";
import Inventory from "../Inventory/inventory.ts";
import { PlayerJSON } from "./types.ts";

class Player extends Being {
    private inventory?: Inventory;
    constructor(
        public readonly name: string,
    ){
        super();
    }
    toJSON(): BeingJSON & PlayerJSON {
        return {
            ...super.toJSON(),
            name: this.name
        }
    }
}

export default Player;