import { GameStatus } from "../types";
import { Player } from "../models/player";
import { RoundWinner } from "../models/round-winner";
import { playersService } from "./players";
import { wordsService } from "./words";

class GameService {
  public status: GameStatus = "waiting";
  private lastRoundWinner: RoundWinner = null!;

  public setStatus(status: GameStatus): void {
    this.status = status;
  }

  public getStatus(): GameStatus {
    return this.status;
  }

  public resetGame(): void {
    gameService.setStatus("active");
    wordsService.resetWords();
    wordsService.clearGuessedWords();
    playersService.clearPlayers();
  }

  public isRoundActive(): boolean {
    return this.status === "active";
  }

  public getCurrentRoundWord(): { phrase: string; possibleWords: number } {
    return wordsService.getWords();
  }

  public getCurrentRoundPlayers(): Player[] {
    return playersService.getPlayers();
  }

  public getCurrentRoundTopPlayers(): Player[] {
    return playersService.getRoundTopPlayers();
  }

  public setLastRoundWinner(player: Player): RoundWinner | null {
    if (!player) return null!;

    if (this.lastRoundWinner?.id !== player.id) {
      this.lastRoundWinner = new RoundWinner(player);
      return this.lastRoundWinner;
    }
    this.lastRoundWinner.incrementWinRows();
    return this.lastRoundWinner;
  }

  public getLastRoundWinner(): RoundWinner {
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
}

export const gameService = new GameService();
