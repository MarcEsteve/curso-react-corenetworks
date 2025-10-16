export function sumar(a: number, b: number) {
  return a + b;
}

export function restar(a: number, b: number) {
  return a - b;
}

export function multiplicar(a: number, b: number) {
  return a * b;
}

/**
 * Divide a entre b.
 * Lanza error si b === 0 para evitar división por cero.
 */
export function dividir(a: number, b: number) {
  if (b === 0) throw new Error("División por cero");
  return a / b;
}
