import { createClient } from "redis";

const REDIS_USERNAME = process.env.REDIS_USERNAME;
const REDIS_PASSWORD = process.env.REDIS_PASSWORD;
const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_PORT = Number(process.env.REDIS_PORT);

const client = createClient({
  username: REDIS_USERNAME,
  password: REDIS_PASSWORD,
  socket: {
    host: REDIS_HOST,
    port: REDIS_PORT,
  },
});

client.on("connect", () => console.log("Connecting to Redis Database"));

client.on("ready", () => console.log("Redis Client is ready"));

client.on("reconnecting", () => console.log("Redis Client is reconnecting"));

client.on("error", () =>
  console.error("Redis Client Error: Unable to connect")
);

client.on("end", () => console.log("Redis Client connection closed"));

export { client as redisClient };
