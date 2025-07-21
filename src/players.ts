import { Player } from "./models";

export class PlayersService {
  private players: Map<Player["id"], Player> = new Map<Player["id"], Player>();

  public getPlayers(): Player[] {
    return Array.from(this.players.values());
  }

  public addPlayer(player: Player): void {
    if (this.players.has(player.id)) {
      // this.makePlayerActive(player.id);
      return;
    }
    this.players.set(player.id, player);
  }

  public makePlayerInActive(id: Player["id"]): void {
    const player = this.players.get(id);
    if (!player) return;
    player.deactivate();
  }

  public makePlayerActive(id: Player["id"]) {
    const player = this.players.get(id);
    if (!player) return;
    player.activate();
  }

  public deletePlayer(id: Player["id"]): void {
    this.players.delete(id);
  }

  public updatePlayerPoints(id: Player["id"], points: number): void {
    const player = this.players.get(id);
    if (!player) return;
    player.addPoints(points);
  }
}
