// Parte 1
const testingScope = escopo => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope}, ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }
testingScope(true);

// parte 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortOddsAndEvens = () => {
    for (let i = 1; i < oddsAndEvens.length;  i += 1) {
        for (let j = 0; j < i; j += 1) {
            if (oddsAndEvens[i] < oddsAndEvens[j]) {
              let  number = oddsAndEvens[i];
                oddsAndEvens[i] = oddsAndEvens[j];
                oddsAndEvens[j] = number;
            }
        }
    }
    return oddsAndEvens    
};

console.log(sortOddsAndEvens()); 
