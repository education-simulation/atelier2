// Bouton « Ajouter token » : une popup demande l'adresse @rasf.fr de l'adhérent, puis ouvre la page n8n « Recharger mes tokens »
// (workflow AssistantIA : le lien GET n'affiche qu'une confirmation ; c'est le bouton « Recharger token » de cette page qui crée le compte)
(() => {
  const BASE = "https://n8n.srv757556.hstgr.cloud/webhook/assistantia?email=";
  const barre = document.querySelector(".barre");
  if (!barre) return;
  const btn = document.createElement("button");
  btn.type = "button"; btn.className = "token-btn"; btn.textContent = "🔑 Ajouter token";
  barre.insertBefore(btn, barre.querySelector(".nouvel-atelier"));

  const voile = document.createElement("div");
  voile.className = "token-voile"; voile.hidden = true;
  voile.innerHTML = `<form class="token-popup" role="dialog" aria-modal="true" aria-labelledby="token-titre" novalidate>
    <button type="button" class="token-fermer" aria-label="Fermer">✕</button>
    <h3 id="token-titre">🔑 Recharger mes tokens AssistantIA</h3>
    <p class="token-aide">Un nouveau compte AssistantIA (<b>prenom.nomN@rasf.fr</b>) sera créé pour recharger tes tokens. Réservé aux adhérents RASF 2026-2027.</p>
    <label for="token-mail">Ton adresse RASF d'adhérent</label>
    <input id="token-mail" type="email" autocomplete="email" placeholder="prenom.nom@rasf.fr" required>
    <p class="token-erreur" hidden>L'adresse doit être de la forme <b>prenom.nom@rasf.fr</b>.</p>
    <button type="submit" class="token-ok">Continuer</button>
    <p class="token-aide">Une page s'ouvre dans un nouvel onglet : clique sur <b>« Recharger token »</b>. Les identifiants arrivent ensuite par mail à cette adresse (regarde aussi les indésirables).</p>
  </form>`;
  document.body.appendChild(voile);
  const form = voile.querySelector("form"), champ = voile.querySelector("#token-mail"), err = voile.querySelector(".token-erreur");
  try { champ.value = localStorage.getItem("atelier.token.mail") || ""; } catch {}

  const ouvrir = () => { voile.hidden = false; err.hidden = true; champ.focus(); };
  const fermer = () => { voile.hidden = true; btn.focus(); };
  const valide = (m) => /^[a-z0-9][a-z0-9._-]*@rasf\.fr$/.test(m);   // même règle que le nœud « Réglages » du workflow
  btn.addEventListener("click", ouvrir);
  voile.querySelector(".token-fermer").addEventListener("click", fermer);
  voile.addEventListener("click", (e) => { if (e.target === voile) fermer(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !voile.hidden) fermer(); });
  champ.addEventListener("input", () => { err.hidden = true; try { localStorage.setItem("atelier.token.mail", champ.value); } catch {} });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const mail = champ.value.trim().toLowerCase();
    if (!valide(mail)) { err.hidden = false; champ.focus(); return; }
    window.open(BASE + encodeURIComponent(mail), "_blank", "noopener");
    fermer();
  });
})();
