import {
    assertEquals,
  } from "https://deno.land/std@0.73.0/testing/asserts.ts";
import Player from "./player.ts";

Deno.test('should be able to create a player', () => {
    const player = new Player('bailiwick');
    assertEquals(player instanceof Player, true);
    assertEquals(player.name, 'bailiwick');
});

Deno.test('should be serializable', () => {
    const player = new Player('bailiwick');
    assertEquals(player.toJSON(), { class: undefined, race: undefined, name: 'bailiwick' });
});