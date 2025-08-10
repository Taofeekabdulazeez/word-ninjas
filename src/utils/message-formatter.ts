import { Player } from "../models/player";
import { GameWord } from "../types";

export class MessageFormatter {
  public static formatRoundStartMessage({
    phrase,
    numberOfPossibleWords,
  }: {
    phrase: string;
    numberOfPossibleWords: number;
  }): string {
    return `🚀 Round has started!\nWords are: <b>${phrase}</b>\nThere are <b>${numberOfPossibleWords}</b> possible words for this round.`;
  }

  public static formatRoundEndMessage(players: Player[]): string {
    let message = `This round has ended.\n\n`;

    if (!players?.length) {
      message += "⚠️ No players participated in this round.";
      return message;
    }

    if (!players[0].getPoints()) {
      message += "⚠️ This round concluded with no winner.";
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
