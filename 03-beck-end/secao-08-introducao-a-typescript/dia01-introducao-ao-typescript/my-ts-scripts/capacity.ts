const units3 = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml']

const convert3 = (value: number, fromUnit: string, toUnit: string):  number => {
    const fromIndex = units3.indexOf(fromUnit);
    const toIndex = units3.indexOf(toUnit)
    const expoent = toIndex - fromIndex;
    return value * (10 ** expoent)
} 

