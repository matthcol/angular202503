// variables: const or let (old keyword: var)

// variable constante: const
const welcomeMessage = "Hello World"
console.log(welcomeMessage)
console.log(typeof welcomeMessage) // string

// welcomeMessage = "Coucou le monde"
// Error: a const variable is not modifiable


// variable modifiable: let
let nb = 0
console.log(nb)
nb = 4
console.log(nb)
nb++
console.log(nb)
nb += 2
console.log(nb)
console.log(typeof nb)  // number (integers and floats)

// déconseillé (moins sûr)
var x = 3
console.log(x)

function compute(x: number): number {
    return x * x + 1
}

const y = compute(nb)
// const z = compute(welcomeMessage) // wrong argument type
console.log(y)
// console.log(z)

// type boolean
console.log(nb >= 10)
console.log(typeof (nb >= 10))

nb = 3.14
console.log(nb)
nb = 1.516E24
console.log(nb)

// 2 special constants
console.log(null) // optional data
console.log(undefined)
