# Liste Exhaustive des Balises HTML

Le langage HTML (HyperText Markup Language) est la structure fondamentale de toutes les pages web. Il est constitué d'une série de balises qui définissent le contenu et la structure d'une page. Cet article liste de manière exhaustive les balises HTML les plus courantes et leur rôle.

## Table des Matières

1.  [Balises de Structure de Base](#balises-de-structure-de-base)
2.  [Balises de Métadonnées](#balises-de-metadonnees)
3.  [Balises de Texte et de Sémantique](#balises-de-texte-et-de-semantique)
4.  [Balises de Liens](#balises-de-liens)
5.  [Balises d'Images et de Multimédia](#balises-dimages-et-de-multimedia)
6.  [Balises de Tableaux](#balises-de-tableaux)
7.  [Balises de Formulaires](#balises-de-formulaires)
8.  [Balises Interactives](#balises-interactives)
9.  [Balises de Script](#balises-de-script)
10. [Balises Sémantiques (HTML5)](#balises-semantiques-html5)

---

## 1. Balises de Structure de Base

Ces balises définissent la structure fondamentale d'un document HTML.

*   `<DOCTYPE html>`: Déclaration du type de document. Doit être la première ligne du document HTML.
*   `<html>`: Élément racine de toute page HTML.
*   `<head>`: Contient les métadonnées du document (titre, liens vers les feuilles de style, scripts, etc.).
*   `<body>`: Contient tout le contenu visible de la page web.

## 2. Balises de Métadonnées

Ces balises se trouvent dans la section `<head>` et fournissent des informations sur le document.

*   `<title>`: Définit le titre de la page affiché dans l'onglet du navigateur.
    
```
html
    <title>Mon Super Site Web</title>
    
```
*   `<meta>`: Fournit des métadonnées sur le document (jeu de caractères, description, mots-clés, etc.).
```
html
    <meta charset="UTF-8">
    <meta name="description" content="Description de ma page.">
    
```
*   `<link>`: Lie un document externe au document actuel (souvent utilisé pour les feuilles de style CSS).
```
html
    <link rel="stylesheet" href="styles.css">
    
```
*   `<style>`: Définit des styles CSS pour le document.
```
html
    <style>
      body { background-color: lightblue; }
    </style>
    
```
*   `<base>`: Spécifie une URL de base et/ou une cible par défaut pour tous les liens relatifs de la page.
```
html
    <base href="https://www.example.com/images/" target="_blank">
    
```
## 3. Balises de Texte et de Sémantique

Ces balises structurent et donnent du sens au contenu textuel.

*   `<h1>` à `<h6>`: Définissent les titres, du plus important (h1) au moins important (h6).
```
html
    <h1>Titre Principal</h1>
    <h2>Sous-titre</h2>
    
```
*   `<p>`: Définit un paragraphe.
```
html
    <p>Ceci est un paragraphe de texte.</p>
    
```
*   `<br>`: Insère un saut de ligne.
```
html
    Ligne 1<br>Ligne 2
    
```
*   `<hr>`: Crée une ligne horizontale, souvent utilisée comme séparateur thématique.
*   `<pre>`: Définit un texte préformaté. Le texte à l'intérieur conserve les espaces et les sauts de ligne.
```
html
    <pre>
      Ceci est un
      texte préformaté.
    </pre>
    
```
*   `<blockquote>`: Définit une section qui est citée d'une autre source.
```
html
    <blockquote cite="https://www.citation-exemple.com">
      Ceci est une citation célèbre.
    </blockquote>
    
```
*   `<q>`: Définit une courte citation en ligne.
```
html
    Comme l'a dit quelqu'un, <q>C'est une bonne idée !</q>.
    
```
*   `<cite>`: Indique le titre d'une œuvre (livre, film, chanson, etc.).
```
html
    Mon livre préféré est <cite>Le Petit Prince</cite>.
    
```
*   `<abbr>`: Définit une abréviation ou un acronyme. L'attribut `title` peut fournir la signification complète.
```
html
    <abbr title="HyperText Markup Language">HTML</abbr> est un langage de balisage.
    
```
*   `<address>`: Définit les informations de contact de l'auteur/propriétaire d'un document ou d'un article.
*   `<ins>`: Définit un texte qui a été inséré dans le document.
*   `<del>`: Définit un texte qui a été supprimé du document.
```
html
    Prix initial: <del>100€</del> Nouveau prix: <ins>80€</ins>
    
```
*   `<strong>`: Indique un texte important (souvent affiché en gras par défaut).
*   `<em>`: Indique un texte emphasis (souvent affiché en italique par défaut).
*   `<b>`: Met le texte en gras (sans signification sémantique forte).
*   `<i>`: Met le texte en italique (sans signification sémantique forte).
*   `<u>`: Souligne le texte (évitez pour le texte non-lien).
*   `<s>`: Texte barré (indique que le texte n'est plus pertinent).
*   `<small>`: Rend le texte plus petit (souvent utilisé pour les mentions légales ou les notes de bas de page).
*   `<code>`: Définit un morceau de code informatique.
```
html
    Pour afficher "Bonjour", utilisez la fonction <code>console.log("Bonjour");</code>.
    
```
*   `<kbd>`: Définit une entrée clavier.
```
html
    Appuyez sur <kbd>Ctrl</kbd> + <kbd>C</kbd> pour copier.
    
```
*   `<samp>`: Définit un exemple de sortie d'un programme informatique.
```
html
    Le message d'erreur était : <samp>Fichier introuvable</samp>.
    
```
*   `<var>`: Définit une variable dans un contexte mathématique ou de programmation.
```
html
    L'équation est <var>x</var> = <var>y</var> + <var>z</var>.
    
```
*   `<mark>`: Met en évidence du texte.
```
html
    Les mots clés sont <mark>importants</mark>.
    
```
*   `<sub>`: Définit un indice.
```
html
    H<sub>2</sub>O
    
```
*   `<sup>`: Définit un exposant.
```
html
    E = mc<sup>2</sup>
    
```
## 4. Balises de Liens

Ces balises permettent de créer des liens vers d'autres pages ou ressources.

*   `<a>`: Définit un hyperlien. L'attribut `href` spécifie l'URL de destination.
```
html
    <a href="https://www.google.com">Visitez Google</a>
    
```
## 5. Balises d'Images et de Multimédia

Ces balises permettent d'intégrer des images, des fichiers audio et vidéo.

*   `<img>`: Définit une image. L'attribut `src` spécifie le chemin de l'image et l'attribut `alt` fournit un texte alternatif pour l'accessibilité.
```
html
    <img src="logo.png" alt="Logo de l'entreprise">
    
```
*   `<audio>`: Définit un contenu audio.
```
html
    <audio controls>
      <source src="musique.mp3" type="audio/mpeg">
      Votre navigateur ne supporte pas l'élément audio.
    </audio>
    
```
*   `<video>`: Définit un contenu vidéo.
```
html
    <video width="320" height="240" controls>
      <source src="film.mp4" type="video/mp4">
      Votre navigateur ne supporte pas l'élément vidéo.
    </video>
    
```
*   `<source>`: Spécifie plusieurs sources de média pour les éléments `<audio>` et `<video>`.
*   `<track>`: Définit les pistes de texte pour les éléments `<audio>` et `<video>` (sous-titres, légendes, descriptions audio, etc.).

## 6. Balises de Tableaux

Ces balises sont utilisées pour créer des tableaux de données structurées.

*   `<table>`: Définit un tableau.
*   `<caption>`: Définit la légende d'un tableau.
*   `<thead>`: Groupe le contenu d'en-tête d'un tableau.
*   `<tbody>`: Groupe le contenu du corps d'un tableau.
*   `<tfoot>`: Groupe le contenu du pied d'un tableau.
*   `<tr>`: Définit une ligne dans un tableau.
*   `<th>`: Définit une cellule d'en-tête dans un tableau.
*   `<td>`: Définit une cellule de données dans un tableau.

```
html
<table>
  <caption>Population mondiale</caption>
  <thead>
    <tr>
      <th>Pays</th>
      <th>Population</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Chine</td>
      <td>1.4 milliards</td>
    </tr>
    <tr>
      <td>Inde</td>
      <td>1.3 milliards</td>
    </tr>
  </tbody>
</table>
```
## 7. Balises de Formulaires

Ces balises sont utilisées pour créer des formulaires interactifs pour la saisie de données par l'utilisateur.

*   `<form>`: Définit un formulaire HTML. L'attribut `action` spécifie l'URL où envoyer les données du formulaire, et l'attribut `method` spécifie la méthode HTTP (`get` ou `post`).
```
html
    <form action="/submit-form" method="post">
      <!-- Éléments de formulaire ici -->
    </form>
    
```
*   `<input>`: Définit un champ de saisie de données. L'attribut `type` spécifie le type d'entrée (texte, mot de passe, case à cocher, radio, bouton, etc.).
```
html
    <input type="text" name="username" placeholder="Nom d'utilisateur">
    <input type="password" name="password">
    <input type="checkbox" name="remember_me"> Se souvenir de moi
    <input type="radio" name="gender" value="male"> Homme
    <input type="radio" name="gender" value="female"> Femme
    <input type="submit" value="Envoyer">
    
```
*   `<textarea>`: Définit une zone de texte multi-lignes.
```
html
    <textarea name="message" rows="4" cols="50">Votre message ici...</textarea>
    
```
*   `<label>`: Définit une étiquette pour un élément de formulaire. L'attribut `for` associe l'étiquette à l'élément de formulaire par son `id`.
```
html
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    
```
*   `<select>`: Crée une liste déroulante.
```
html
    <label for="cars">Choisissez une voiture:</label>
    <select id="cars" name="cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
    </select>
    
```
*   `<option>`: Définit une option dans une liste déroulante `<select>`.
*   `<button>`: Définit un bouton cliquable.
```
html
    <button type="button">Cliquez-moi</button>
    <button type="submit">Soumettre le formulaire</button>
    
```
*   `<fieldset>`: Groupe les éléments associés dans un formulaire.
*   `<legend>`: Définit une légende pour un groupe d'éléments de formulaire à l'intérieur d'un `<fieldset>`.
*   `<datalist>`: Spécifie une liste d'options prédéfinies pour un champ `<input>`.
```
html
    <input list="browsers">
    <datalist id="browsers">
      <option value="Internet Explorer">
      <option value="Firefox">
      <option value="Chrome">
    </datalist>
    
```
*   `<output>`: Définit le résultat d'un calcul.

## 8. Balises Interactives

Ces balises gèrent l'interactivité.

*   `<details>`: Crée un widget "disclosure" à partir duquel l'utilisateur peut obtenir ou masquer des informations supplémentaires.
*   `<summary>`: Définit un résumé, une légende ou un titre pour l'élément `<details>`.

```
html
<details>
  <summary>Cliquez pour en savoir plus</summary>
  <p>Voici les informations supplémentaires.</p>
</details>
```
## 9. Balises de Script

Ces balises permettent d'intégrer des scripts exécutables (généralement JavaScript).

*   `<script>`: Définit un script côté client.
```
html
    <script src="script.js"></script>
    <script>
      alert("Bonjour !");
    </script>
    
```
*   `<noscript>`: Définit un contenu alternatif à afficher si le navigateur ne supporte pas les scripts ou si les scripts sont désactivés.

## 10. Balises Sémantiques (HTML5)

Ces balises fournissent une structure plus significative au contenu, aidant les moteurs de recherche et les lecteurs d'écran à mieux comprendre la page.

*   `<article>`: Définit un contenu indépendant et autonome (par exemple, un article de blog, un post de forum).
*   `<aside>`: Définit un contenu à côté du contenu principal (par exemple, une barre latérale, des notes).
*   `<nav>`: Définit un ensemble de liens de navigation.
*   `<header>`: Définit l'en-tête d'un document ou d'une section (souvent contient le logo, les titres, la navigation).
*   `<footer>`: Définit le pied de page d'un document ou d'une section (souvent contient des informations sur l'auteur, les droits d'auteur, les liens connexes).
*   `<main>`: Définit le contenu principal d'un document. Il ne doit y en avoir qu'un par page et il ne doit pas contenir de contenu qui est répété sur plusieurs pages (comme les en-têtes, pieds de page, barres latérales).
*   `<section>`: Définit une section dans un document. C'est un conteneur générique pour regrouper du contenu thématiquement connexe.
*   `<figure>`: Définit un contenu autonome (comme une image, un diagramme, un extrait de code) avec une légende optionnelle.
*   `<figcaption>`: Définit la légende d'une figure.
*   `<time>`: Définit une date/heure.

---

Cette liste n'est pas exhaustive à 100% car le HTML évolue, mais elle couvre la grande majorité des balises que vous rencontrerez et utiliserez couramment dans le développement web. Comprendre le rôle de chaque balise est crucial pour créer des pages web bien structurées, sémantiques et accessibles.