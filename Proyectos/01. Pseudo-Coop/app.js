import { data, cases } from "./data.js";
import { companyLogos } from "./data.js";

const nav = document.querySelector(".nav");
const socialIconsSidebar = document.querySelector(".social-icons-sidebar");

window.addEventListener("scroll", function (e) {
  const heigth = window.pageYOffset;
  if (heigth > 1) {
    nav.classList.add("fixed-nav");
    socialIconsSidebar.classList.add("show-social-sidebar");
  } else {
    nav.classList.remove("fixed-nav");
    socialIconsSidebar.classList.remove("show-social-sidebar");
  }
});

// display dropdown

const dropbtn = document.querySelector(".dropbtn");
const dropdownContainer = document.querySelector(".dropdown-content");

dropbtn.addEventListener("click", function hide() {
  dropdownContainer.classList.toggle("show-dropdown");
  window.addEventListener("click", dripbtn);
});

const dripbtn = (e) => {
  if (!e.target.classList.contains("dropbtn")) {
    dropdownContainer.classList.remove("show-dropdown");
    window.removeEventListener("click", dripbtn);
  }
};

// toggle sidebar
const toggleBtn = document.querySelector(".toggle-btn");
const sidebar = document.querySelector(".sidebar-container");
const closeBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener("click", () =>
  sidebar.classList.add("show-sidebar")
);

closeBtn.addEventListener("click", () =>
  sidebar.classList.remove("show-sidebar")
);

//  dinamic service content

const servicesContainer = document.querySelector(".services-container");
const tecContainer = document.querySelector(".tecnologies-container");
const casesContainer = document.querySelector(".cases-container");

window.addEventListener("DOMContentLoaded", () => {
  casesContainer.innerHTML = cases
    .map((item) => {
      const {
        title,
        type,
        desc,
        list: {
          cliente,
          pais,
          tecnologías,
          servicios,
          cooperativas,
          trabajadores,
        },
        logo,
      } = item;
      return `<article class="case">
            <div class="text-container">
            <h3 class="case-title">${title}</h3>
            <h4 class="case-subtitle">${type}</h4>
            <p class="case-desc">
              ${desc}
            </p>
            <ul class="case-list">
              <li>
                <span class="case-list-text"
                  ><strong>Cliente:</strong> ${cliente}</span
                >
              </li>
              <li>
                <span class="case-list-text"
                  ><strong>Pais:</strong> ${pais}</span
                >
              </li>
              <li>
                <span class="case-list-text"
                  ><strong>Tecnologías:</strong> ${tecnologías}</span
                >
              </li>
              <li>
                <span class="case-list-text"
                  ><strong>Servicios Ofrecidos</strong> ${servicios}</span
                >
              </li>
              <li>
                <span class="case-list-text"
                  ><strong>Cooperativas Involucradas:</strong> ${cooperativas}</span
                >
              </li>
              <li>
                <span class="case-list-text"
                  ><strong>Trabajadores Involucrados:</strong> ${trabajadores}</span
                >
              </li>
            </ul>
            </div>
            <div class="case-logo">
              <img src="${logo}" alt="${title}" />
            </div>
          </article>`;
    })
    .join("");
  tecContainer.innerHTML = companyLogos
    .map((logo, index) => {
      return `
            <img class="tec-logo-container" src="${logo}" alt="company logo"/>
          `;
    })
    .join("");
  servicesContainer.innerHTML = data
    .map((service) => {
      const { icon, title, list } = service;
      return `<article class="service-card">
            ${icon}
            <h3 class="service-card-title">${title}</h3>
            <ul class="service-list-container">
            ${list
              .map((item) => {
                return `<li>
                  <span class="service-list-text">${item}</span>
                </li>`;
              })
              .join("")}  
              
              
            </ul>
          </article>`;
    })
    .join("");
});

// date
const date = document.getElementById("date");
date.textContent = new Date().getFullYear();
// scroll properly

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const navHeight = nav.getBoundingClientRect().height;
    const position = document.getElementById(id).offsetTop - navHeight;

    scrollTo({
      top: position,
      left: 0,
    });
    if (sidebar.classList.contains("show-sidebar"))
      sidebar.classList.remove("show-sidebar");
  });
});
