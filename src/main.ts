import * as dotenv from "dotenv";
dotenv.config();
import { redisClient } from "./store/redis";
import { bot } from "./services/bot";
import { gameJob } from "./jobs/game-job";

async function start() {
  redisClient.connect();
  bot.start();
  gameJob.start();
}

start();
