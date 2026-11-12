import { estPositif, estPair, max, mention, fizzbuzz } from "./01-conditions.js"

// Pattern : expect(fonction(argument)).toBe(valeur_attendue)
// On te montre estPositif en entier. Pour estPair, c'est le même pattern — à toi.

describe("estPositif", () => {
  it("retourne true pour un nombre positif", () => {
    expect(estPositif(5)).toBe(true)
  })
  it("retourne false pour un nombre négatif", () => {
    expect(estPositif(-3)).toBe(false)
  })
  it("retourne true pour zéro", () => {
    expect(estPositif(0)).toBe(true)
  })
})

// Même pattern qu'estPositif — écris les 3 tests toi-même.
// Cas à couvrir : un nombre pair, un nombre impair, zéro.
describe("estPair", () => {
  it("Retourne true pour un nombre pair", () => {
    expect(estPair(4)).toBe(true)
  })
  it("Retourne false pour un nombre impair", () => {
    expect(estPair(5)).toBe(false)
  })
  it("Retourne true si le nombre est égal à zero", () => {
    expect(estPair(0)).toBe(true)
  })
})

// Nouveau pattern : deux paramètres, cas d'égalité.
// On te montre max en entier.
describe("max", () => {
  it("retourne le plus grand quand a > b", () => {
    expect(max(7, 3)).toBe(7)
  })
  it("retourne le plus grand quand b > a", () => {
    expect(max(3, 7)).toBe(7)
  })
  it("retourne la valeur si les deux sont égaux", () => {
    expect(max(5, 5)).toBe(5)
  })
})

// Même pattern que max — écris les tests pour chaque mention.
// Cas à couvrir : une note dans chaque tranche, et la valeur frontière 16.
describe("mention", () => {
  it("Retourne une erreur si la note est < 0 ou > à 20", () => {
    expect(mention(21)).toBe("Erreur, veuillez rentrer une note valide")
  })
  it("Retourne très bien si la note est entre 16 et 20 inclus", () => {
    expect(mention(17)).toBe("Très bien")
  })
  it("Retourne Bien si la note est 14 ou 15", () => {
    expect(mention(14)).toBe("Bien")
  })
  it("Retourne Assez bien si la note est 12 ou 13", () => {
    expect(mention(12)).toBe("Assez bien")
  })
  it("Retourne Passable si la note est 10 ou 11", () => {
    expect(mention(11)).toBe("Passable")
  })
  it("Retourne Insuffisant si la note est < à 10", () => {
    expect(mention(7)).toBe("Insuffisant")
  })
})

// [FACULTATIF] Même pattern — à toi.
// Cas à couvrir : multiple de 3, multiple de 5, multiple des deux, autre.
describe("fizzbuzz", () => {
  it("retourne FizzBuzz si le nombre est divisible par 3 et 5", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz")
  })
  it("retourne Fizz si le nombre est divisible par 3", () => {
    expect(fizzbuzz(6)).toBe("Fizz")
  })
  it("retourne Buzz si le nombre est divisible par 5", () => {
    expect(fizzbuzz(10)).toBe("Buzz")
  })
})
