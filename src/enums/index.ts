export enum Delay {
  ONE_SECOND = 1000,
  TWO_SECONDS = 2000,
  FIVE_SECONDS = 5000,
  TEN_SECONDS = 10000,
  THIRTY_SECONDS = 30000,
  ONE_MINUTE = 60000,
  NINETY_SECONDS = 90000,
  TWO_MINUTES = 120000,
}

export enum CronExpression {
  EVERY_ONE_MINUTE = "*/1 * * * *",
  EVERY_TWO_MINUTES = "*/2 * * * *",
  EVERY_FIVE_MINUTES = "*/5 * * * *",
}
