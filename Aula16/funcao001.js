function parimp(n) {
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let res = parimp(144)
console.log(res)

console.log(parimp(145.1))
