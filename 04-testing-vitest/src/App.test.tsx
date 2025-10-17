import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import App from "./App";

describe("App", () => {
  it("permite escribir en el input y pulsar el botón", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Introduce matrícula...");
    const button = screen.getByRole("button", { name: /consultar dgt/i });

    await userEvent.type(input, "1234ABC");
    await userEvent.click(button);

    expect(input).toHaveValue("1234ABC");
  });
});
