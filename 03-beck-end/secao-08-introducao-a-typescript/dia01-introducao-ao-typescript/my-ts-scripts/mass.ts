const units2 = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

const convert2 = (value: number, fromUnit: string, toUnit: string):  number => {
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
    const expoent = toIndex - fromIndex;
    return value * (10 ** expoent)
}