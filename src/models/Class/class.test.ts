import { assertEquals } from "https://deno.land/std@0.73.0/testing/asserts.ts";
import { MAGE } from "./class.constants.ts";
import Class from "./class.ts";

Deno.test('should be able to create a Class', () => {
    const c = new Class(MAGE);
    assertEquals(c instanceof Class, true);
    assertEquals(c.name, MAGE.name);
    assertEquals(c.description, MAGE.description);
    assertEquals(c.evolutionTree, []);
});