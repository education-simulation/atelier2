# Règles du projet « simulations » (atelier RASF)

Ce fichier s'adresse à l'IA d'Antigravity qui prépare le projet d'un professeur. Suis ces instructions exactement, sans rien faire d'autre, et sans rien lancer.

## Ce que tu dois faire

1. **Crée, à la racine du dossier de ce projet, le fichier `AGENTS.md`**, avec exactement le contenu de la section « Contenu de AGENTS.md » ci-dessous (tout ce qui est entre les deux lignes `~~~~`, sans ces deux lignes).
2. **Crée le fichier `.agent/rules/simulations.md`**, avec cette seule phrase : « Suivre impérativement les règles définies dans AGENTS.md à la racine du projet. »
3. **Crée, à la racine du projet, le registre `conversations.md`**, avec la structure de la section « Contenu de conversations.md », et inscris-y tout de suite cette conversation (sujet : « Configuration du projet », fichier : -).
4. **Réponds seulement par cet encadré**, rien d'autre :

> [!TIP]
> ✅ **Ton projet est configuré.** Ses règles sont dans AGENTS.md : elles valent pour toutes les conversations de ce projet.
>
> 👉 **Choisis ton atelier :** https://atelier2.rasf.fr/ateliers.html?ou=dans

## Contenu de AGENTS.md

~~~~
# Règles du projet pour les simulations

Ces règles s'appliquent à toutes les conversations de ce projet.

## Organisation

- Chaque simulation ou atelier (titrage, métamérie, cinétique chimique, etc.) se fait dans sa propre conversation, dans ce même projet.

## Les simulations

- Chaque simulation est un seul fichier HTML, en français, sans aucune ressource externe.
- Enregistre chaque simulation directement dans le dossier de ce projet, sans sous-dossier, avec un nom de fichier court et parlant, sans espace ni accent, par exemple « titrage.html ». Si un fichier de ce nom existe déjà pour une autre simulation, ne l'écrase jamais : choisis un autre nom (par exemple « titrage-2.html »). Pour une modification, garde le même fichier.
- Tout en haut du fichier, juste après `<!DOCTYPE html>`, mets ce commentaire, avec le vrai nom du dossier du projet et la vraie adresse complète du fichier, et garde-le à jour à chaque modification :
  `<!-- Ceci est le CODE de la simulation : ne la regarde pas ici. Pour la voir, ouvre le dossier « nom du dossier du projet » et double-clique sur ce fichier, ou copie cette adresse dans la barre d'adresse de ton navigateur (Chrome, Firefox, Safari, Edge) : file:///chemin/complet/du/fichier.html -->`

## Quand une simulation est prête

Quand une simulation est prête (création ou modification), réponds seulement par ces deux parties, avec les vrais noms du dossier du projet et du fichier et le vrai chemin complet du fichier. Garde la partie ② EN DEHORS de l'encadré, avec l'adresse seule dans un vrai bloc de code, pour qu'elle ait son bouton de copie :

> [!TIP]
> ✅ **Ta simulation est prête.**
>
> **① Ton code, dans Antigravity :** [nom du fichier.html](file:///chemin/complet/du/fichier.html)

**② Le rendu de ton code, dans ton navigateur :** ouvre le dossier de ton projet « nom du dossier du projet », puis **double-clique sur le fichier** nom du fichier.html (Chrome, Firefox, Safari, Edge), ou copie cette adresse (bouton de copie à droite) et colle-la dans la barre d'adresse de ton navigateur :

```text
file:///chemin/complet/du/fichier.html
```

*S'il est déjà ouvert, recharge la page.*

## Le registre des conversations (conversations.md)

- Le fichier `conversations.md`, à la racine du projet, est l'annuaire de toutes les conversations du projet.
- Au premier message de chaque nouvelle conversation, et dès qu'elle produit un travail, inscris-la dans `conversations.md` (une ligne par conversation, mise à jour si elle existe déjà) :
  1. la date et l'heure ;
  2. le sujet ou le but précis de la conversation (par exemple « Simulation de titrage acido-basique ») ;
  3. le fichier créé, avec son lien local cliquable : `[titrage.html](file:///chemin/complet/titrage.html)` (un tiret tant qu'il n'existe pas) ;
  4. le lien direct cliquable vers cette conversation, avec son vrai identifiant (Conversation ID) : `👉 [Accéder à la conversation](conversation://<identifiant de cette conversation>)`.
- Si on te demande la liste des conversations, des ateliers ou des simulations, lis `conversations.md` et affiche un tableau avec, pour chaque conversation, la date, le sujet, le fichier associé et **obligatoirement** son lien direct cliquable `👉 [Ouvrir …](conversation://…)`, pour s'y rendre en un clic.
~~~~

## Contenu de conversations.md

~~~~
# Registre des conversations du projet

| Date | Atelier / Sujet | Fichier associé | Accès direct à la conversation |
| :--- | :--- | :--- | :--- |
~~~~
