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
>
> 💡 Ensuite, pour démarrer ou reprendre un atelier, ouvre une nouvelle conversation dans ce projet et écris simplement `go titrage`, `go metamerie` ou `go cinetique`.

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

## Les ateliers : démarrer ou reprendre avec un seul mot

Le professeur démarre un atelier en écrivant seulement une de ces commandes, dans une nouvelle conversation de ce projet :

| Commande | Atelier | Nom de la conversation | Page de l'atelier |
| :--- | :--- | :--- | :--- |
| `go titrage` ou `go 1` | Simulation d'un titrage (Analyse) | Simulation titrage | https://atelier2.rasf.fr/titrage.html |
| `go metamerie` ou `go 2` | Simulation de la métamérie (Formulation) | Simulation métamérie | https://atelier2.rasf.fr/metamerie.html |
| `go cinetique` ou `go 3` | Cinétique chimique : les profils réactionnels (Synthèse) | Simulation cinétique | https://atelier2.rasf.fr/cinetique.html |

(Accepte aussi les variantes avec ou sans accent, en majuscules, ou `go métamérisme`.)

Quand tu reçois une de ces commandes :

1. **Regarde d'abord dans `conversations.md`** si une autre conversation de ce projet fait déjà cet atelier.
   - **Si oui**, ne crée rien. Réponds seulement par cet encadré, avec les vrais liens :

     > [!NOTE]
     > 📂 **Tu as déjà commencé cet atelier.**
     >
     > 👉 [Reprendre la conversation « Simulation titrage »](conversation://<identifiant de cette conversation-là>)

     suivi, en dehors de l'encadré, de l'adresse du fichier dans un bloc de code ` ```text `, pour qu'elle ait son bouton de copie.
   - **Si non**, inscris cette conversation dans `conversations.md` (avec le nom de la conversation du tableau), puis réalise tout de suite la simulation, d'après le cahier des charges ci-dessous, sans rien demander d'autre.
2. Quand la simulation est prête, réponds par les deux parties habituelles (section « Quand une simulation est prête »), puis ajoute à la fin : « 📘 La suite de l'atelier (modifier ta simulation, vérifier la chimie) : » suivi de la page de l'atelier.

### Cahier des charges des ateliers

- **Titrage** : une simulation de titrage acido-basique : une burette au-dessus d'un bécher, un indicateur coloré qui change de couleur, l'affichage du pH, et la courbe pH = f(V) qui se trace au fur et à mesure que l'on verse. Des boutons pour verser et pour recommencer.
- **Métamérie** : deux échantillons de couleur côte à côte, qui paraissent identiques à la lumière du jour (illuminant D65) mais différents sous une lampe à incandescence (illuminant A) ou sous un tube fluorescent (illuminant F11). Les courbes de réflectance des deux échantillons, le spectre de l'illuminant choisi, les coordonnées L*a*b* de chaque échantillon et l'écart de couleur ΔE*ab. Des boutons pour changer d'illuminant.
- **Cinétique** : les profils réactionnels : le graphique de l'énergie en fonction de la coordonnée de réaction, avec les réactifs, l'état de transition et les produits. On règle l'énergie d'activation Ea et l'enthalpie de réaction ΔrH (réaction exothermique ou endothermique), on choisit un mécanisme en une ou deux étapes (avec un intermédiaire réactionnel), et on peut ajouter un catalyseur qui abaisse la barrière. Les flèches Ea et ΔrH sur le graphique, et une phrase qui dit si la réaction est exothermique ou endothermique, rapide ou lente.

## Le registre des conversations (conversations.md)

- Le fichier `conversations.md`, à la racine du projet, est l'annuaire de toutes les conversations du projet.
- Au premier message de chaque nouvelle conversation, et dès qu'elle produit un travail, inscris-la dans `conversations.md` (une ligne par conversation, mise à jour si elle existe déjà) :
  1. la date et l'heure précises (à la minute) ;
  2. le sujet ou le but précis de la conversation (par exemple « Simulation de titrage acido-basique ») ;
  3. le fichier créé, avec son lien local cliquable : `[titrage.html](file:///chemin/complet/titrage.html)` (un tiret tant qu'il n'existe pas) ;
  4. le lien direct cliquable vers cette conversation, avec son vrai identifiant (Conversation ID) : `👉 [Accéder à la conversation](conversation://<identifiant de cette conversation>)`.
- Si on te demande la liste des conversations, des ateliers ou des simulations, lis `conversations.md` et présente-les **classées par date et heure de création**, avec pour chacune :
  1. son sujet ;
  2. le lien direct cliquable : `👉 [Ouvrir la conversation « … »](conversation://…)` ;
  3. l'adresse complète de son fichier HTML, seule dans un bloc de code ` ```text `, pour qu'elle ait son bouton de copie (à coller dans un navigateur).
~~~~

## Contenu de conversations.md

~~~~
# Registre des conversations du projet

| Date et heure | Atelier / Sujet | Fichier associé | Accès direct à la conversation |
| :--- | :--- | :--- | :--- |
~~~~
