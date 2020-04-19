function stringSplitter(string, seperator) {
    // base case
    if (string.length === 0) {
        return '';
        // general cases
    } 
    if (string[0] === seperator) {
        return stringSplitter(string.slice(1), seperator);
    } else {
        return string[0] + stringSplitter(string.slice(1), seperator);
    }
}

console.log(stringSplitter('02/20/2020', '/')) 