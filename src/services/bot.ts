import { Bot, RawApi } from "grammy";
import { handleStartCommand } from "../handlers/command";
import { gameService } from "./game";
import { Player } from "../models/player";
import { Other } from "grammy/out/core/api";
import { MessageFormatter } from "../utils/message-formatter";

const ROOM_CHAT_ID = Number(process.env.ROOM_CHAT_ID!);
export const bot = new Bot(process.env.BOT_TOKEN!);

bot.command("start", handleStartCommand);

bot.on("message:text", (ctx) => {
  if (gameService.status !== "active") return;

  const userMessage = ctx.message.text.trim();
  if (
    userMessage.includes(" ") ||
    !userMessage?.length ||
    userMessage.length > gameService.getCurrentRoundWord().length
  )
    return;

  const user = ctx.from;
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
});

export function broadcastMessage(
  message: string,
  other?: Other<RawApi, "sendMessage", "text" | "chat_id">
) {
  bot.api.sendMessage(ROOM_CHAT_ID, message, {
    parse_mode: "HTML",
    ...other,
  });
}

export function broadcastRoundStart() {
  gameService.resetGame();
  const botMessage = MessageFormatter.formatRoundStartMessage(
    gameService.getCurrentRoundWord()
  );
  console.log(botMessage);
  bot.api
    .sendMessage(ROOM_CHAT_ID, botMessage, {
      parse_mode: "HTML",
    })
    .then((message) => {
      bot.api.pinChatMessage(ROOM_CHAT_ID, message.message_id, {
        disable_notification: true,
      });
    });
}

export function broadcastRoundEnd() {
  gameService.setStatus("finished");
  const topPlayers = gameService.getCurrentRoundTopPlayers();

  bot.api.sendMessage(
    ROOM_CHAT_ID,
    MessageFormatter.formatRoundEndMessage(topPlayers),
    { parse_mode: "HTML" }
  );
}

export function broadcastRoundWord() {
  const message = `These words are: <b>${gameService.getCurrentRoundWord()}</b>`;

  bot.api.sendMessage(ROOM_CHAT_ID, message, {
    parse_mode: "HTML",
  });
}
