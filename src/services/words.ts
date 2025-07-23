class WordsService {
  private guessedWords: string[] = [];
  private words: WordsService["anagramWords"][number] = {
    phrase: "silent harbor",
    possibleWords: 435,
  };

  private anagramWords: Array<{ phrase: string; possibleWords: number }> = [
    { phrase: "vortex mantle", possibleWords: 510 },
    { phrase: "silent harbor", possibleWords: 435 },
    { phrase: "primal echoes", possibleWords: 478 },
    { phrase: "blinded forge", possibleWords: 397 },
    { phrase: "scarlet hymns", possibleWords: 445 },
    { phrase: "frozen chapel", possibleWords: 388 },
    { phrase: "twisted ember", possibleWords: 503 },
    { phrase: "gravel dancer", possibleWords: 466 },
    { phrase: "mirror shades", possibleWords: 420 },
    { phrase: "canvas threat", possibleWords: 482 },
    { phrase: "quantum reeds", possibleWords: 364 },
    { phrase: "broken summit", possibleWords: 376 },
    { phrase: "alpha denser", possibleWords: 449 },
    { phrase: "nocturn angel", possibleWords: 392 },
    { phrase: "silver chant", possibleWords: 460 },
    { phrase: "faded prism", possibleWords: 331 },
    { phrase: "gamma hunter", possibleWords: 358 },
    { phrase: "arcane bolt", possibleWords: 401 },
    { phrase: "sunken rival", possibleWords: 389 },
    { phrase: "epic drought", possibleWords: 414 },
    { phrase: "binary flames", possibleWords: 470 },
    { phrase: "carbon theft", possibleWords: 439 },
    { phrase: "ancient brawl", possibleWords: 483 },
    { phrase: "signal morph", possibleWords: 452 },
    { phrase: "silent chord", possibleWords: 429 },
    { phrase: "valiant merge", possibleWords: 447 },
    { phrase: "muted rockets", possibleWords: 498 },
    { phrase: "hazard inlet", possibleWords: 386 },
    { phrase: "cosmic shaper", possibleWords: 521 },
    { phrase: "hidden quartz", possibleWords: 312 },
    { phrase: "storm ledger", possibleWords: 408 },
    { phrase: "violet march", possibleWords: 440 },
    { phrase: "cinder host", possibleWords: 413 },
    { phrase: "pixel wander", possibleWords: 375 },
    { phrase: "relic photon", possibleWords: 426 },
    { phrase: "sacred flint", possibleWords: 438 },
    { phrase: "void lantern", possibleWords: 466 },
    { phrase: "drift beacon", possibleWords: 412 },
    { phrase: "amber glitch", possibleWords: 435 },
    { phrase: "chaos velvet", possibleWords: 399 },
  ];

  public getRandomWord(): WordsService["anagramWords"][number] {
    const index = Math.floor(Math.random() * this.anagramWords.length);
    return this.anagramWords[index];
  }

  public isAnagram(str: string) {
    if (!str.length || !this.words.phrase.length) return false;

    const strFreq: Record<string, number> = {};

    for (const s of str.toLowerCase()) {
      if (strFreq[s]) strFreq[s] += 1;
      else strFreq[s] = 1;
    }

    const wordsFreq: Record<string, number> = {};

    for (const w of this.words.phrase.toLowerCase()) {
      if (wordsFreq[w]) wordsFreq[w] += 1;
      else wordsFreq[w] = 1;
    }

    for (const [key, value] of Object.entries(strFreq)) {
      if (!wordsFreq[key] || wordsFreq[key] < value) return false;
    }

    return true;
  }

  public addGuessedWord(word: string) {
    this.guessedWords.push(word);
  }

  public getGuessedWords(): string[] {
    return this.guessedWords;
  }

  public clearGuessedWords() {
    this.guessedWords = [];
  }

  public isGuessedWord(word: string): boolean {
    return this.guessedWords.includes(word);
  }

  public resetWords(): void {
    this.words = this.getRandomWord();
  }

  public getWords(): WordsService["anagramWords"][number] {
    return this.words;
  }
}

export const wordsService = new WordsService();
