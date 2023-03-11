"use strict";
const units3 = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
const convert3 = (value, fromUnit, toUnit) => {
    const fromIndex = units3.indexOf(fromUnit);
    const toIndex = units3.indexOf(toUnit);
    const expoent = toIndex - fromIndex;
    return value * (10 ** expoent);
};
