import { expect, test } from "vitest";

import { sleep } from "./sleep";

test("Executes sleep function", async () => {
  const addends = [10, 21];
  const sum = await (async (a: number, b: number) => {
    await sleep(5);
    return a + b;
  })(addends[0], addends[1]);

  expect(sum).toBe(addends[0] + addends[1]);
});
