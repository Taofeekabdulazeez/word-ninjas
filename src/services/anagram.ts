import axios from "axios";
import { GameWord } from "../types";
import { DEFAULT_GAME_WORD } from "../store/anagram";

export async function fetchAnagram({
  url,
  phrase,
}: {
  url: string;
  phrase: string;
}): Promise<GameWord> {
  try {
    const response = await axios.get(url);
    const data = await response.data;

    if (response.status !== 200) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    return { ...data, phrase } as GameWord;
  } catch (error) {
    console.error("Error fetching anagram data:", error);

    return DEFAULT_GAME_WORD;
  }
}
