import * as dotenv from "dotenv";
dotenv.config();
import { redisClient } from "./store/redis";
import { bot } from "./services/bot";
import { anagramJob } from "./jobs/anagram-job";
import { gameJob } from "./jobs/game-job";

async function bootstrap() {
  redisClient.connect();
  anagramJob.start();
  bot.start();
  gameJob.start();
}

bootstrap();
