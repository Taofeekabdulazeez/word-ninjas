import { Context } from "grammy";
import { gameService } from "../services/game";
import { Player } from "../models/player";
import { parsePlayerMessage } from "../validations";

const ROOM_CHAT_ID = Number(process.env.ROOM_CHAT_ID!);

export function handleTextMessage(ctx: Context) {
  if (ctx.chatId !== ROOM_CHAT_ID) return;
  if (!gameService.isRoundActive()) return;

  const userMessage = parsePlayerMessage(ctx.message?.text!);

  if (gameService.isChatMessage(userMessage)) return;

  const user = ctx.from!;

  gameService.addPlayerToRound(new Player(user.id, user.first_name));

  if (gameService.isGuessedWord(userMessage)) {
    ctx.react("😢");
    return;
  }

  if (gameService.isCurrentRoundWordAnagram(userMessage)) {
    gameService.addPointsToPlayer(user.id, userMessage.length);
    ctx.react("👍");
    gameService.addGuessedWord(userMessage);
  } else {
    ctx.react("👎");
  }
}
