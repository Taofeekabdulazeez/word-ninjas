import type { Context, CommandContext } from "grammy";
import {
  WELCOME_MESSAGE,
  GAME_RULES_MESSAGE,
  GAME_HELP_MESSAGE,
} from "../constants/messages";

const ROOM_CHAT_ID = Number(process.env.ROOM_CHAT_ID!);

export function handleStartCommand(ctx: CommandContext<Context>) {
  if (ctx.chatId === ROOM_CHAT_ID) return;
  ctx.reply(WELCOME_MESSAGE, { parse_mode: "HTML" });
}

export function handleRulesCommand(ctx: CommandContext<Context>) {
  if (ctx.chatId === ROOM_CHAT_ID) return;
  ctx.reply(GAME_RULES_MESSAGE, { parse_mode: "HTML" });
}

export function handleHelpCommand(ctx: CommandContext<Context>) {
  if (ctx.chatId === ROOM_CHAT_ID) return;
  ctx.reply(GAME_HELP_MESSAGE, { parse_mode: "HTML" });
}
