const countSheep = function(sheep) {
    // base case end of the recursion
    if(sheep === 0) {
        return 'All sheep jumped over the fence';
    }
    const next = sheep - 1;
    return  sheep + ': Another sheep jumps over the fence\n' + countSheep(next)
}

console.log(countSheep(7));