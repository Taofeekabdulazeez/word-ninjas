import { Bot } from "grammy";
import * as dotenv from "dotenv";
import { CronJob } from "cron";
import { WELCOME_MESSAGE } from "./constants";
import { WordsService } from "./words";

let chatId: number | null = null;
let words: string | null = null;

dotenv.config({ path: ".env.local" });

const BOT_TOKEN = process.env.BOT_TOKEN!;
const ROOM_CHAT_ID = Number(process.env.ROOM_CHAT_ID!);

const bot = new Bot(BOT_TOKEN);
const wordsService = new WordsService();

const job = new CronJob(
  "*/1 * * * *",
  () => {
    setTimeout(
      () =>
        bot.api.sendMessage(ROOM_CHAT_ID, "This round will end in 30 seconds."),
      30 * 1000
    );
    words = wordsService.getRandomWord();
    const botMessage = `A new round has started. words are: ${words}`;
    console.log(botMessage);
    bot.api.sendMessage(ROOM_CHAT_ID, botMessage);
  },
  null,
  false,
  "America/Los_Angeles"
);

bot.command("start", (ctx) => {
  ctx.reply(WELCOME_MESSAGE);
  chatId = ctx.chat.id;
});

bot.on("message:text", (ctx) => {
  const userMessage = ctx.message.text;

  if (wordsService.isAnagram(userMessage, words!)) {
    // ctx.reply(`You won ${userMessage.length} points!`);
    ctx.react("👍");
  } else {
    ctx.react("👎");
  }
});

job.start();

bot.start();
