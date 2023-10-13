import { render } from "@testing-library/react";
import { expect, test } from "vitest";

import { Spinner } from "./index";

test("Spinner renders successfully", () => {
  const spinner = render(<Spinner />);

  expect(spinner).toMatchSnapshot();
});
