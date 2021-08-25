
let memory = []

/**
 * @var nbr mi 4 mi 3
 * @waveType sine
 */
function cache(nbr) {
    if (memory[nbr]) {
        return memory[nbr]
    }
    result = fibonacci(nbr)
    memory[nbr] = result
    return result
}

/**
 * @var nbr fa 3 fa 2
 * @waveType sine
 */
function fibonacci(nbr) {
    if(nbr < 2){
      return nbr;
    }
    return cache(nbr - 1) + cache(nbr - 2);
}

console.log(fibonacci(8));
