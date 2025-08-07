# Flexbox

## Table des Matières

## Introduction

Flexbox (ou Flexible Box Module) est une méthode de mise en page unidirectionnelle en CSS3 qui permet de concevoir des interfaces complexes et réactives avec un contrôle précis sur l'alignement, la direction et l'ordre des éléments. Contrairement aux méthodes de mise en page traditionnelles (comme `float` et `position`), Flexbox est conçu pour organiser des éléments dans une seule dimension à la fois (soit en ligne, soit en colonne). C'est un outil puissant pour créer des layouts flexibles et dynamiques qui s'adaptent facilement aux différentes tailles d'écran.

## Concepts Clés

Pour comprendre Flexbox, il est essentiel de maîtriser quelques concepts fondamentaux :

*   **Conteneur Flexible (Flex Container):** C'est l'élément parent sur lequel la propriété `display: flex;` ou `display: inline-flex;` est appliquée. Tous les enfants directs de ce conteneur deviennent des **éléments flexibles (flex items)**.
*   **Élément Flexible (Flex Item):** Ce sont les enfants directs du conteneur flexible. Ils sont disposés selon les règles définies sur le conteneur.
*   **Axe Principal (Main Axis):** L'axe le long duquel les éléments flexibles sont disposés. Par défaut, il est horizontal (`row`). Il est défini par la propriété `flex-direction`.
*   **Axe Secondaire (Cross Axis):** L'axe perpendiculaire à l'axe principal. Par défaut, il est vertical (`column`) si l'axe principal est horizontal, et horizontal si l'axe principal est vertical.
*   **Ligne Principale (Main Start / Main End):** Le début et la fin de l'axe principal.
*   **Ligne Secondaire (Cross Start / Cross End):** Le début et la fin de l'axe secondaire.

## Propriétés du Conteneur Flexible

Ces propriétés sont appliquées à l'élément parent (`display: flex;`).

### `display`

Définit un conteneur flexible. Les éléments enfants directs deviennent des éléments flexibles.

*   `flex`: L'élément génère un conteneur flexible au niveau du bloc.
*   `inline-flex`: L'élément génère un conteneur flexible au niveau en ligne.


Les éléments peuvent se rétracter ou se dilater suivant l'espace disponible.