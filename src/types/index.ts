import { Context, SessionFlavor } from "grammy";

export type GameStatus = "waiting" | "active" | "finished";

export type GameWord = {
  phrase: string;
  extraLetters: string[];
  numberOfPossibleWords: number;
  numberOfPossibleWordsWithExtraLetters: number;
  totalNumberOfPossibleWords: number;
  possibleWords: Record<string, boolean>;
  possibleWordsWithExtraLetters: Record<string, boolean>;
};

interface SessionData {}

export type MyContext = Context & SessionFlavor<SessionData>;
