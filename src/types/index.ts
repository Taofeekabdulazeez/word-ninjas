export type GameStatus = "waiting" | "active" | "finished";

export type Word = {
  phrase: string;
  extraLetters: string[];
  numberOfPossibleWords: number;
  numberOfPossibleWordsWithExtraLetters: number;
  totalNumberOfPossibleWords: number;
  possibleWords: Record<string, boolean>;
  possibleWordsWithExtraLetters: Record<string, boolean>;
};
