import { Player } from "../models/player";

export class MessageFormatter {
  public static formatRoundStartMessage({
    phrase,
    possibleWords,
  }: {
    phrase: string;
    possibleWords: number;
  }): string {
    return `🚀 Round has started!\nWords are: <b>${phrase}</b>\nThere are <b>${possibleWords}</b> possible words for this round.`;
  }

  public static formatRoundEndMessage(players: Player[]): string {
    let message = `This round has ended.\n\n`;

    if (!players.length) {
      message += "⚠️ No players participated in this round.";
      return message;
    }

    const resultMessage = players
      .map((player, index) => {
        const name = player.getName();
        const points = player.getPoints();
        const userId = player.id;
        return `${
          index + 1
        }. <a href="tg://user?id=${userId}">${name}</a> - ${points} points`;
      })
      .join("\n");

    message += `🏆 <b>Top Players:</b>\n${resultMessage}`;

    return message;
  }
}
