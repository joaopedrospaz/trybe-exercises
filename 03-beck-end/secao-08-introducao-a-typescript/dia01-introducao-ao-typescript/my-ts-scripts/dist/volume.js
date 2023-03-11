"use strict";
const units5 = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
const convert5 = (value, fromUnit, toUnit) => {
    const fromIndex = units4.indexOf(fromUnit);
    const toIndex = units4.indexOf(toUnit);
    const expoente = toIndex - fromIndex;
    return value * (1000 ** expoente);
};
