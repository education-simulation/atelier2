// Bouton « Ajouter token » : tout se passe dans la popup, sans nouvel onglet.
// ① l'adresse @rasf.fr de l'adhérent ; ② la confirmation (comme la page GET du workflow n8n AssistantIA) ;
// ③ « Recharger token » envoie le POST au webhook assistantia-creer, et sa réponse s'affiche dans la popup.
(() => {
  const CREER = "https://n8n.srv757556.hstgr.cloud/webhook/assistantia-creer";
  // Déclencheur : les boutons [data-token] de la page, sinon un bouton « Ajouter token » dans la barre du haut
  const barre = document.querySelector(".barre");
  let btn = document.querySelector("[data-token]");
  if (!btn) {
    if (!barre) return;
    btn = document.createElement("button");
    btn.type = "button"; btn.className = "token-btn"; btn.textContent = "🔑 Ajouter token";
    barre.insertBefore(btn, barre.querySelector(".nouvel-atelier"));
  }

  const voile = document.createElement("div");
  voile.className = "token-voile"; voile.hidden = true;
  voile.innerHTML = `<div class="token-popup" role="dialog" aria-modal="true" aria-labelledby="token-titre">
    <button type="button" class="token-fermer" aria-label="Fermer">✕</button>
    <h3 id="token-titre">🔑 Recharger mes tokens AssistantIA</h3>
    <form class="token-e1" novalidate>
      <p class="token-aide">Un nouveau compte AssistantIA (<b>prenom.nomN@rasf.fr</b>) sera créé pour recharger tes tokens. Réservé aux adhérents RASF 2026-2027.</p>
      <label for="token-mail">Ton adresse RASF d'adhérent</label>
      <input id="token-mail" type="email" autocomplete="email" placeholder="prenom.nom@rasf.fr" required>
      <p class="token-erreur" hidden>L'adresse doit être de la forme <b>prenom.nom@rasf.fr</b>.</p>
      <button type="submit" class="token-ok">Continuer</button>
    </form>
    <div class="token-e2" hidden>
      <p>Créer un nouveau compte AssistantIA pour <b class="token-adr"></b> afin de recharger tes tokens ?</p>
      <p class="token-aide">Le nouveau compte aura la forme <b class="token-forme"></b> (numéro suivant). Les identifiants seront envoyés par mail à cette adresse.</p>
      <button type="button" class="token-ok token-go">Recharger token</button>
      <button type="button" class="token-lien token-modif">‹ changer d'adresse</button>
    </div>
    <div class="token-e3" hidden>
      <p class="token-attente">⏳ Création du compte en cours… cela peut prendre une minute, ne ferme pas cette fenêtre.</p>
      <div class="token-reponse" hidden></div>
      <button type="button" class="token-ok token-fin" hidden>Fermer</button>
    </div>
  </div>`;
  document.body.appendChild(voile);
  const $ = (s) => voile.querySelector(s);
  const champ = $("#token-mail"), err = $(".token-erreur");
  const etape = (n) => ["e1", "e2", "e3"].forEach((e, i) => { $(".token-" + e).hidden = i !== n - 1; });
  try { champ.value = localStorage.getItem("atelier.token.mail") || ""; } catch {}

  let enCours = false;
  const ouvrir = () => { voile.hidden = false; err.hidden = true; etape(1); champ.focus(); };
  const fermer = () => { if (enCours) return; voile.hidden = true; btn.focus(); };
  const valide = (m) => /^[a-z0-9][a-z0-9._-]*@rasf\.fr$/.test(m);   // même règle que le nœud « Réglages » du workflow
  let mail = "";

  btn.addEventListener("click", ouvrir);
  $(".token-fermer").addEventListener("click", fermer);
  $(".token-fin").addEventListener("click", fermer);
  voile.addEventListener("click", (e) => { if (e.target === voile) fermer(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !voile.hidden) fermer(); });
  champ.addEventListener("input", () => { err.hidden = true; try { localStorage.setItem("atelier.token.mail", champ.value); } catch {} });
  $(".token-modif").addEventListener("click", () => { etape(1); champ.focus(); });

  $(".token-e1").addEventListener("submit", (e) => {
    e.preventDefault();
    mail = champ.value.trim().toLowerCase();
    if (!valide(mail)) { err.hidden = false; champ.focus(); return; }
    $(".token-adr").textContent = mail;
    $(".token-forme").textContent = mail.split("@")[0] + "N@rasf.fr";
    etape(2); $(".token-go").focus();
  });

  // La réponse du workflow est une page HTML : on n'en reprend que le texte (titre + paragraphes)
  const afficher = (html, ok) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const zone = $(".token-reponse"); zone.replaceChildren(); zone.className = "token-reponse " + (ok ? "ok" : "ko");
    const h = document.createElement("p"); h.className = "token-rep-titre";
    h.textContent = (ok ? "✅ " : "⚠️ ") + (doc.querySelector("h1")?.textContent || (ok ? "Demande reçue" : "Erreur"));
    zone.append(h);
    doc.querySelectorAll("body p").forEach((p) => { const q = document.createElement("p"); q.textContent = p.textContent; zone.append(q); });
    zone.hidden = false;
  };
  $(".token-go").addEventListener("click", async () => {
    if (enCours) return;
    enCours = true; etape(3);
    $(".token-attente").hidden = false; $(".token-reponse").hidden = true; $(".token-fin").hidden = true;
    try {
      const r = await fetch(CREER, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ email: mail }) });
      afficher(await r.text(), r.ok);
    } catch {
      afficher("<h1>Pas de réponse</h1><p>Le service n'a pas répondu. Vérifie ta connexion, puis réessaie dans quelques minutes ; si cela recommence, écris à l'association.</p>", false);
    }
    enCours = false;
    $(".token-attente").hidden = true; $(".token-fin").hidden = false; $(".token-fin").focus();
  });
})();
