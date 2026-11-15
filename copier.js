// Boutons « Copier » et « Copier et ouvrir Antigravity » (data-ouvrir="antigravity://").
// Le texte copié est celui de l'élément juste avant le bouton.
// data-allow : après la copie, l'animation « 2 · Yes, and always allow in this conversation » s'affiche dessous.
const bande = document.getElementById("bande");
let minuteurBande = null;
let enAttente = null;   // le bouton dont l'animation attend la fin du bandeau
function finBande() {
  if (bande) bande.hidden = true;
  if (enAttente) {
    // la fin du bandeau : la page montre alors « Patiente » (événement « apres-bande »), puis l'animation « Allow » dedans
    enAttente.dispatchEvent(new CustomEvent("apres-bande", { bubbles: true }));
    if (enAttente.hasAttribute("data-allow")) montrerAllow(enAttente);
    enAttente = null;
  }
}
const tpl = document.getElementById("tpl-allow");

// L'animation garde sa taille (720 × 330) et se réduit sur les petits écrans
function ajuster(cadre) {
  const scene = cadre.querySelector(".scene-allow");
  const k = Math.min(1, cadre.clientWidth / 722);
  scene.style.transform = `scale(${k})`;
  cadre.style.height = 332 * k + "px";
}

function montrerAllow(b) {
  // l'animation va dans le cadre « Patiente » du même onglet s'il en a un, sinon juste sous le message
  const zone = b.closest("[data-panneau]")?.querySelector(".bloc-partie.attendre .allow-zone") || b.closest(".phrase").nextElementSibling;
  if (!tpl || !zone || !zone.classList.contains("allow-zone")) return;
  if (!zone.firstElementChild) {
    const anim = document.createElement("div");
    anim.className = "allow-anim";
    anim.appendChild(tpl.content.cloneNode(true));
    const rejouer = document.createElement("button");
    rejouer.type = "button";
    rejouer.className = "allow-rejouer";
    rejouer.textContent = "🔐 Allow write access to this path? · revoir quoi choisir";
    rejouer.hidden = true;
    rejouer.addEventListener("click", () => jouer(zone));
    zone.append(anim, rejouer);
    const cadre = zone.querySelector(".cadre-allow");
    new ResizeObserver(() => ajuster(cadre)).observe(cadre);
  }
  zone.hidden = false;
  jouer(zone);
}

// L'animation reste 10 secondes, puis laisse la place au bouton qui la rejoue (10 s aussi)
function jouer(zone) {
  const anim = zone.querySelector(".allow-anim"), rejouer = zone.querySelector(".allow-rejouer");
  anim.hidden = false; rejouer.hidden = true;
  ajuster(zone.querySelector(".cadre-allow"));
  anim.querySelectorAll("*").forEach((el) => el.getAnimations().forEach((a) => { a.currentTime = 0; }));
  zone.scrollIntoView({ behavior: "smooth", block: "nearest" });
  clearTimeout(zone._minuteur);
  zone._minuteur = setTimeout(() => { anim.hidden = true; rejouer.hidden = false; }, 10000);
}

// data-coche : une fois copié, le bouton garde sa coche « ✅ Copié » (gardée au rechargement)
const cochables = [...document.querySelectorAll("button.copier[data-coche]")];
function cocher(b, garder) {
  b.textContent = "✅ Copié";
  b.classList.add("coche");
  if (garder) try { localStorage.setItem("atelier.coche." + location.pathname + "." + cochables.indexOf(b), "1"); } catch {}
}
cochables.forEach((b, i) => {
  b.dataset.texte = b.textContent;
  try { if (localStorage.getItem("atelier.coche." + location.pathname + "." + i) === "1") cocher(b, false); } catch {}
});

// Le bandeau dit « Reste dans la même conversation » dès qu'une simulation a déjà été lancée :
// la page note dans le navigateur chaque prompt de création copié (data-sim="titrage"…).
// Les autres messages (suite du prompt détaillé, On modifie) vont toujours dans la même conversation.
const bandeTitre = bande && bande.querySelector("b"), bandeOu = bande && bande.querySelector("em");
const bandeDepart = bande && [bandeTitre.textContent, bandeOu.textContent];
function texteBande(b) {
  if (!bande) return;
  let lancees = [];
  try { lancees = JSON.parse(localStorage.getItem("atelier.simulations") || "[]"); } catch {}
  const suite = !b.dataset.sim || lancees.length > 0;
  if (b.dataset.sim && !lancees.includes(b.dataset.sim)) {
    lancees.push(b.dataset.sim);
    try { localStorage.setItem("atelier.simulations", JSON.stringify(lancees)); } catch {}
  }
  bandeTitre.textContent = suite ? "Reste dans la même conversation" : bandeDepart[0];
  bandeOu.textContent = suite ? "ne clique pas sur « New Conversation » : colle à la suite, dans la zone de message en bas à gauche" : bandeDepart[1];
}

document.querySelectorAll("button.copier").forEach((b) => b.addEventListener("click", async () => {
  const c = b.previousElementSibling;
  if (!b.dataset.ouvrir) texteBande(b);
  if (!b.dataset.texte) b.dataset.texte = b.textContent;
  // D'abord ce qu'on voit (bandeau 10 s, animation), puis la copie
  // Puis, quand le bandeau disparaît (10 s, ou fermé à la main), l'animation « Allow write access »
  enAttente = b;
  if (bande) {
    bande.hidden = false;
    clearTimeout(minuteurBande);
    minuteurBande = setTimeout(finBande, 10000);
  } else finBande();
  if (b.hasAttribute("data-coche")) cocher(b, true);   // data-coche : la coche reste (déjà envoyé)
  else {
    b.textContent = "✅ Copié";
    setTimeout(() => { b.textContent = b.dataset.texte; }, 2500);
  }
  const copieManuelle = () => { const r = document.createRange(); r.selectNodeContents(c); getSelection().removeAllRanges(); getSelection().addRange(r); document.execCommand("copy"); getSelection().removeAllRanges(); };
  try { await Promise.race([navigator.clipboard.writeText(c.textContent), new Promise((_, non) => setTimeout(non, 1500))]); }
  catch { copieManuelle(); }

  if (!b.dataset.ouvrir) return;
  const retour = b.closest(".phrase").nextElementSibling;
  let ouvert = false;
  const parti = () => { ouvert = true; };
  window.addEventListener("blur", parti, { once: true });
  setTimeout(() => { location.href = b.dataset.ouvrir; }, 300);
  setTimeout(() => {
    window.removeEventListener("blur", parti);
    if (!ouvert && document.hasFocus() && retour && retour.classList.contains("retour-ouvrir")) {
      retour.hidden = false;
      retour.innerHTML = "⚠️ Antigravity ne s'est pas ouvert ? Ouvre-le toi-même : le message est déjà copié.";
    }
  }, 2500);
}));
if (bande) bande.querySelector(".bande-x").addEventListener("click", () => { clearTimeout(minuteurBande); finBande(); });

// « Voir quoi choisir » : l'animation « Allow write access » dans une fenêtre par-dessus la page
document.addEventListener("click", (e) => {
  if (!e.target.closest(".allow-popup") || !tpl) return;
  const v = document.createElement("div");
  v.className = "allow-voile";
  v.innerHTML = '<div class="allow-fenetre"><button type="button" class="allow-fermer" aria-label="Fermer">×</button><div class="allow-zone"></div></div>';
  const zone = v.querySelector(".allow-zone");
  const anim = document.createElement("div");
  anim.className = "allow-anim";
  anim.appendChild(tpl.content.cloneNode(true));
  zone.appendChild(anim);
  document.body.appendChild(v);
  const cadre = zone.querySelector(".cadre-allow");
  new ResizeObserver(() => ajuster(cadre)).observe(cadre);
  ajuster(cadre);
  const fermer = () => v.remove();
  v.addEventListener("click", (ev) => { if (ev.target === v || ev.target.closest(".allow-fermer")) fermer(); });
  document.addEventListener("keydown", function esc(ev) { if (ev.key === "Escape") { fermer(); document.removeEventListener("keydown", esc); } });
});

// Prompt simple : une phrase courte, et un bouton « ＋ Ajouter un détail » qui ajoute les précisions une à une,
// chacune sur sa ligne, sous la phrase ; une étiquette dit le niveau du prompt (minimal → enrichi → détaillé).
// Le nombre de détails est gardé dans le navigateur, par page.
document.querySelectorAll("code.prompt-plus").forEach((code) => {
  const base = code.dataset.base, details = JSON.parse(code.dataset.details);
  const bloc = code.closest(".bloc-partie").querySelector(".plus-details");
  const plus = bloc.querySelector(".plus-btn"), moins = bloc.querySelector(".moins-btn"), zero = bloc.querySelector(".zero-btn"), compte = bloc.querySelector(".plus-compte"), tag = bloc.querySelector(".prompt-tag");
  const cle = "atelier." + (location.pathname.split("/").pop().replace(".html", "") || "page") + ".details";
  let n = 0; try { n = Math.min(details.length, parseInt(localStorage.getItem(cle), 10) || 0); } catch {}
  const rendre = () => {
    code.textContent = n ? base + ", avec :\n" + details.slice(0, n).map((d) => "- " + d + " ;").join("\n").replace(/ ;$/, ".") : base + ".";
    plus.hidden = n >= details.length;
    moins.hidden = n === 0;
    zero.hidden = n === 0;
    compte.textContent = n + " / " + details.length;   // le compteur, toujours visible
    const niveau = n === 0 ? ["minimal", "Prompt minimal"] : n < details.length / 2 ? ["enrichi", "Prompt enrichi"] : n < details.length ? ["precis", "Prompt précis"] : ["detaille", "Prompt détaillé"];
    tag.className = "prompt-tag " + niveau[0];
    tag.textContent = "🏷️ " + niveau[1];
    try { localStorage.setItem(cle, String(n)); } catch {}
  };
  plus.addEventListener("click", () => { n = Math.min(details.length, n + 1); rendre(); });
  moins.addEventListener("click", () => { n = Math.max(0, n - 1); rendre(); });
  zero.addEventListener("click", () => { n = 0; rendre(); });
  rendre();
});
