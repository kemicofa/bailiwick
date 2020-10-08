import { assertEquals } from "https://deno.land/std@0.73.0/testing/asserts.ts";
import { ORC } from "./race.constants.ts";
import Race from "./race.ts";

Deno.test('should be able to create a Race', () => {
    const race = new Race(ORC.name, ORC.description);
    assertEquals(race instanceof Race, true);
});