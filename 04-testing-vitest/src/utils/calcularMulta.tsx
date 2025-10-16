import { describe, it, expect } from "vitest";

function calcularMulta(velocidad: number, limite: number) {
  if (velocidad <= limite) return null;
  return {
    tipo: velocidad > limite + 20 ? "grave" : "leve",
    puntos: velocidad > limite + 20 ? 6 : 3,
  };
}

describe("calcularMulta()", () => {
  it("devuelve null si la velocidad es legal", () => {
    expect(calcularMulta(80, 100)).toBeNull();
  });

  it("devuelve un objeto con tipo 'leve' si se supera levemente", () => {
    const multa = calcularMulta(110, 100);
    expect(multa).toHaveProperty("tipo", "leve");
    expect(multa).toHaveProperty("puntos", 3);
  });

//   it("devuelve un objeto con tipo 'grave' si se supera mucho", () => {
//     const multa= calcularMulta(130, 100);
//     expect(multa.tipo).toBe("grave");
//     expect(multa.puntos).toBeGreaterThan(3);
//   });
});
