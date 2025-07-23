import { Context } from "grammy";
import { gameService } from "../services/game";
import { Player } from "../models/player";

export function handleTextMessage(ctx: Context) {
  console.log("Received text message:", ctx.message?.text);
  if (!gameService.isRoundActive()) return;
  const userMessage = ctx.message?.text?.trim();

  if (
    userMessage?.includes(" ") ||
    !userMessage?.length ||
    userMessage.length > gameService.getCurrentRoundWord().length
  )
    return;

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
