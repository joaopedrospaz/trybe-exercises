const {encode, decode} = require('./encodeDecode');

describe('Testa a função encode', () => {
    it('a função encode é definida', () => {
        expect(encode).toBeDefined();
    });
    it('encode é uma função', () => {
        expect(typeof encode).toEqual('function');
    });
    it('converte apenas a vogal "a" no número 1', () => {
        expect(encode('ama')).toEqual('1m1');
    });
    it('converte apenas a vogal "e" no número 2', () => {
        expect(encode('esse')).toEqual('2ss2');
    });
    it('converte apenas a vogal "i" no número 3', () => {
        expect(encode('infringir')).toEqual('3nfr3ng3r');
    });
    it('converte apenas a vogal "o" no número 4', () => {
        expect(encode('ovo')).toEqual('4v4');
    });
    it('converte apenas a vogal "u" no número 5', () => {
        expect(encode('umbu')).toEqual('5mb5');
    });
    it('checa se o retorno tem o mesmo número de caracteres', () => {
        expect(encode('bahia').length).toEqual(5);
    });
});

describe('Testa a função decode', () => {
    it('a função decode é definida', () => {
        expect(decode).toBeDefined();
    });
    it('encode é uma função', () => {
        expect(typeof decode).toEqual('function');
    });
    it('converte apenas o número 1 na letra "a"', () => {
        expect(decode('1m1')).toEqual('ama');
    });
    it('converte apenas o número 2 na letra "e"', () => {
        expect(decode('2ss2')).toEqual('esse');
    });
    it('converte apenas o número 3 na letra "i"', () => {
        expect(decode('3nfr3ng3r')).toEqual('infringir');
    });
    it('converte apenas o número 4 na letra "o"', () => {
        expect(decode('4v4')).toEqual('ovo');
    });
    it('converte apenas o número 5 na letra "u"', () => {
        expect(decode('5mb5')).toEqual('umbu');
    });
    it('checa se o retorno tem o mesmo número de caracteres', () => {
        expect(decode('b1h31').length).toEqual(5);
    });
});