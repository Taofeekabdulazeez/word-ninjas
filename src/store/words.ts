import { gameWord } from "../handlers/anagram";
import { GameStoreWord } from "../interfaces";

export let word = gameWord;

export const GAME_STORE_WORDS: GameStoreWord[] = [
  { phrase: "vortex mantle", extraLetters: ["i", "u"] },
  { phrase: "crafted mellow", extraLetters: ["z", "p"] },
  { phrase: "glamour stretch", extraLetters: ["i", "b"] },
  { phrase: "eastern clampy", extraLetters: ["o", "z"] },
  { phrase: "console market", extraLetters: ["b", "d"] },
  { phrase: "silent harbor", extraLetters: ["e", "y"] },
  { phrase: "primal echoes", extraLetters: ["u", "k"] },
  { phrase: "blinded forge", extraLetters: ["a", "y"] },
  { phrase: "scarlet hymns", extraLetters: ["o", "i"] },
  { phrase: "frozen chapel", extraLetters: ["u", "a"] },
  { phrase: "twisted ember", extraLetters: ["o", "u"] },
  { phrase: "gravel dancer", extraLetters: ["i", "o"] },
  { phrase: "mirror shades", extraLetters: ["u", "k"] },
  { phrase: "canvas threat", extraLetters: ["o", "i"] },
  { phrase: "quantum reeds", extraLetters: ["i", "o"] },
  { phrase: "broken summit", extraLetters: ["y", "f"] },
  { phrase: "alpha denser", extraLetters: ["u", "o"] },
  { phrase: "nocturn angels", extraLetters: ["i", "b"] },
  { phrase: "silver chant", extraLetters: ["o", "u"] },
  { phrase: "faded prism", extraLetters: ["o", "u"] },
  { phrase: "gamma hunter", extraLetters: ["o", "i"] },
  { phrase: "arcane bolt", extraLetters: ["u", "y"] },
  { phrase: "sunken rival", extraLetters: ["o", "d"] },
  { phrase: "epic drought", extraLetters: ["a", "y"] },
  { phrase: "binary flames", extraLetters: ["u", "o"] },
  { phrase: "leather sponge", extraLetters: ["i", "u"] },
  { phrase: "glacier behold", extraLetters: ["s", "n"] },
  { phrase: "charger velvet", extraLetters: ["o", "p"] },
  { phrase: "pottery marvel", extraLetters: ["g", "x"] },
  { phrase: "tracker gospel", extraLetters: ["d", "n"] },
  { phrase: "sparkle canyon", extraLetters: ["m", "b"] },
  { phrase: "hidden quartz", extraLetters: ["o", "y"] },
  { phrase: "storm ledger", extraLetters: ["a", "i"] },
  { phrase: "violet march", extraLetters: ["u", "b"] },
  { phrase: "cinder host", extraLetters: ["u", "a"] },
  { phrase: "pixel wander", extraLetters: ["o", "y"] },
  { phrase: "relic photon", extraLetters: ["a", "u"] },
  { phrase: "sacred flint", extraLetters: ["o", "y"] },
  { phrase: "void lantern", extraLetters: ["u", "b"] },
  { phrase: "drift beacon", extraLetters: ["u", "y"] },
  { phrase: "amber glitch", extraLetters: ["o", "y"] },
  { phrase: "chaos velvet", extraLetters: ["i", "u"] },
  { phrase: "clapper threat", extraLetters: ["s", "o"] },
  { phrase: "replant jumper", extraLetters: ["v", "c"] },
  { phrase: "granted flower", extraLetters: ["k", "z"] },
  { phrase: "gathers export", extraLetters: ["b", "y"] },
  { phrase: "dragger temple", extraLetters: ["v", "x"] },
  { phrase: "fathers planet", extraLetters: ["c", "m"] },
  { phrase: "bravery rocket", extraLetters: ["s", "n"] },
  { phrase: "hanger velvet", extraLetters: ["j", "k"] },
  { phrase: "reloaded forest", extraLetters: ["b", "m"] },
  { phrase: "sneaker flight", extraLetters: ["v", "z"] },
  { phrase: "carbon theft", extraLetters: ["u", "i"] },
  { phrase: "ancient brawl", extraLetters: ["o", "y"] },
  { phrase: "signal morph", extraLetters: ["u", "e"] },
  { phrase: "silent chord", extraLetters: ["u", "a"] },
  { phrase: "valiant merge", extraLetters: ["o", "y"] },
  { phrase: "muted rockets", extraLetters: ["a", "i"] },
  { phrase: "hazard inlet", extraLetters: ["o", "u"] },
  { phrase: "cosmic shaper", extraLetters: ["u", "y"] },
];

function getRandomGameStoreWord(): GameStoreWord {
  const randomIndex = Math.floor(Math.random() * GAME_STORE_WORDS.length);
  return GAME_STORE_WORDS[randomIndex];
}

export function generateAnagramUrl(): { url: string; phrase: string } {
  const word = getRandomGameStoreWord();
  const baseUrl = "https://anagram-solver.onrender.com/anagrams";
  const phrase = word.phrase.replace(/\s+/g, "").toLowerCase();
  const extras = word.extraLetters.join(",");
  return { url: `${baseUrl}/${phrase}?extras=${extras}`, phrase: word.phrase };
}
