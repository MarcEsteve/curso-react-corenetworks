import { describe, it, expect } from "vitest";
import { sumar, restar, multiplicar, dividir } from "./operaciones";

// Suite de tests, agrupación de tests
describe("Operaciones aritméticas", () => {
  // AAA: Arrange | Act | Assert

  it("sumar() debe sumar dos números", () => {
    // Arrange
    const a = 2, b = 3;

    // Act
    const resultado = sumar(a, b);

    // Assert
    expect(resultado).toBe(5);
  });

  it("restar() debe restar dos números", () => {
    const a = 10, b = 4;
    const resultado = restar(a, b);
    expect(resultado).toBe(6);
  });

  it("multiplicar() debe multiplicar dos números", () => {
    const a = 7, b = 6;
    const resultado = multiplicar(a, b);
    expect(resultado).toBe(42);
  });

  it("dividir() debe dividir dos números", () => {
    const a = 20, b = 4;
    const resultado = dividir(a, b);
    expect(resultado).toBe(5);
  });

  it("dividir() debe lanzar error cuando b = 0", () => {
    expect(() => dividir(10, 0)).toThrow("División por cero");
  });
});
