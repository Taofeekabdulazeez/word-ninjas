import { GameStoreWord } from "../interfaces";

export const GAME_STORE_WORDS: GameStoreWord[] = [
  { phrase: "vortex mantle", extraLetters: ["s", "e"] },
  { phrase: "silent harbor", extraLetters: ["r", "x"] },
  { phrase: "primal echoes", extraLetters: ["d", "y"] },
  { phrase: "blinded forge", extraLetters: ["q", "u"] },
  { phrase: "scarlet hymns", extraLetters: ["z", "o"] },
  { phrase: "frozen chapel", extraLetters: ["g", "n"] },
  { phrase: "twisted ember", extraLetters: ["b", "k"] },
  { phrase: "gravel dancer", extraLetters: ["j", "m"] },
  { phrase: "mirror shades", extraLetters: ["l", "t"] },
  { phrase: "canvas threat", extraLetters: ["f", "w"] },
  { phrase: "quantum reeds", extraLetters: ["h", "p"] },
  { phrase: "broken summit", extraLetters: ["c", "v"] },
  { phrase: "alpha denser", extraLetters: ["x", "y"] },
  { phrase: "nocturn angel", extraLetters: ["s", "a"] },
  { phrase: "silver chant", extraLetters: ["n", "z"] },
  { phrase: "faded prism", extraLetters: ["u", "r"] },
  { phrase: "gamma hunter", extraLetters: ["j", "d"] },
  { phrase: "arcane bolt", extraLetters: ["t", "o"] },
  { phrase: "sunken rival", extraLetters: ["l", "k"] },
  { phrase: "epic drought", extraLetters: ["b", "g"] },
  { phrase: "binary flames", extraLetters: ["m", "e"] },
  { phrase: "carbon theft", extraLetters: ["c", "h"] },
  { phrase: "ancient brawl", extraLetters: ["v", "x"] },
  { phrase: "signal morph", extraLetters: ["z", "q"] },
  { phrase: "silent chord", extraLetters: ["f", "s"] },
  { phrase: "valiant merge", extraLetters: ["w", "y"] },
  { phrase: "muted rockets", extraLetters: ["n", "a"] },
  { phrase: "hazard inlet", extraLetters: ["d", "p"] },
  { phrase: "cosmic shaper", extraLetters: ["t", "m"] },
  { phrase: "hidden quartz", extraLetters: ["b", "u"] },
  { phrase: "storm ledger", extraLetters: ["o", "c"] },
  { phrase: "violet march", extraLetters: ["r", "e"] },
  { phrase: "cinder host", extraLetters: ["l", "j"] },
  { phrase: "pixel wander", extraLetters: ["g", "s"] },
  { phrase: "relic photon", extraLetters: ["k", "a"] },
  { phrase: "sacred flint", extraLetters: ["n", "v"] },
  { phrase: "void lantern", extraLetters: ["x", "d"] },
  { phrase: "drift beacon", extraLetters: ["y", "p"] },
  { phrase: "amber glitch", extraLetters: ["m", "q"] },
  { phrase: "chaos velvet", extraLetters: ["z", "t"] },
];

function getRandomGameStoreWord(): GameStoreWord {
  const randomIndex = Math.floor(Math.random() * GAME_STORE_WORDS.length);
  return GAME_STORE_WORDS[randomIndex];
}

export function generateAnagramUrl(): string {
  const word = getRandomGameStoreWord();
  const baseUrl = "https://anagram-solver.onrender.com/anagrams";
  const phrase = word.phrase.replace(/\s+/g, "").toLowerCase();
  const extras = word.extraLetters.join(",");
  return `${baseUrl}/${phrase}?extras=${extras}`;
}
