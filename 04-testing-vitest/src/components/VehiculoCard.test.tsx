import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import VehiculoCard from "./VehiculoCard";

describe("VehiculoCard", () => {
  it("renderiza correctamente el componente (snapshot)", () => {
    const { container } = render(
      <VehiculoCard matricula="1234ABC" modelo="Toyota" itv={true} />
    );

    expect(container).toMatchSnapshot();
  });
});
