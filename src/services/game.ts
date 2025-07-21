import { GameStatus } from "../interfaces";
import { Player } from "../models/player";
import { RoundWinner } from "../models/round-winner";

class GameService {
  public status: GameStatus = "waiting";
  private lastRoundWinner: RoundWinner = null!;

  public setStatus(status: GameStatus): void {
    this.status = status;
  }

  public getStatus(): GameStatus {
    return this.status;
  }

  public setLastRoundWinner(player: Player): void {
    this.lastRoundWinner = new RoundWinner(player);
  }

  public getLastRoundWinner(): RoundWinner {
    return this.lastRoundWinner;
  }
}

export const gameService = new GameService();
