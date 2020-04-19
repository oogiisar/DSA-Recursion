const powerCalculator = function(base, exponent) {
    if(exponent < 0) {
        return 'exponent should be >= 0';
    }
    if(exponent === 0) {
        return 1; 
    }
    return base * powerCalculator(base, (exponent - 1));
}
console.log(powerCalculator(10, 2))