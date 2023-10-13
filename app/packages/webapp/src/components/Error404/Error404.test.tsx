import { render } from "@testing-library/react";
import { expect, test } from "vitest";

import { Error404 } from "./index";

test("Component renders successfully", () => {
  const component = render(<Error404 />);

  expect(component).toMatchSnapshot();
});
