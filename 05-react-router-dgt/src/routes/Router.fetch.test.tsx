import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Vehiculos from "../routes/Vehiculos";
import VehiculoDetalle from "../routes/VehiculoDetalle";

const MOCK_DATA = [
  { matricula: "1234ABC", marca: "Seat", modelo: "León", color: "Gris", seguroEnVigor: true,  fechaUltimaITV: "2024-06-10" },
  { matricula: "5678XYZ", marca: "Renault", modelo: "Clio", color: "Rojo", seguroEnVigor: false, fechaUltimaITV: "2023-11-02" },
];

beforeEach(() => {
  // Mock global fetch
  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: vi.fn().mockResolvedValue(MOCK_DATA),
  } as any);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("React Router con componentes reales y fetch mockeado", () => {
  it("lista vehículos y navega al detalle", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/vehiculos"]}>
        <Routes>
          <Route path="/vehiculos" element={<Vehiculos />} />
          <Route path="/vehiculos/:matricula" element={<VehiculoDetalle />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </MemoryRouter>
    );

    // Espera a que la lista esté en el DOM (uno de los elementos)
    expect(await screen.findByText(/Seat/i)).toBeInTheDocument();

    // Click en el enlace del primer vehículo
    await user.click(screen.getByRole("link", { name: /1234ABC/i }));

    // El detalle debe mostrar la matrícula y otros datos
    expect(await screen.findByText(/Detalle/i)).toBeInTheDocument();
    expect(screen.getByText(/1234ABC/i)).toBeInTheDocument();
    expect(screen.getByText(/Seat León/i)).toBeInTheDocument();
  });

  it("muestra 404 si la matrícula no existe", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/vehiculos/NOEXISTE"]}>
        <Routes>
          <Route path="/vehiculos" element={<Vehiculos />} />
          <Route path="/vehiculos/:matricula" element={<VehiculoDetalle />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </MemoryRouter>
    );

    // Como el detalle busca por matrícula y no la encuentra, debería aparecer el texto 404 del propio detalle
    expect(await screen.findByText(/404/i)).toBeInTheDocument();
  });
});
