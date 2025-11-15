//Pruebas unitarias con JEST

import { sumar, restar } from "../../lib/calculator";

describe("Pruebas de calculadora", () => {
  test("sumar 2 + 3 debe ser 5", () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test("restar 5 - 3 debe ser 2", () => {
    expect(restar(5, 3)).toBe(2);
  });
});
