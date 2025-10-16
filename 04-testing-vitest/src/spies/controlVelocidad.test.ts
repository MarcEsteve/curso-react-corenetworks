import { describe, it, expect, vi } from "vitest";
import * as alertas from "./alertas";
import { verificarVelocidad } from "./controlVelocidad";

describe("verificarVelocidad()", () => {
  it("debería llamar a enviarAlerta si se supera el límite", () => {
    // 🕵️‍♂️ Espiamos la función 'enviarAlerta'
    const spy = vi.spyOn(alertas, "enviarAlerta");

    verificarVelocidad(120, 100);

    // ✅ Verifica si se llamó
    expect(spy).toHaveBeenCalled();

    // ✅ Verifica cuántas veces
    expect(spy).toHaveBeenCalledTimes(1);

    // ✅ Verifica con qué argumento
    expect(spy).toHaveBeenCalledWith("Exceso de velocidad detectado");
  });
});
