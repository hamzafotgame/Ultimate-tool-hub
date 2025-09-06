/* =======================
   Script for Tool Website
   ======================= */

// -------- Dark/Light Mode Toggle --------
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌙";
toggleBtn.id = "theme-toggle";
document.body.appendChild(toggleBtn);

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  toggleBtn.innerText = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    toggleBtn.innerText = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    toggleBtn.innerText = "🌙";
    localStorage.setItem("theme", "dark");
  }
});

// -------- Smooth Scroll for Nav Links --------
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth",
        });
      }
    }
  });
});

// -------- Search Filter for Tools --------
const searchBox = document.createElement("input");
searchBox.type = "text";
searchBox.placeholder = "🔍 Search tools...";
searchBox.id = "search-tools";
document.querySelector("header").appendChild(searchBox);

searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase();
  document.querySelectorAll(".tool-card").forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(query) ? "block" : "none";
  });
});

// -------- Mobile Nav Toggle --------
const mobileToggle = document.createElement("button");
mobileToggle.innerText = "☰ Menu";
mobileToggle.id = "mobile-toggle";
document.querySelector("nav").prepend(mobileToggle);

mobileToggle.addEventListener("click", () => {
  const navList = document.querySelector("nav ul");
  navList.classList.toggle("open");
});/* =======================
   Script for Tool Website
   ======================= */

// -------- Dark/Light Mode Toggle --------
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌙";
toggleBtn.id = "theme-toggle";
document.body.appendChild(toggleBtn);

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  toggleBtn.innerText = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    toggleBtn.innerText = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    toggleBtn.innerText = "🌙";
    localStorage.setItem("theme", "dark");
  }
});

// -------- Smooth Scroll for Nav Links --------
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth",
        });
      }
    }
  });
});

// -------- Search Filter for Tools --------
const searchBox = document.createElement("input");
searchBox.type = "text";
searchBox.placeholder = "🔍 Search tools...";
searchBox.id = "search-tools";
document.querySelector("header").appendChild(searchBox);

searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase();
  document.querySelectorAll(".tool-card").forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(query) ? "block" : "none";
  });
});

// -------- Mobile Nav Toggle --------
const mobileToggle = document.createElement("button");
mobileToggle.innerText = "☰ Menu";
mobileToggle.id = "mobile-toggle";
document.querySelector("nav").prepend(mobileToggle);

mobileToggle.addEventListener("click", () => {
  const navList = document.querySelector("nav ul");
  navList.classList.toggle("open");
});
