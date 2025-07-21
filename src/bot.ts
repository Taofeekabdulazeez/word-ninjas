import * as dotenv from "dotenv";
dotenv.config();
import { CronJob } from "cron";
import { CronExpression, WELCOME_MESSAGE } from "./constants";
import { Player } from "./models/player";
import { gameService } from "./services/game";
import { Bot } from "grammy";
import { Delay } from "./interfaces";
import { MessageFormatter } from "./utils/message-formatter";

export const BOT_TOKEN = process.env.BOT_TOKEN!;
export const ROOM_CHAT_ID = Number(process.env.ROOM_CHAT_ID!);

const bot = new Bot(BOT_TOKEN);

function handleGamePlay() {
  setTimeout(
    () =>
      bot.api.sendMessage(
        ROOM_CHAT_ID,
        "⏳ This round will end in 60 seconds."
      ),
    Delay.THIRTY_SECONDS
  );
  setTimeout(
    () =>
      bot.api.sendMessage(
        ROOM_CHAT_ID,
        "⏳ This round will end in 30 seconds."
      ),
    Delay.ONE_MINUTE
  );

  setTimeout(() => {
    gameService.setStatus("finished");
    const topPlayers = gameService.getCurrentRoundTopPlayers();

    bot.api.sendMessage(
      ROOM_CHAT_ID,
      MessageFormatter.formatRoundEndMessage(topPlayers),
      { parse_mode: "HTML" }
    );
  }, Delay.NINETY_SECONDS);

  setTimeout(() => {
    bot.api.sendMessage(
      ROOM_CHAT_ID,
      "⏱️ The next round will start in 15 seconds."
    );
  }, 105 * 1000);

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

const job = new CronJob(
  CronExpression.EVERY_TWO_MINUTES,
  handleGamePlay,
  null,
  false
);

bot.command("start", (ctx) => {
  ctx.reply(WELCOME_MESSAGE);
});

bot.on("message:text", (ctx) => {
  if (gameService.status !== "active") return;

  const userMessage = ctx.message.text.trim();
  if (!userMessage?.length) return;

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

job.start();

bot.start();
