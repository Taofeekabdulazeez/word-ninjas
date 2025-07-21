export const WELCOME_MESSAGE = `👋 Welcome to Anagrabot!
Send me any word or phrase, and I’ll give you all the possible anagrams.
Try something like: listen or silent night

Let’s twist some words! 🔄`;

export enum CronExpression {
  EVERY_ONE_MINUTE = "*/1 * * * *",
  EVERY_TWO_MINUTES = "*/2 * * * *",
  EVERY_FIVE_MINUTES = "*/5 * * * *",
}

export const BOT_TOKEN = process.env.BOT_TOKEN!;
export const ROOM_CHAT_ID = Number(process.env.ROOM_CHAT_ID!);
