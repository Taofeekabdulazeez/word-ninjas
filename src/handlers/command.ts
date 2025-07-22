import type { Context, CommandContext } from "grammy";
import { WELCOME_MESSAGE } from "../constants";

export function handleStartCommand(ctx: CommandContext<Context>) {
  ctx.reply(WELCOME_MESSAGE);
}
