# Chapitre 01 — Conditions

## Exercice 1

VARIABLES
n : ENTIER

DEBUT
LIRE n
    SI n >= 0 ALORS
    RETOURNER true
    SINON
    RETOURNER false
    FIN SI
FIN

## Exercice 2

VARIABLES
n : ENTIER

DEBUT
LIRE n
    SI n % 2 === 0 ALORS
    RETOURNER true
    SINON
    RETOURNER false
    FIN SI
FIN


## Exercice 3

VARIABLES
a : ENTIER
b : ENTIER

DEBUT
LIRE a
LIRE b
    SI a > b ALORS
    RETOURNER a
    SINON
    RETOURNER b
    FIN SI
FIN


## Exercice 4

VARIABLES
note : ENTIER

DEBUT
LIRE note
    SI note note >= 0 ET note <= 20

        SI note >= 16 ALORS
        RETOURNER "Très bien"

        SINON SI note >= 14 ALORS
        RETOURNER "Bien"

        SINON SI note >= 12 ALORS
        RETOURNER "Assez bien"

        SINON SI note >= 10 ALORS
        RETOURNER "Passable"

        SINON SI note < 10 ALORS
        RETOURNER "Insuffisant"

        SINON
        RETOURNER "Erreur, veuillez rentrer une note valide"

        FIN SI

    FIN SI
FIN


## Exercice 5

VARIABLES
n : ENTIER

DEBUT
LIRE n 
    SI n % 3 === 0 ET n % 5 === 0 ALORS
    RETOURNE "FizzBuzz"

    SINON SI n % 3 === 0 ALORS
    RETOURNE "Fizz"

    SINON SI n % 5 === 0 ALORS
    RETOURNE "Buzz"

    SINON
    RETOURNE String(n)

    FIN SI
FIN