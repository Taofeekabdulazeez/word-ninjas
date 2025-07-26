import { Delay } from "../enums";
import {
  broadcastAddingExtraLetters,
  broadcastMessage,
  broadcastPossibleRoundWords,
  broadcastRoundEnd,
  broadcastRoundStart,
  broadcastRoundWord,
} from "../services/bot";

export function handleGamePlay() {
  broadcastRoundStart();

  setTimeout(broadcastRoundWord, 15 * 1000);

  setTimeout(
    () => broadcastMessage("⏳ This round will end in 60 seconds"),
    Delay.THIRTY_SECONDS
  );

  setTimeout(broadcastPossibleRoundWords, 38 * 1000);

  setTimeout(broadcastRoundWord, 45 * 1000);

  setTimeout(broadcastAddingExtraLetters, 55 * 1000);

  setTimeout(
    () => broadcastMessage("⏳ This round will end in 30 seconds"),
    Delay.ONE_MINUTE
  );

  setTimeout(broadcastRoundWord, 68 * 1000);

  setTimeout(broadcastPossibleRoundWords, 75 * 1000);

  setTimeout(broadcastRoundEnd, Delay.NINETY_SECONDS);

  setTimeout(
    () => broadcastMessage("⏱️ The next round will start in 15 seconds."),
    105 * 1000
  );
}
