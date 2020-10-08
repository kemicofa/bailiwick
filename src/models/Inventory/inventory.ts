import { MAX_SLOTS } from "../../Constants/constants.ts";
import Item from "../Item/item.ts";

export default class Inventory {
    private static readonly totalSlots: number = MAX_SLOTS;
    private usedSlots: number = 0;
    private items: Item[] = [];
    private nextAvailablePositions: Set<number> = new Set();

    getContents(): string[] {
        return this.items.map(item => item.ref);
    }

    deleteItem(position: number): boolean {
        if(!this.slotIsTaken(position)){
            return false;
        }
        delete this.items[position];
        this.updateNextAvailablePosition(position);
        this.decreaseUsedSlotCount();
        return true;
    }
    addItems(...items: Item[]): boolean[] {
        return items.map(item => this.addItem(item));
    }
    addItem(item: Item): boolean {
        if(!this.hasRoom()) {
            console.warn(`Cannot add item when no more room is available`);
            return false;
        }
        const nextPosition = this.getNextAvailablePosition();
        if(this.positionIsValid(nextPosition)) {
            this.items[nextPosition] = item;
        } else {
            this.items.push(item);
            this.increaseUsedSlotCount();
        }
        return true;
    }

    hasRoom(): boolean {
        return this.availableSlots > 0;
    }

    get availableSlots(): number {
        return Inventory.totalSlots - this.usedSlots;
    }

    private slotIsTaken(position: number): boolean {
        return this.positionIsValid(position) && this.items[position] !== undefined;
    }

    private increaseUsedSlotCount(): void {
        this.usedSlots += 1;
    }

    private decreaseUsedSlotCount(): void {
        this.usedSlots -= 1;
    }

    private positionIsValid(position: number): boolean {
        return position >= 0 && position < this.items.length;
    }

    private updateNextAvailablePosition(position: number): void {
        this.nextAvailablePositions.add(position);
    }

    private getNextAvailablePosition(): number {
        if(this.nextAvailablePositions.size > 0) {
            const value = this.nextAvailablePositions[Symbol.iterator]().next().value;
            this.nextAvailablePositions.delete(value);
            return value;
        }
        return -1;
    }
}