import { Player } from "./player";

export class RoundWinner extends Player {
  private win_rows: number = 0;
  constructor(player: Player) {
    super(player.id, player.getName());
    this.setPoints(player.getPoints());
  }

  public getWinRows(): number {
    return this.win_rows;
  }

  public setWinRows(win_rows: number): void {
    this.win_rows = win_rows;
  }

  public incrementWinRows(): void {
    this.win_rows++;
  }
}
