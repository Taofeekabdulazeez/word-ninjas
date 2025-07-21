import { Bot } from "grammy";
import * as dotenv from "dotenv";
import { CronJob } from "cron";
import { CronExpression, WELCOME_MESSAGE } from "./constants";
import { WordsService } from "./words";
import { PlayersService } from "./players";
import { Player } from "./models";

dotenv.config({ path: ".env.local" });

const BOT_TOKEN = process.env.BOT_TOKEN!;
const ROOM_CHAT_ID = Number(process.env.ROOM_CHAT_ID!);

const bot = new Bot(BOT_TOKEN);
const wordsService = new WordsService();
const playersService = new PlayersService();

const job = new CronJob(
  CronExpression.EVERY_ONE_MINUTE,
  () => {
    setTimeout(
      () =>
        bot.api.sendMessage(ROOM_CHAT_ID, "This round will end in 30 seconds."),
      30 * 1000
    );
    wordsService.resetWords();
    wordsService.clearGuessedWords();
    const botMessage = `A new round has started. words are: ${wordsService.getWords()}`;
    console.log("players", playersService.getPlayers());

    console.log(botMessage);
    bot.api.sendMessage(ROOM_CHAT_ID, botMessage);
  },
  null,
  false,
  "America/Los_Angeles"
);

bot.command("start", (ctx) => {
  ctx.reply(WELCOME_MESSAGE);
});

bot.on("message:text", (ctx) => {
  const user = ctx.from;
  const userMessage = ctx.message.text.trim();

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

bot.command("help", (ctx) => {
  console.log("players", playersService.getPlayers());
});

// bot.api.getChat(ROOM_CHAT_ID).then((chat) => console.log("CHAT", chat));
// bot.api
//   .getChatAdministrators(ROOM_CHAT_ID)
//   .then((members) => console.log("CHAT MEMBERS", members));

job.start();

bot.start();
