import { render, screen } from "@testing-library/react";

import Home from "./src/pages";

describe("Main", () => {
  it("should render the heading", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: /mks/i })).toBeInTheDocument();
  });
});
