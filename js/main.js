import { product } from "./app.js";
console.log(product);

function toggleNavbar() {
  document.getElementById("navbar-responsive").classList.toggle("open");
}

document.getElementById("menu-btn").addEventListener("click", toggleNavbar);

////////////////////////////////////////////////////////////

window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = "20px";
  } else {
    backtop.style.bottom = "-50px";
  }
}

//////////////////////////////////////////////////////////////////

const card = document.querySelector(".cards");

function createCard(data) {
  while (card.firstChild) {
    card.firstChild.remove();
  }
  data.forEach((el) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="card">
        <img src="${el.thumbnail}" alt="Rectanalage" />
                <div class="card-text">
                  <img src="./images/close.png" alt="close" />
                  <p class="card-text2">Нет в наличии</p>
                </div>
                <img class="gift" src="./images/gift.png" alt="gift" />
                <button class="card-btn">SALE</button>
                <div class="card-comment">
                  <div class="stars">
                    <img src="./images/stars.png" alt="stars" />
                    <p class="card-text3">(12) отзывов</p>
                  </div>
                  <p class="card-text4">${el.description}</p>
                  <div class="costs">
                    <p class="card-cost">${el.price}$</p>
                    <s class="card-cost2">${el.discountPercenteng}$</s>
                  </div>
                </div>
              </div>
    `;

    card.appendChild(div);
  });
}

createCard(product);
