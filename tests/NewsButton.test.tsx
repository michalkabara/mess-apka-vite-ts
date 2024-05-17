import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { NewsButton } from "../src/components/ui/NewsButton";
import "@testing-library/jest-dom/vitest";

describe("NewsButton", () => {
  it("should render news button", () => {
    render(<NewsButton />);

    const element = screen.getByText(/News/);
    expect(element).toBeInTheDocument();
  });
});
