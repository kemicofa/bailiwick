import { assertEquals } from "https://deno.land/std@0.73.0/testing/asserts.ts";
import Attribute from "./attribute.ts";

Deno.test('should be able to create an Attribute', () => {
    const name = 'strength';
    const desc = 'strength description';
    const attribute = new Attribute(name, desc);
    assertEquals(attribute instanceof Attribute, true);
    assertEquals(attribute.name, name);
    assertEquals(attribute.description, desc);
    assertEquals(attribute.value, 0);
});

Deno.test('should be able to increase attribute', () => {
    const attribute = new Attribute('strength', 'strength description');
    attribute.increase();
    assertEquals(attribute.value, 1);
});