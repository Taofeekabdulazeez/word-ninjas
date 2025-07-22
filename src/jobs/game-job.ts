import { CronJob } from "cron";
import { CronExpression } from "../constants";
import { handleGamePlay } from "../handlers/game";

export const gameJob = new CronJob(
  CronExpression.EVERY_TWO_MINUTES,
  handleGamePlay,
  null,
  false
);
