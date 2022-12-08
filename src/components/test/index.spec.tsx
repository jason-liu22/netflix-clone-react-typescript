import "@testing-library/jest-dom";
import { render, screen } from "../../../test/testUtils";
import AgeLimitChip from "src/components/AgeLimitChip";

describe("Test Base Components", () => {
  test("AgeLimitChip", () => {
    render(<AgeLimitChip label="18" />);

    expect(screen.getByText("18")).toBeInTheDocument();
  });
});
