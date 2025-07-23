class WordsService {
  private guessedWords: string[] = [];
  private words: string = "";

  private anagramWords: Array<string> = [
    "vortex mantle",
    "silent harbor",
    "primal echoes",
    "blinded forge",
    "scarlet hymns",
    "frozen chapel",
    "twisted ember",
    "gravel dancer",
    "mirror shades",
    "canvas threat",
    "quantum reeds",
    "broken summit",
    "alpha denser",
    "nocturn angel",
    "silver chant",
    "faded prism",
    "gamma hunter",
    "arcane bolt",
    "sunken rival",
    "epic drought",
    "binary flames",
    "carbon theft",
    "ancient brawl",
    "signal morph",
    "silent chord",
    "valiant merge",
    "muted rockets",
    "hazard inlet",
    "cosmic shaper",
    "hidden quartz",
    "storm ledger",
    "violet march",
    "cinder host",
    "pixel wander",
    "relic photon",
    "sacred flint",
    "void lantern",
    "drift beacon",
    "amber glitch",
    "chaos velvet",
  ];

  public getRandomWord(): string {
    const index = Math.floor(Math.random() * this.anagramWords.length);
    return this.anagramWords[index];
  }

  public isAnagram(str: string) {
    if (!str.length || !this.words.length) return false;

    const strFreq: Record<string, number> = {};

    for (const s of str.toLowerCase()) {
      if (strFreq[s]) strFreq[s] += 1;
      else strFreq[s] = 1;
    }

    const wordsFreq: Record<string, number> = {};

    for (const w of this.words.toLowerCase()) {
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

  public getWords(): string {
    return this.words;
  }
}

export const wordsService = new WordsService();
