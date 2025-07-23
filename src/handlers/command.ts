import type { Context, CommandContext } from "grammy";
import {
  WELCOME_MESSAGE,
  GAME_RULES_MESSAGE,
  GAME_HELP_MESSAGE,
} from "../constants/messages";

export function handleStartCommand(ctx: CommandContext<Context>) {
  ctx.reply(WELCOME_MESSAGE, { parse_mode: "HTML" });
}

export function handleRulesCommand(ctx: CommandContext<Context>) {
  ctx.reply(GAME_RULES_MESSAGE, { parse_mode: "HTML" });
}

export function handleHelpCommand(ctx: CommandContext<Context>) {
  ctx.reply(GAME_HELP_MESSAGE, { parse_mode: "HTML" });
}
