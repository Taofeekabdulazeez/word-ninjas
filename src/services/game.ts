class GameService {
  public status: "waiting" | "active" | "finished" = "waiting";

  public setStatus(status: "waiting" | "active" | "finished"): void {
    this.status = status;
  }
}

export const gameService = new GameService();
