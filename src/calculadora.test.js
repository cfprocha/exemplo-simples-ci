const {somar} = require('./calculadora');

test('Deve retornar a soma de dois números', () => {
    expect(somar(2, 3)).toBe(5);
});