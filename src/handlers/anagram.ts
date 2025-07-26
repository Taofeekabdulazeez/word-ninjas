import { fetchAnagram } from "../services/anagram";
import { DEFAULT_GAME_WORD } from "../store/anagram";
import { generateAnagramUrl } from "../store/words";
import { GameWord } from "../types";

export let gameWord: GameWord = DEFAULT_GAME_WORD;

export async function handleAnagramRequest() {
  gameWord = await fetchAnagram(generateAnagramUrl());
}
