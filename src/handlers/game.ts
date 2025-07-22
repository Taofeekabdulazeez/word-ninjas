import { Delay } from "../interfaces";
import {
  broadcastMessage,
  broadcastRoundEnd,
  broadcastRoundStart,
} from "../services/bot";

export function handleGamePlay() {
  broadcastRoundStart();

  setTimeout(
    () => broadcastMessage("⏳ This round will end in 60 seconds"),
    Delay.THIRTY_SECONDS
  );

  setTimeout(
    () => broadcastMessage("⏳ This round will end in 30 seconds"),
    Delay.ONE_MINUTE
  );

  setTimeout(broadcastRoundEnd, Delay.NINETY_SECONDS);

  setTimeout(
    () => broadcastMessage("⏱️ The next round will start in 15 seconds."),
    105 * 1000
  );
}
