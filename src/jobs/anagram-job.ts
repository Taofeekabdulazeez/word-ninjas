import { CronJob } from "cron";
import { CronExpression } from "../enums";
import { handleAnagramRequest } from "../handlers/anagram";

export const anagramJob = new CronJob(
  CronExpression.EVERY_ONE_MINUTE,
  handleAnagramRequest,
  null,
  false
);
