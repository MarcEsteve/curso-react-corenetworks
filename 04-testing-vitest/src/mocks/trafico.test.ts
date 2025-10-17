import { describe, it, expect, vi } from "vitest";
import { obtenerEstadoTráfico } from "./trafico";

describe("obtenerEstadoTráfico()", () => {
  it("debería devolver el estado mockeado del tráfico", async () => {
    // 🎭 Mock de fetch global
    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue({ estado: "Denso 🚗🚗" })
    });

    const estado = await obtenerEstadoTráfico("Barcelona");

    expect(estado).toBe("Denso 🚗🚗");
    expect(fetch).toHaveBeenCalledWith("https://api.dgt.es/trafico/Barcelona");
  });
});
