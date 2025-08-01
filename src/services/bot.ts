import { Bot, RawApi, session } from "grammy";
import {
  handleHelpCommand,
  handleRulesCommand,
  handleStartCommand,
} from "../handlers/command";
import { gameService } from "./game";
import { Other } from "grammy/out/core/api";
import { MessageFormatter } from "../utils/message-formatter";
import { getFireStreakLevels } from "../utils/helpers";
import { handleTextMessage } from "../handlers/message";
import { MyContext } from "../types";
import { storage } from "../store/supabase";

const ROOM_CHAT_ID = Number(process.env.ROOM_CHAT_ID!);
export const bot = new Bot<MyContext>(process.env.BOT_TOKEN!);

bot.use(session({ storage }));

bot.command("start", handleStartCommand);

bot.command("rules", handleRulesCommand);

bot.command("help", handleHelpCommand);

bot.on("message:text", handleTextMessage);

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
  const botMessage = MessageFormatter.formatRoundStartMessage({
    phrase: gameService.getCurrentRoundWordPhrase(),
    numberOfPossibleWords: gameService.getCurrentRoundWordPossibleWords(),
  });

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

  const lastRoundWinner = gameService.setLastRoundWinner(topPlayers[0]);

  if (lastRoundWinner && lastRoundWinner.getWinRows() > 1) {
    bot.api.sendMessage(
      ROOM_CHAT_ID,
      `${getFireStreakLevels(
        lastRoundWinner.getWinRows()
      )} <a href="tg://user?id=${
        lastRoundWinner.id
      }">${lastRoundWinner.getName()}</a> has won ${lastRoundWinner.getWinRows()} rounds in a row!`,
      { parse_mode: "HTML" }
    );
  }
}

export function broadcastRoundWord() {
  const message = `These round words are: <b>${gameService.getCurrentRoundWordPhrase()}</b>`;

  bot.api.sendMessage(ROOM_CHAT_ID, message, {
    parse_mode: "HTML",
  });
}

export function broadcastPossibleRoundWords() {
  const message = `There are <b>${gameService.getCurrentRoundWordPossibleWords()}</b> possible words for this round.`;

  bot.api.sendMessage(ROOM_CHAT_ID, message, {
    parse_mode: "HTML",
  });
}

export function broadcastAddingExtraLetters() {
  gameService.addExtraLettersToCurrentRoundWord();

  const extraLetters = gameService.getCurrentRoundExtraLetters();
  const message = `Adding extra letters: <b>${extraLetters.join(" ")}</b>.`;

  bot.api.sendMessage(ROOM_CHAT_ID, message, {
    parse_mode: "HTML",
  });
}
