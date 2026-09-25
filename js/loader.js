// Load all HTML partials, then start the existing portfolio logic.
const PARTIALS = [
  ["navbar", "partials/navbar.html"],
  ["hero", "partials/hero.html"],
  ["main", "partials/main.html"],
  ["footer", "partials/footer.html"],
  ["modal", "partials/modal.html"],
];

async function loadPartial(id, url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Cannot load ${url}: ${response.status}`);
  document.getElementById(id).innerHTML = await response.text();
}

async function loadScript(src) {
  await new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Cannot load ${src}`));
    document.body.appendChild(script);
  });
}

async function startPortfolio() {
  await Promise.all(PARTIALS.map(([id, url]) => loadPartial(id, url)));
  await loadScript("js/portfolio.js");
}

startPortfolio().catch((error) => {
  console.error(error);
  document.body.insertAdjacentHTML(
    "beforeend",
    `<p style="padding:2rem;color:#b91c1c">Portfolio failed to load. Run it through a local server (not file://).</p>`
  );
});
