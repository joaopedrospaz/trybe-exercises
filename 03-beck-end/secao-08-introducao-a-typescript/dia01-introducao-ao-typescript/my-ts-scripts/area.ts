const units4  = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'ml']

const convert4 = (value: number, fromUnit: string, toUnit: string):  number => {
    const fromIndex = units4.indexOf(fromUnit);
    const toIndex = units4.indexOf(toUnit);
    const expoente = toIndex - fromIndex;
    return value * (100 ** expoente)

}