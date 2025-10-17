import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import PanelDGT from "./PanelDGT";

// 🎭 Mock básico del componente hijo
vi.mock("./AlertaDGT", () => ({
  default: () => <div>Mock de Alerta 🚧</div>,
}));

describe("PanelDGT", () => {
  it("renderiza el mock del componente hijo", () => {
    render(<PanelDGT />);
    const texto = screen.getByText("Mock de Alerta 🚧");

    // ✅ Sin jest-dom → usamos solo expect(value).toBeTruthy()
    expect(texto).toBeTruthy();
  });
});
