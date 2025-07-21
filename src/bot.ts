import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { CronJob } from "cron";
import { CronExpression, WELCOME_MESSAGE } from "./constants";
import { Player } from "./models/player";
import { gameService } from "./services/game";
import { playersService } from "./services/players";
import { wordsService } from "./services/words";
import { Bot } from "grammy";
import { Delay } from "./interfaces";

export const BOT_TOKEN = process.env.BOT_TOKEN!;
export const ROOM_CHAT_ID = Number(process.env.ROOM_CHAT_ID!);

const bot = new Bot(BOT_TOKEN);

const job = new CronJob(
  CronExpression.EVERY_TWO_MINUTES,
  () => {
    setTimeout(
      () =>
        bot.api.sendMessage(ROOM_CHAT_ID, "This round will end in 60 seconds."),
      Delay.THIRTY_SECONDS
    );
    setTimeout(
      () =>
        bot.api.sendMessage(ROOM_CHAT_ID, "This round will end in 30 seconds."),
      Delay.ONE_MINUTE
    );

    setTimeout(() => {
      gameService.setStatus("finished");
      const players = playersService.getPlayers();
      if (players.length === 0) {
        bot.api.sendMessage(
          ROOM_CHAT_ID,
          "This round has ended.\nNo players participated in this round."
        );
        return;
      }
      const topPlayers = playersService.getRoundTopPlayers();
      const resultMessage = topPlayers
        .map(
          (player, index) =>
            `${index + 1}. ${player.getName()} - ${player.getPoints()} points`
        )
        .join("\n");
      bot.api.sendMessage(
        ROOM_CHAT_ID,
        `This round has ended.\nTop players:\n${resultMessage}`
      );
    }, Delay.NINETY_SECONDS);

    setTimeout(() => {
      bot.api.sendMessage(
        ROOM_CHAT_ID,
        "The next round will start in 10 seconds."
      );
    }, 100 * 1000);

    gameService.setStatus("active");
    wordsService.resetWords();
    wordsService.clearGuessedWords();
    playersService.clearPlayers();

    const botMessage = `Round has started. words are: ${wordsService.getWords()}`;
    console.log("players", playersService.getPlayers());

    console.log(botMessage);
    bot.api.sendMessage(ROOM_CHAT_ID, botMessage).then((message) => {
      bot.api.pinChatMessage(ROOM_CHAT_ID, message.message_id, {
        disable_notification: true,
      });
    });
  },
  null,
  false,
  "America/Los_Angeles"
);

bot.command("start", (ctx) => {
  ctx.reply(WELCOME_MESSAGE);
});

bot.on("message:text", (ctx) => {
  const userMessage = ctx.message.text.trim();
  if (gameService.status !== "active") return;

  const user = ctx.from;

  playersService.addPlayer(new Player(user.id, user.first_name));

  if (!userMessage || !userMessage.length) return;

  if (wordsService.isGuessedWord(userMessage)) {
    ctx.react("😢");
    return;
  }

  if (wordsService.isAnagram(userMessage)) {
    playersService.updatePlayerPoints(user.id, userMessage.length);
    // ctx.reply(`You won ${userMessage.length} points!`);
    ctx.react("👍");
    wordsService.addGuessedWord(userMessage);
  } else {
    ctx.react("👎");
  }
});

job.start();

bot.start();
