# Chapitre 03 - Tableaux

## Exercice 1

VARIABLES
tableau : ENTIER []
element : ENTIER
max : ENTIER

DEBUT
LIRE tableau
max ← tableau[0]

    POUR CHAQUE element DE tableau FAIRE

        SI element > max ALORS
        max = element
        FIN SI

    FIN POUR
RETOURNER max
FIN


## Exercice 2

VARIABLES
tableau : ENTIER []
element : ENTIER
min : ENTIER

DEBUT
LIRE tableau
min ← tableau[0]

    POUR CHAQUE element DE tableau FAIRE

        SI element < min ALORS
        min = element
        FIN SI
        
    FIN POUR
RETOURNER min
FIN


## Exercice 3

DEBUT
LIRE tableau
somme ← 0
moyenne ← 0

POUR i DE 0 A longueur(tableau) - 1 FAIRE
    somme ← somme + tableau[i]
FIN POUR

moyenne ← somme / longueur(tableau)

SI longueur(tableau) === 0 ALORS
    RETOURNER nul
SINON
    RETOURNER moyenne
FIN SI
FIN


## Exercice 4

DEBUT
LIRE tableau, valeur

POUR i ALLANT DE 0 A longueur(tableau) - 1 FAIRE
    SI tableau[i] === valeur ALORS
        RETOURNER vrai
    FIN SI
FIN POUR

RETOURNER faux
FIN


## Exercice 5

DEBUT
LIRE tableau, valeur
compteur ← 0

POUR i ALLANT DE 0 A longueur(tableau) - 1 FAIRE
    SI tableau[i] === valeur ALORS
        compteur ← compteur + 1
    FIN SI
FIN POUR

RETOURNER compteur
FIN