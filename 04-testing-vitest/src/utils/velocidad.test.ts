import { describe, it, expect } from "vitest";
import { estadoVelocidad } from "./velocidad";

describe.skip("estadoVelocidad", () => {
  it("marca multa cuando supera el límite", () => {
    expect(estadoVelocidad(120, 100)).toBe("Multa");
  });
  // Si no añadimos el caso 'Correcto', Branches quedará al 50%.
//   it("marca correcto cuando no supera el límite", () => {
//     expect(estadoVelocidad(90, 100)).toBe("Correcto");
//   });
});
