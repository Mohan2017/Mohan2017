import { render, screen, fireEvent } from "@testing-library/react";
import DropDown from "../DropDown";

describe("DropDown component render", () => {
  const props = { greet: "Hello" };
  // const content = true;
  render(<DropDown {...props} />);
  it("should not render Hello content in DOM", () => {
    expect(screen.queryByText(/Hello/i)).not.toBeInTheDocument();
    const button = screen.getByRole("button");
    fireEvent.click(button);
    fireEvent.click(button);
  });
});
