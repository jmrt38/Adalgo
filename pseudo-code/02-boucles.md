# Chapitre 02 — Boucles

## Exercice 1

VARIABLES
n : ENTIER
i : ENTIER

DEBUT
LIRE n
    POUR i de 1 à n FAIRE
    AFFICHER i
    FIN POUR
FIN


## Exercice 2

VARIABLES
n : ENTIER
i : ENTIER

DEBUT
LIRE n
    POUR i de 1 à n FAIRE
        SI i % 2 === 0 ALORS
        AFFICHER i
        FIN SI
    FIN POUR
FIN


## Exercice 3

VARIABLES
n : ENTIER
i : ENTIER
add : ENTIER

DEBUT
add ← 0
LIRE n
    POUR i de 1 à n FAIRE
    add ← add + i
    FIN POUR
RETOURNER somme
FIN


## Exercice 4

VARIABLES
n : ENTIER
i : ENTIER
mult : ENTIER

DEBUT
mult ← 1
LIRE n
    POUR i de 1 à n FAIRE
    mult ← mult * i
    FIN POUR
RETOURNER mult
FIN


## Exercice 5

VARIABLES
n : ENTIER
i : ENTIER
compteur : ENTIER

DEBUT
compteur ← 0
LIRE n
    POUR i de 1 à n FAIRE
        SI i % 2 === 0 ALORS
        compteur ← compteur ++
        FIN SI
    FIN POUR
RETOURNER compteur
FIN


## Exercice 6

VARIABLES
n : ENTIER
i : ENTIER
multiples : ENTIER []

DEBUT
    POUR i de 1 à n FAIRE
    AJOUTER n * i À LA FIN DE multiples
    FIN POUR
RETOURNER multiples
FIN


## Exercice 7

VARIABLES
n : ENTIER
i : ENTIER
tab : ENTIER []

DEBUT
    POUR i de 1 à i * n <= limite FAIRE
    AJOUTER n * i À LA FIN DE tab
    FIN POUR
    RETOURNER tab
FIN


## Exercice 8

VARIABLES
base : ENTIER
exposant : ENTIER
i : ENTIER
calc : ENTIER

DEBUT
LIRE base
LIRE exposant
calc ← 1
    POUR i de 1 à exposant FAIRE
    calc ← calc * base
    FIN POUR
    RETOURNER calc
FIN