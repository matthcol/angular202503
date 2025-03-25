// type cities par inférence de type: string[]
const cities = ["Montauban", "L'Haÿ-les-Roses", "Avelin", "Pau", "Toulouse"]

// const désigne le fait que l'objet reste le même
cities.push("Paris") // OK
// cities = [] // KO


// méthode splice
console.log(cities)
// 1. insert
cities.splice(3, 0, "Lyon", "Marseille", "Lille")
console.log(cities)
// 2. remove
cities.splice(3, 2)
console.log(cities)
// cities.splice(0, cities.length) // clear
// console.log(cities)
// 3. replace
cities.splice(3, 2, "Bayonne", "Bordeaux", "Brest")
console.log(cities)

// méthode slice (tranche)
const extract1 = cities.slice(0,3)
const extract2 = cities.slice(-3)
const extract3 = cities.slice()
console.log("3 premières villes :", extract1)
console.log("3 dernières villes :", extract2)
console.log("toutes les villes (copie) :", extract3)

extract3.push("Caen")
console.log()
console.log("villes (origine) :", cities)
console.log("villes (copie) :", extract3)

extract3[1] = "Strasbourg"
console.log()
console.log("villes (origine) :", cities)
console.log("villes (copie) :", extract3)


// design pattern Iterator/Iterable
// présence operator [@@iterator]()

// boucle for
// in: parcours les index
// of: parcours les valeurs
console.log()
for (const c of cities){ 
    console.log(c)
}

console.log()
for (const i in cities){ 
    console.log(i)
}

// NB: string est aussi iterable
console.log()
for (const letter of cities[0]){
    console.log(letter)
}

const citiesU = cities.map(city => city.toUpperCase())
console.log(citiesU)

// ancienne notation des fonctions anonymes (avant =>) 
const citiesU2 = cities.map(
    function (city){
        return  city.toUpperCase();
    }
);


// type: string[]
const cityCodes = cities
    .filter(city => city.startsWith("B"))
    .map(city => city.slice(0,4))
    .map(city => city.toUpperCase())
console.log(cityCodes)

// longueurs des villes commençant B
// type: number[]
const citiesLg = cities
    .filter(ville => ville.startsWith("B"))
    .map(ville => ville.length)
console.log(citiesLg)

console.log()
cities.filter(ville => ville.startsWith("B"))
    .map(ville => ville.length)
    .forEach(longueur => console.log(longueur))

// combien de lettres au total, pour les villes commençant par B
// type: number
const totalLetter = cities.filter(ville => ville.startsWith("B"))
    .map(ville => ville.length)
    .reduce((l1, l2) => l1 + l2)
console.log()
console.log(totalLetter)

const totalLetter1 = cities.filter(ville => ville.startsWith("A"))
    .map(ville => ville.length)
    .reduce((l1, l2) => l1 + l2)
console.log()
console.log(totalLetter1)

const totalLetter0 = cities.filter(ville => ville.startsWith("Z"))
    .map(ville => ville.length)
    .reduce(
        (l1, l2) => l1 + l2,
        0
    )
console.log()
console.log(totalLetter0)

// itérer sur les valeurs + index
console.log()
cities.forEach((city, i) => console.log(i + 1, city))

// Exercice: mettre (dans un tableau) les villes commençant par B en majuscule, 
// associées à un index commençant par 1
// Example: [[1, "Bayonne"], [2, "Bordeaux"], ...]

// type inféré:  (string | number)[][]  => pas assez précis
// const indexedCities = cities
const indexedCities: [number, string][] = cities
    .filter(city => city.startsWith("B"))
    .map(city => city.toUpperCase())
    .map((city, i) => [i + 1, city])
console.log(indexedCities)

indexedCities.push([4, 'Lille'])
// indexedCities.push(['Lyon', 5])   // [string, number] non compatible avec [number, string]
// indexedCities.push([6, 'Lens', 5]) // // [number, string, number] taille 3 non compatible avec [number, string] taille 2

// premier élément du tableau de paires
// type: [number, string] i.e paire(number, string)
const indexedCity = indexedCities[0]
console.log(
    indexedCity[0], // number
    indexedCity[1].toLowerCase(), // string
    // indexedCity[3] // Erreur: pas de case #3
)

// destructuration d'un tableau
// types: nb: number, cty: string
const [nb, cty] = indexedCities[0]
console.log(nb, cty.toLowerCase())


// Variante exercice (TODO): mettre la position de départ
// Example: [[4, "Bayonne"], [5, "Bordeaux"], ...]


// Typescript: array vs tuple (class Array)
const numbers1: number[] = [11, 33, 44] // dynamique, longueur quelconque
const coords3d: [number, number, number] = [11, 33, 44] // triplet (x, y, z) // longueur + type de chaque case

const ville1: [string, number, string] = ['Montauban', 62_487, '81000'] // triplet (nom, population, code postal)
const ville2: (string | number)[] = ['Montauban', 62_487, '81000']
const ville3: any[] = ['Montauban', 62_487, '81000']

// Exercice: faire un parcours du tableau indexedCities = [[1, "BAYONNE"], [2, "BORDEAUX"], [3, "BREST"]]
//     en utilisant la destructuration 
// 2 solutions: boucle for ou méthode .forEach

// sans destructuration (indirection)
console.log()
for (let i in indexedCities){
    console.log('*', indexedCities[i])
    console.log('\t position: ', indexedCities[i][0])
    console.log('\t ville: ', indexedCities[i][1])
}

console.log()
for (let positionVille of indexedCities){
    console.log('*', positionVille)
    console.log('\t position: ', positionVille[0])
    console.log('\t ville: ', positionVille[1])
}

// avec destructuration (better !)
console.log()
for (const [position, ville] of indexedCities){
    console.log('^', position, ville.toLowerCase())
}

console.log()
indexedCities.forEach(
    ([position, ville]) => console.log('~', position, ville.toLowerCase())
)

