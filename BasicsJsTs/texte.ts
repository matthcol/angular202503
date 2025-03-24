// string litteral: simple quote (') or double quote (") 
const city = 'Montauban'
const population = 62_487
console.log("Ville :", city)
console.log("Ville : %s, %s ; population : %d", city, city.toUpperCase(), population)
console.log(city + " : " + population) // concat

// texte interpolé (template string)
const message = `ville : ${city} (${population})`
console.log(message)

const cityCode = city.toUpperCase()
    .slice(0, 4)

console.log(cityCode)
console.log(city.slice(-1))
console.log(city.slice(-4))
console.log(city.slice(-4, -2))
console.log(city[0])

// signature methode: toLocaleUpperCase(locales?: string | string[]): string
// ?: facultatif
// |: ou
city.toLocaleUpperCase()

const city2 = "L'Haÿ-les-Roses"
console.log(city2.toUpperCase())

// cities: string[]
const cities = [city, city2]
console.log(cities)
cities.push("Avelin")
console.log(cities)
cities.push("Pau", "Toulouse")
console.log(cities)
// cities.push(123) // wrong type argument

// avec const, il est en général inutile de déclarer son type
const city3: string = 'Paris'

// avec let sans initialisation, le typage est nécessaire
let population2: number
// console.log(population2) // usage of an undefined variable

population2 = 77_000
console.log(population2)

population2 = 2_048_472
console.log(population2)

console.log()
// of: parcours les valeurs
for (const c of cities){ // variable de parcours: 'let' ou 'const' 
    console.log(c)
}

console.log()
// in: parcours les index
for (const c in cities){ 
    console.log(c)
}
