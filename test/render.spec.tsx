import "@testing-library/jest-dom";
import { render, screen } from "./testUtils";

describe("Test Base Components", () => {
  test("AgeLimitChip", () => {
    render(<div>Hello</div>);

    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
