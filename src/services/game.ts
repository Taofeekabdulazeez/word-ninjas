import { GameStatus, GameWord } from "../types";
import { Player } from "../models/player";
import { RoundWinner } from "../models/round-winner";
import { playersService } from "./players";
import { wordsService } from "./words";

class GameService {
  public status: GameStatus = "waiting";
  private lastRoundWinner: RoundWinner | null = null!;

  public setStatus(status: GameStatus): void {
    this.status = status;
  }

  public getStatus(): GameStatus {
    return this.status;
  }

  public resetGame(): void {
    gameService.setStatus("active");
    wordsService.resetWord();
    playersService.clearPlayers();
  }

  public isRoundActive(): boolean {
    return this.status === "active";
  }

  public getCurrentRoundWordPhrase(): string {
    return wordsService.getWordPhrase();
  }

  public getCurrentRoundWordPossibleWords(): number {
    return wordsService.getNumberOfPossibleWords();
  }

  public getCurrentRoundPlayers(): Player[] {
    return playersService.getPlayers();
  }

  public getCurrentRoundTopPlayers(): Player[] {
    return playersService.getRoundTopPlayers();
  }

  public addExtraLettersToCurrentRoundWord(): void {
    wordsService.addExtraLetters();
  }

  public getCurrentRoundExtraLetters(): string[] {
    return wordsService.getExtraLetters();
  }

  public setLastRoundWinner(player: Player | null): RoundWinner | null {
    if (!player || !player?.getPoints()) {
      this.lastRoundWinner = null;
      return null!;
    }

    if (this.lastRoundWinner?.id !== player.id) {
      this.lastRoundWinner = new RoundWinner(player);
      return this.lastRoundWinner;
    }
    this.lastRoundWinner.incrementWinRows();
    return this.lastRoundWinner;
  }

  public getLastRoundWinner(): RoundWinner | null {
    return this.lastRoundWinner;
  }

  public addPlayerToRound(player: Player): void {
    playersService.addPlayer(player);
  }

  public addGuessedWord(word: string): void {
    wordsService.addGuessedWord(word);
  }

  public addPointsToPlayer(playerId: Player["id"], points: number): void {
    playersService.updatePlayerPoints(playerId, points);
  }

  public isGuessedWord(word: string): boolean {
    return wordsService.isGuessedWord(word);
  }

  public isCurrentRoundWordAnagram(word: string): boolean {
    return wordsService.isAnagram(word);
  }

  public isChatMessage(userMessage: string) {
    return (
      userMessage?.includes(" ") ||
      !userMessage?.length ||
      userMessage.length > this.getCurrentRoundWordPhrase().length
    );
  }
}

export const gameService = new GameService();
