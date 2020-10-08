import { assertEquals } from "https://deno.land/std@0.73.0/testing/asserts.ts";
import Being from "./being.ts";

Deno.test('should be able to create a Being', () => {
    // @ts-ignore
    const being = new Being();
    assertEquals(being instanceof Being, true);
});

Deno.test('should be able to serialize object', () => {
    // @ts-ignore
    const being: Being = new Being();
    assertEquals(being.toJSON(), {class: undefined, race: undefined});
});