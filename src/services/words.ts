import { gameWord } from "../handlers/anagram";

class WordsService {
  private phrase: string = null!;
  private possibleWords: Record<string, boolean> = {};
  private numberOfPossibleWords: number = null!;
  private possibleWordsWithExtraLetters: Record<string, boolean> = {};
  private numberOfPossibleWordsWithExtraLetters: number = null!;
  private extraLetters: string[] = null!;

  public isAnagram(str: string) {
    return this.possibleWords[str] === true;
  }

  public addGuessedWord(word: string): void {
    this.possibleWords[word] = false;
  }

  public isGuessedWord(word: string): boolean {
    return this.possibleWords[word] === false;
  }

  public resetWord(): void {
    this.phrase = gameWord.phrase;
    this.possibleWords = gameWord.possibleWords;
    this.numberOfPossibleWords = gameWord.numberOfPossibleWords;
    this.extraLetters = gameWord.extraLetters;
    this.possibleWordsWithExtraLetters = gameWord.possibleWordsWithExtraLetters;
    this.numberOfPossibleWordsWithExtraLetters =
      gameWord.numberOfPossibleWordsWithExtraLetters;
  }

  public addExtraLetters(): void {
    this.phrase += " " + this.extraLetters.join(" ");
    this.possibleWords = {
      ...this.possibleWords,
      ...this.possibleWordsWithExtraLetters,
    };
    this.numberOfPossibleWords += this.numberOfPossibleWordsWithExtraLetters;
  }

  public getNumberOfPossibleWords(): number {
    return this.numberOfPossibleWords;
  }

  public getWordPhrase(): string {
    return this.phrase;
  }

  public getNumberOfPossibleWordsWithExtraLetters(): number {
    return this.numberOfPossibleWordsWithExtraLetters;
  }

  public getExtraLetters(): string[] {
    return this.extraLetters;
  }
}

export const wordsService = new WordsService();
