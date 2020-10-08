import { assertEquals } from "https://deno.land/std@0.73.0/testing/asserts.ts";
import { MAX_SLOTS } from "../../Constants/constants.ts";
import Item from "../Item/item.ts";
import Inventory from "./inventory.ts";

Deno.test('should be able to create an inventory', () => {
    const inventory = new Inventory();
    assertEquals(inventory instanceof Inventory, true);
    assertEquals(inventory.hasRoom(), true);
    assertEquals(inventory.availableSlots, MAX_SLOTS);
});

Deno.test('should be able to add an item to the inventory', () => {
    const inventory = new Inventory();
    const item = new Item();
    inventory.addItem(item);
    assertEquals(inventory.hasRoom(), true);
    assertEquals(inventory.availableSlots, MAX_SLOTS - 1);
});

Deno.test(`should be able to add ${MAX_SLOTS} items and fail on the ${MAX_SLOTS + 1}`, () => {
    const inventory = new Inventory();
    for(let i = 0; i < MAX_SLOTS; i++) {
        const item = new Item();
        inventory.addItem(item);
    }
    assertEquals(inventory.hasRoom(), false);
    assertEquals(inventory.availableSlots, 0);
    const added = inventory.addItem(new Item());
    assertEquals(added, false);
    assertEquals(inventory.availableSlots, 0);
});

Deno.test('should be able to delete an item', () => {
    const inventory = new Inventory();
    inventory.addItem(new Item());
    const deleted = inventory.deleteItem(0);
    assertEquals(deleted, true);
    assertEquals(inventory.availableSlots, MAX_SLOTS);
});

Deno.test('should add item in the middle of the inventory', () => {
    const ref = '#123';
    const inventory = new Inventory();
    inventory.addItems(new Item(), new Item(), new Item());
    inventory.deleteItem(1);
    inventory.addItem(new Item(ref));
    const [,itemRef] = inventory.getContents();
    assertEquals(itemRef, ref);
});

Deno.test('should add item at the end after deleting/adding an item', () => {
    const ref = '#123';
    const inventory = new Inventory();
    inventory.addItems(new Item(), new Item(), new Item());
    inventory.deleteItem(1);
    inventory.addItem(new Item());
    inventory.addItem(new Item(ref));
    const itemRefs = inventory.getContents();
    assertEquals(itemRefs.pop(), ref);
});