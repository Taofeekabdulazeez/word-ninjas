import { fetchAnagram } from "../services/anagram";
import { generateAnagramUrl } from "../store/words";

export function handleAnagramRequest() {
  return fetchAnagram(generateAnagramUrl());
}
