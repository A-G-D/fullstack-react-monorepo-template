import { render } from "@testing-library/react";
import { beforeAll, expect, test } from "vitest";

import App from "./index";

beforeAll(() => {
  global.ResizeObserver = class ResizeObserver {
    observe = () => undefined;
    unobserve = () => undefined;
    disconnect = () => undefined;
  };
});

test("Component renders successfully", () => {
  const component = render(<App />);

  expect(component).toMatchSnapshot();
});
