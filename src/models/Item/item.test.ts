import { assertEquals, assertMatch } from "https://deno.land/std@0.73.0/testing/asserts.ts";
import Item from "./item.ts";

Deno.test('should be able to create an Item', () => {
    const item = new Item();
    assertEquals(item instanceof Item, true);
    assertEquals(item.ref, 'unknown');
});

Deno.test('should be able to create an Item with a specific ref', () => {
    const ref = '#123';
    assertEquals(new Item(ref).ref, ref);
});