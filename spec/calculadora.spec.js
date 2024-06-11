describe("Teste Calculadora", function () {
    it("Somas válidas", function () {
        expect(soma(1, 2)).toBe(3);
        expect(soma(9, 9)).toBe(18);
      
    });
}); it("Mutiplicações válidas", function () {
    expect(multiplicacao(1, 2)).toBe(2);
    expect(multiplicacao(9, 9)).toBe(81);
});
it("Divisões válidas", function () {
    expect(divisao(2, 1)).toBe(2);
    expect(divisao(9, 9)).toBe(1);
});

it("Subtrações válidas", function () {
    expect(subtracao(2, 1)).toBe(1);
    expect(subtracao(9, 9)).toBe(0);
    
});
it("Somas válidas", function () {
    expect(soma(1, 2)).toBe(3);
    expect(soma(9, 9)).toBe(11);
  
});