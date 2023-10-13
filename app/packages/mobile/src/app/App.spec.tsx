import { render } from "@testing-library/react-native";

import { default as App } from "./App";

test("produces consistent snapshot", () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- needed
  const tree = render(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders correctly", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("heading")).toHaveTextContent("Welcome");
});
