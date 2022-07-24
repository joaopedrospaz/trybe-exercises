// parte 1 - quadrado
let n = 5;
let line1 = ''

for (let index = 0; index < n; index += 1) {
    line1 += '*'    
}

for (let index = 0; index < n; index += 1) {
    console.log(line1);
}

// parte 2 - triângulo 
let line2 = '';
for (let index = 0; index < n; index += 1) {
    line2 += '*'  
    console.log(line2);  
}

// parte 2 - triângulo invertido
let line3 = ''
let inputPosition = n - 1;

for (let line = 0; line < n; line += 1) {
    for (let column = 0; column < n; column += 1) {
        if (column < inputPosition) {
            line3 += ' '
        }
        else {
            line3 += '*'
        }
    }
    console.log(line3);
    line3 = ''
    inputPosition -= 1    
}

