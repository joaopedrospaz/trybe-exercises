let n = 5

// parte 1 - quadrado 
let line = '';
for (let index = 0; index < n; index += 1) {
    line += '*';
}
for (let index = 0; index < n; index += 1) {
    console.log(line);
}

// parte 2 - triângulo 
let line2 = '';
for (let index = 0; index < n; index += 1) {
    line2 += '*';
    console.log(line2);
}

// parte 3 triângulo invertido 
let line3 = ''
let position = n - 1

for (let line = 0; line < n; line += 1) {
    for (let column = 0; column < n; column += 1) {
        if (column < position) {
            line3 += ' '
        }
        else {
            line3 += '*'
        }
    }
    console.log(line3);    
    line3 = ''
    position -= 1
}

// parte 4 - pirâmide 
let line4 = '';
let middle = (n + 1) / 2;
let left = middle;
let right = middle;

for (let line = 0; line <= middle; line += 1) {
    for (let column = 0; column <= n; column += 1) {
        if (column > left && column < right) {
            line4 += '*';
        }
        else {
            line4 += ' ';
        }
    }
    console.log(line4);
    line4 = '';
    left -= 1;
    right += 1;    
}

//  parte 5 - pirâmida com meio vazio 
let m = 7;
let line5 = '';
let meio = (m + 1) / 2;
let esq = meio;
let dir = meio;

for (let line = 1; line <= meio; line += 1) {
    for (let column = 1; column <= m; column += 1) {
        if (column == esq || column == dir || line == meio) {
            line5 += '*';
        } 
        else {
            line5 += ' ';
        }
    }
    console.log(line5);
    line5 = '';
    esq -= 1;
    dir += 1;    
}



