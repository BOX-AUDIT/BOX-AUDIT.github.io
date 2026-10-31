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
  const button = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    setError("");
    if (statusEl) statusEl.textContent = "";

    const data = new FormData(form);
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

    const previousLabel = button ? button.textContent : "";
    if (button) {
      button.disabled = true;
      button.textContent = "Sending…";
    }

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/" + encodeURIComponent(CONTACT_EMAIL),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            company,
            focus,
            message: note || "(no note)",
            _subject: "Leakage scan — " + company,
            _replyto: email,
            _template: "table",
            _captcha: "false",
          }),
        }
      );
      const result = await response.json().catch(() => ({}));
      if (String(result.success) === "true") {
        form.reset();
        if (statusEl) {
          statusEl.textContent = "Request sent. We’ll reply at " + email + ".";
        }
      } else if (/activ/i.test(result.message || "")) {
        setError(
          "One confirmation is still needed. Open the activation email at " +
            CONTACT_EMAIL +
            ", then send this request again."
        );
      } else {
        setError(
          "The request did not send. Write to " + CONTACT_EMAIL + " instead."
        );
      }
    } catch (err) {
      setError(
        "The request did not send. Write to " + CONTACT_EMAIL + " instead."
      );
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = previousLabel;
      }
    }
  });
}
