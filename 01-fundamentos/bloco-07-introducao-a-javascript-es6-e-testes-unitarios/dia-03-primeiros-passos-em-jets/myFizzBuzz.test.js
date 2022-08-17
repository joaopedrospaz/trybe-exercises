const myFizzBuzz = require("./myFizzBuzz");

describe('Testa a função myFizzBuzz', () => {
    it('Verifica se de acordo com o parâmetro retorna o valor esperado', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(9)).toBe('fizz');
        expect(myFizzBuzz(5)).toBe('buzz');
        expect(myFizzBuzz(7)).toBe(7);
        expect(myFizzBuzz('6')).toBe(false);
    });
});