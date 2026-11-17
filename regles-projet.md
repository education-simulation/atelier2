# Règles du projet « simulations » (atelier RASF)

Ce fichier s'adresse à l'IA d'Antigravity qui prépare le projet d'un professeur. Suis ces instructions exactement, sans rien faire d'autre, et sans rien lancer.

## Ce que tu dois faire

0. **Vérifie d'abord que cette conversation est rattachée à un projet** (un dossier de projet ouvert, par exemple « mes simulations »). Si ce n'est pas le cas, ne crée rien et réponds seulement par cet encadré :

   > [!WARNING]
   > ⚠️ **Ce message est à coller dans la conversation d'un projet.**
   >
   > Cette conversation-ci n'est rattachée à **aucun projet**. Crée d'abord le projet « mes simulations », puis colle ce message dans **la nouvelle conversation du projet** : https://atelier2.rasf.fr/configuration.html#6


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
- **Une conversation d'atelier = un seul fichier.** Dans une conversation démarrée par `go titrage`, `go metamerie` ou `go cinetique`, il n'y a qu'un seul fichier, celui de l'atelier (`titrage.html`, `metamerie.html` ou `cinetique.html`). Tout ce qu'on y colle va dans ce fichier, **jamais dans un autre**, même un prompt qui décrit une étape ou une autre notion (par exemple « l'avancement d'une réaction ») ou qui demande « un nouveau code ».
- **Les règles s'appliquent par défaut, aussi aux fichiers existants.** À chaque création ou modification, vérifie que tout le fichier respecte ces règles (une seule page, onglets de versions fixés en haut, bouton « ↩ Retour à Antigravity », commentaire en haut, historique de chaque version) et mets-le en conformité si besoin, sans qu'on te le demande.
- Ajoute dans chaque simulation, en haut à droite, un petit bouton fixe et discret « ↩ Retour à Antigravity » : un lien `<a href="antigravity://">`, qui rouvre Antigravity quand la simulation est ouverte dans un navigateur. Il ne doit jamais gêner la simulation (petit, au-dessus du reste, sans cacher de commande). Garde-le à chaque modification.
- Tout en haut du fichier, juste après `<!DOCTYPE html>`, mets ce commentaire, avec le vrai nom du dossier du projet et la vraie adresse complète du fichier, et garde-le à jour à chaque modification :
  `<!-- Ceci est le CODE de la simulation : ne la regarde pas ici. Pour la voir, ouvre le dossier « nom du dossier du projet » et double-clique sur ce fichier, ou copie cette adresse dans la barre d'adresse de ton navigateur (Chrome, Firefox, Safari, Edge) : file:///chemin/complet/du/fichier.html -->`

## Les questions à choix (toujours en liste)

- Chaque fois que tu poses une question avec plusieurs choix (quelle version, vérification du modèle, option à retenir…), écris la question seule sur sa ligne, puis **les choix en vraie liste numérotée Markdown, un choix par ligne**, puis une ligne vide et la manière de répondre. Jamais plusieurs choix à la suite sur une même ligne. Par exemple :

  > **À quelle(s) version(s) veux-tu appliquer cette modification ?**
  >
  > 1. Version 1 · prompt initial
  > 2. Version 2 · burette, indicateur, pH
  > 3. Toutes
  >
  > Réponds par le numéro, ou par plusieurs (par exemple « 1 et 2 »).

## Les versions d'une simulation (pour comparer des prompts)

- **Une nouvelle version, dans le même fichier.** Si on te redonne un prompt de départ (un message qui commence par « Fais-moi une simulation… » ou « Bonjour, je souhaiterais que tu m'aides à concevoir une simulation… ») alors que le fichier existe déjà, n'en crée pas d'autre et n'écrase pas l'existant : ajoute **une nouvelle version dans le même fichier**, sans demander, et dis-le en une phrase dans ta réponse. Ne demande que si le message est vraiment ambigu (« Veux-tu une nouvelle version, à comparer avec l'existante ? », choix en liste : 1. Oui, une nouvelle version · 2. Non, je modifie l'existante).
- **Ne jamais perdre une version.** Quand tu ajoutes une version ou modifies le fichier, **ne réécris jamais le fichier entier** : ajoute ou modifie seulement les parties concernées (l'onglet, la section et le code de la version), par des modifications ciblées. Ne remplace jamais le code d'une autre version par un résumé, un commentaire ou « … ». Après chaque enregistrement, relis le fichier et vérifie que **chaque version a toujours tout son code** (sa section, ses commandes, son graphique, son script) et que le fichier n'a pas rétréci ; sinon, répare-le avant de répondre.
- **Une série de messages, dans le même fichier.** Les messages qui suivent un prompt de départ ne demandent pas à quelle version s'appliquer :
  - un message qui demande **un nouveau code** (« Tu peux maintenant générer un nouveau code, similaire au précédent… ») crée **une nouvelle version** dans le même fichier, pour garder chaque étape et pouvoir les comparer (par exemple « Version 3 · avancement », « Version 4 · dosage ») ; dans son historique, ce message est son « Prompt de départ » ;
  - un message qui demande d'**ajouter** ou de changer quelque chose (« Maintenant, j'aimerais que tu ajoutes un autre onglet… ») fait évoluer **la dernière version créée** ; dans son historique, c'est une « Modification demandée ».
- **Des onglets en haut de la page.** Dès qu'il y a plusieurs versions, le fichier a des onglets tout en haut, **dans une barre fixée en haut de l'écran** (`position: sticky; top: 0`, fond opaque, au-dessus du reste) : ils restent visibles quand on fait défiler la page, avec le bouton « ↩ Retour à Antigravity » sur la même barre, à droite. Onglets : « Version 1 », « Version 2 »…, chacun avec un nom court qui rappelle le prompt (par exemple « Version 1 · prompt minimal », « Version 2 · prompt détaillé »). Chaque version est complète et indépendante des autres ; l'onglet ouvert est gardé dans l'adresse (#v1, #v2…).
- **Une modification : demander à quelle(s) version(s).** Quand le fichier contient plusieurs versions et qu'on te demande une modification (en dehors d'une série juste après un prompt de départ), demande d'abord à quelle(s) version(s) l'appliquer, avec les versions en liste numérotée, une par ligne, et « Toutes » en dernier ; on peut en choisir plusieurs (par exemple « 1 et 3 »). Applique-la ensuite seulement à celles-là.
- **L'historique en haut de chaque version.** En haut de chaque version (même s'il n'y en a qu'une), mets un petit encadré repliable « 📜 Comment cette version a été obtenue », replié par défaut, avec seulement ce que le professeur a écrit :
  - « Prompt de départ : » suivi de son message de départ, recopié **mot pour mot**, même s'il est très court ;
  - « Modifications demandées : » suivi de la liste numérotée de **ses** demandes de modification pour cette version (date et heure, et sa demande recopiée mot pour mot), dans l'ordre. Tant qu'il n'en a fait aucune, écris « Aucune pour l'instant ».
  - N'y mets **jamais** ta propre description de ce que tu as fait (« création initiale », la liste de tes ajouts…) : la création de la simulation n'est pas une modification. L'historique sert au professeur à comparer l'effet de ses prompts.
  Mets-le à jour à chaque nouvelle demande de modification de cette version.
- Le commentaire en haut du fichier, le bouton « ↩ Retour à Antigravity » et la réponse « Ta simulation est prête » restent les mêmes (une seule fois pour le fichier).

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

   suivi, en dehors de l'encadré et seulement si le fichier existe, de son adresse dans un bloc de code ` ```text `, pour qu'elle ait son bouton de copie. Termine par cette phrase : « 🗑️ Cette conversation-ci ne sert plus : dans le menu de gauche, passe la souris sur elle et clique sur l'icône **Archive conversation** pour la ranger. » Dans ce cas, n'inscris pas cette conversation dans `conversations.md`.
3. **Si non**, inscris cette conversation dans `conversations.md` (avec le nom de la conversation du tableau, et un tiret pour le fichier), puis réponds seulement par cet encadré, avec la page de l'atelier du tableau :

   > [!IMPORTANT]
   > # 🧪 Atelier « Simulation titrage »
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
