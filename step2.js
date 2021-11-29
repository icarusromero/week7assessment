const perf = require('execution-time')();

// SUM ZERO
const addToZero = arr => {
    for(let i = 0; i < arr.length; i++){
        for(let x = i + 1; x < arr.length; x++){
            if(arr[i] + arr[x] === 0){
                return true
            }
        }
    }
    return false
}

console.log('sum zero checks')
console.log(addToZero([]))
console.log(addToZero([1, 2, 5, -3]))
perf.start()
console.log(addToZero([9, 5, -7, 5, 7, -2]))
let runtime1 = perf.stop()
console.log(runtime1.preciseWords)



// UNIQUE CHARACTERS
function unique(word){
    for (let i = 0; i < word.length; i++){
        for (let x = i + 1; x < word.length; x++){
            if(word[i] === word[x]){
                return false;
            }
        }
    }
    return true;
}

console.log('unique char checks')
perf.start()
console.log(unique('mandy'))
let runtime2 = perf.stop()
console.log(runtime2.preciseWords)
console.log(unique('dandy'))
console.log(unique('sayonci'))



// PANGRAM SENTENCE
const isPangram = str => {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    str = str.toLowerCase()
    alphabet.forEach(element => {
        let contains = str.includes(element)
        if(contains){
            return false
        }
    })
    return true
}

console.log('pangram checks')
perf.start()
console.log(isPangram('The quick brown fox jumps over the lazy dog!'))
let runtime3 = perf.stop()
console.log(runtime3.preciseWords)
console.log(isPangram('Careful, if you pee in the matrix you pee in real life.'))



// LONGEST WORD
const findLogestWord = arr => {
    let wordLengths = []
    for(let i = 0; i < arr.length; i++){
        wordLengths.push(arr[i].length)
    }
    return Math.max(...wordLengths)
}

console.log('longest word checks')
perf.start()
console.log(findLogestWord(['helolo', 'bingus', 'turbo', 'elephant', 'ant']))
let runtime4 = perf.stop()
console.log(runtime4.preciseWords)
console.log(findLogestWord(['yolo', 'hotdog', 'sonic', 'f']))