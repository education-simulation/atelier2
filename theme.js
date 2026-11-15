// Thème de l'atelier : blanc par défaut, noir au choix (bouton 🌙 / ☀️ dans la barre du haut).
// Le choix est gardé dans le navigateur (atelier.theme), pour toutes les pages et la démo.
(function () {
  const lire = () => { try { return localStorage.getItem("atelier.theme") === "sombre" ? "sombre" : "clair"; } catch { return "clair"; } };
  const appliquer = (t) => {
    const clair = document.getElementById("theme-clair");
    if (clair) clair.disabled = t === "sombre";
    document.documentElement.dataset.theme = t;
    const b = document.querySelector(".theme-bascule");
    if (b) b.textContent = t === "sombre" ? "☀️ Fond blanc" : "🌙 Fond noir";
  };
  appliquer(lire());   // tout de suite, avant l'affichage
  document.addEventListener("DOMContentLoaded", () => {
    const barre = document.querySelector(".barre");
    if (!barre) return;
    const b = document.createElement("button");
    b.type = "button";
    b.className = "theme-bascule";
    const lien = barre.querySelector("a");
    lien ? barre.insertBefore(b, lien) : barre.appendChild(b);
    b.addEventListener("click", () => {
      const t = lire() === "sombre" ? "clair" : "sombre";
      try { localStorage.setItem("atelier.theme", t); } catch {}
      appliquer(t);
    });
    appliquer(lire());
  });
})();
