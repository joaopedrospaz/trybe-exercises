const myRemove = require('./myRemove');

describe('Testar função myRemove', () => {
    it('Verifica se retonar o array removendo o item corretamente', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    });
});