import { render, screen } from "@testing-library/react";

import App from "../App";

test("render App", () => {
  render(<App />);
  const app = screen.getByText("Greeting Component");
  expect(app).toBeInTheDocument();
});
