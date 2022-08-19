const sum = require('./sum');

describe('Testar função sum', () => {
    it('Retorna o valor da soma', () => {
        expect(sum(4, 5)).toBe(9);
        expect(sum(0, 0)).toBe(0)
    });

    it('Teste se a função sum lança um erro quando recebe string', () => {
        expect(() => sum(4, '5').toThrowErorr());
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
    });
});