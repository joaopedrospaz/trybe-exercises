const techList = (array, name) => {
    const list = [];
    const sortedArray = array.sort()
    for (tech in sortedArray) {
        list.push(
            {
                tech: sortedArray[tech],
                name: name
            }
        );
    }
    if (list.length === 0) {
        return 'Vazio!';
    } else {
        return list;
    }
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
module.exports = techList;