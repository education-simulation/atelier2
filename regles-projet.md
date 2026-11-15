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

Le professeur démarre ou reprend un atelier en écrivant seulement une de ces commandes, dans une nouvelle conversation de ce projet :

| Commande | Atelier | Nom de la conversation | Page de l'atelier (lien à donner) |
| :--- | :--- | :--- | :--- |
| `go titrage` ou `go 1` | Simulation d'un titrage (Analyse) | Simulation titrage | https://atelier2.rasf.fr/titrage.html#simple |
| `go metamerie` ou `go 2` | Simulation de la métamérie (Formulation) | Simulation métamérie | https://atelier2.rasf.fr/metamerie.html#simple |
| `go cinetique` ou `go 3` | Cinétique chimique : les profils réactionnels (Synthèse) | Simulation cinétique | https://atelier2.rasf.fr/cinetique.html#simple |

(Accepte aussi les variantes avec ou sans accent, en majuscules, ou `go métamérisme`.)

Quand tu reçois une de ces commandes, **ne crée aucun fichier et ne commence pas la simulation** : la simulation se construit ensuite avec la page de l'atelier.

1. **Regarde d'abord dans `conversations.md`** si une autre conversation de ce projet fait déjà cet atelier.
2. **Si oui**, réponds seulement par cet encadré, avec le vrai lien :

   > [!NOTE]
   > ## 📂 Tu as déjà commencé cet atelier
   >
   > 👉 [Reprendre la conversation « Simulation titrage »](conversation://<identifiant de cette conversation-là>)

   suivi, en dehors de l'encadré et seulement si le fichier existe, de son adresse dans un bloc de code ` ```text `, pour qu'elle ait son bouton de copie.
3. **Si non**, inscris cette conversation dans `conversations.md` (avec le nom de la conversation du tableau, et un tiret pour le fichier), puis réponds seulement par cet encadré, avec la page de l'atelier du tableau :

   > [!IMPORTANT]
   > ## 🧪 Atelier « Simulation titrage »
   >
   > 👉 **Clique sur ce lien pour commencer l'atelier :** https://atelier2.rasf.fr/titrage.html#simple

   Le professeur suivra alors la page de l'atelier : il collera ici les prompts de l'atelier, et c'est seulement à ce moment-là que tu construiras la simulation.

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
