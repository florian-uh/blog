# Déploiement Firebase et Améliorations d'Accessibilité

Ce document résume les modifications apportées au projet pour permettre le déploiement sur Firebase et améliorer l'accessibilité du site.

## Déploiement Firebase

### Modifications apportées

1. **Configuration du répertoire de build**
   - Modification de `firebase.json` pour utiliser le répertoire `dist` (généré par Vite) au lieu de `public`
   - Cela permet à Firebase Hosting de servir les fichiers générés par le build

2. **Configuration des workflows GitHub Actions**
   - Ajout des variables d'environnement Firebase au workflow de pull request
   - Ces variables sont nécessaires pour que le build fonctionne correctement lors des pull requests

### Comment déployer

Pour déployer le site sur Firebase, suivez ces étapes :

1. Assurez-vous que les secrets GitHub sont configurés dans votre dépôt :
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
   - `FIREBASE_SERVICE_ACCOUNT_BLOG_PROJECT_92404`

2. Poussez vos modifications sur la branche `main` pour déclencher le déploiement automatique
   - Le workflow GitHub Actions va construire et déployer le site automatiquement

3. Pour tester localement avant de déployer :
   ```bash
   npm run build
   firebase serve
   ```

## Améliorations d'Accessibilité (ARIA)

### Modifications apportées

1. **Navigation et structure**
   - Correction des liens de navigation pour correspondre aux IDs des sections
   - Ajout d'attributs `aria-label` aux liens de navigation
   - Amélioration de la structure sémantique HTML

2. **Composants de cartes (Projets et Articles)**
   - Élimination des titres dupliqués
   - Ajout d'attributs `aria-labelledby` et `aria-describedby` pour connecter les éléments
   - Amélioration des textes alternatifs pour les images
   - Ajout d'attributs `aria-label` descriptifs pour les liens

3. **Pagination**
   - Ajout de l'attribut `aria-current="page"` pour la page active
   - Amélioration des labels pour les boutons de pagination

4. **Ressources et Footer**
   - Ajout d'attributs `aria-labelledby` pour connecter les sections à leurs titres
   - Amélioration des descriptions pour les liens externes
   - Ajout de rôles et labels appropriés pour les emojis

### Bonnes pratiques pour maintenir l'accessibilité

1. **Utiliser des balises sémantiques HTML5**
   - Préférer `<nav>`, `<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` aux `<div>`

2. **Connecter les éléments avec ARIA**
   - Utiliser `aria-labelledby` pour connecter les éléments à leurs titres
   - Utiliser `aria-describedby` pour connecter les éléments à leurs descriptions

3. **Fournir des alternatives textuelles**
   - Ajouter des attributs `alt` descriptifs aux images
   - Utiliser `aria-label` pour les éléments sans texte visible

4. **Indiquer l'état des éléments interactifs**
   - Utiliser `aria-current` pour indiquer l'élément actif
   - Utiliser `aria-pressed` pour les boutons à bascule

5. **Tester régulièrement avec des outils d'accessibilité**
   - Utiliser des extensions comme Lighthouse, axe, ou WAVE
   - Tester avec des lecteurs d'écran comme NVDA ou VoiceOver