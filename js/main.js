const CONTACT_EMAIL = "jay.cs.iit@gmail.com";

const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", open ? "false" : "true");
    nav.classList.toggle("is-open", !open);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    });
  });
}

const form = document.getElementById("scan-form");
const errorEl = document.getElementById("form-error");
const statusEl = document.getElementById("form-status");

function setError(message) {
  if (!errorEl) return;
  errorEl.hidden = !message;
  errorEl.textContent = message || "";
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    setError("");
    if (statusEl) statusEl.textContent = "";

    const data = new FormData(form);
    if ((data.get("company_website") || "").toString().trim()) return;

    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const company = (data.get("company") || "").toString().trim();
    const focus = (data.get("focus") || "").toString().trim();
    const note = (data.get("note") || "").toString().trim();

    if (!name || !email || !company || !focus) {
      setError("Name, work email, company, and a focus are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid work email.");
      return;
    }

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Focus: ${focus}`,
      "",
      note || "(no note)",
    ].join("\n");

    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Leakage scan — ${company}`
    )}&body=${encodeURIComponent(body)}`;

    if (statusEl) {
      statusEl.textContent =
        "Your email app should open with the request. If it does not, write to " +
        CONTACT_EMAIL +
        ".";
    }
    window.location.href = href;
  });
}
