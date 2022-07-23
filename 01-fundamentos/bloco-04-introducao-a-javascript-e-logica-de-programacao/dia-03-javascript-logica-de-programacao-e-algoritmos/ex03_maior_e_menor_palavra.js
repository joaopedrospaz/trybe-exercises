let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0].length;

for (let index = 1; index < array.length; index += 1) {
    if (array[index].length > biggestWord) {
        biggestWord = array[index];
    }
}
console.log(biggestWord);

let smallestWord = array[0].length;

for (index = 1; index < array.length; index += 1) {
    if (array[index].length < smallestWord); {
        smallestWord = array[index];
    }
}
console.log(smallestWord);