import { CronJob } from "cron";
import { handleGamePlay } from "../handlers/game";
import { CronExpression } from "../enums";

export const gameJob = new CronJob(
  CronExpression.EVERY_TWO_MINUTES,
  handleGamePlay,
  null,
  false
);
