const popup = document.querySelector(".popup");
const popupContacts = document.querySelector(".popup_contacts");
const popupClose = document.querySelector("#popup_close");
const body = document.body;
const popupContainer = document.querySelector("#popup_container");
const popupProductList = document.querySelector("#popup_product_list");
const popupCost = document.querySelector("#popup_cost");


let sedan = [
  {
      img: 'https://avatars.mds.yandex.net/get-autoru-vos/1956707/f4f219da077f59087a0314b89bb6e3e2/1200x900n',
      name: 'Audi A3',
      desc: 'Audi A3 IV (8Y) – седан C-класса, передний и полный привод. Механика, робот и автомат. Бензиновые и дизельные двигатели мощностью от 110 до 200 лошадиных сил.',
      unit: 'передний',
      consumption: 3.9,
      transmission: 'автомат',
      fuel: 'бензин',
      price: 4.70

  },
  {
      img: 'https://avatars.mds.yandex.net/get-verba/216201/2a00000160979591998841b337bdb0b9733d/cattouchret',
      name: 'Kia Rio IV',
      desc: 'Kia Rio IV – седан B-класса, передний привод. Автомат и механика. Бензиновые двигатели мощностью от 100 до 123 лошадиных сил.',
      unit: 'передний',
      consumption: 1.6,
      transmission: 'механика',
      fuel: 'бензин',
      price: 4.70
  },
  {
      img: 'https://avatars.mds.yandex.net/get-verba/787013/2a00000162e2615f12e4e78543461053674a/cattouchret',
      name: 'Toyota Camry VIII (XV70)',
      desc: 'Toyota Camry VIII (XV70) – седан D-класса, передний и полный привод. Автомат и вариатор. Бензиновые и гибридные двигатели мощностью от 150 до 301 лошадиных сил.',
      unit: 'передний',
      consumption: 2.5,
      transmission: 'автомат',
      fuel: 'бензин',
      price: 4.70
  },
  {
      img: 'https://avatars.mds.yandex.net/get-verba/787013/2a000001609b242cf35aa12c55ae2f395fe0/cattouchret',
      name: 'Mazda 6 III (GJ)',
      desc: 'Mazda 6 III (GJ) – седан D-класса, передний привод. Механика и автомат. Бензиновые и дизельные двигатели мощностью от 145 до 192 лошадиных сил.',
      unit: 'передний',
      consumption: 2.0,
      transmission: 'механика',
      fuel: 'бензин',
      price: 4.70
  },
  {
      img: 'https://avatars.mds.yandex.net/get-verba/216201/2a000001608ff94d6fb037b5e586b1e36f6b/cattouchret',
      name: 'Mitsubishi Lancer X',
      desc: 'Mitsubishi Lancer X Рестайлинг 2 – седан C-класса, передний и полный привод. Механика и вариатор. Бензиновые двигатели мощностью от 148 до 168 лошадиных сил.',
      unit: 'передний',
      consumption: 2.4,
      transmission: 'вариатор',
      fuel: 'бензин',
      price: 4.70
  },
  
]

let universal = [
  {
    img: 'https://avatars.mds.yandex.net/get-verba/997355/2a0000018ab1ef3218b811a8e0ec5088f703/cattouchret',
    name: 'Volkswagen Passat B9',
    desc: 'Volkswagen Passat B9 – универсал 5 дв. D-класса, передний и полный привод. Робот. Бензиновые, гибридные и дизельные двигатели мощностью от 122 до 272 лошадиных сил.',
    unit: 'передний',
    consumption: 2,
    transmission: 'робот',
    fuel: 'дизель',
    price: 470000
  },  
  {
    img: 'https://avatars.mds.yandex.net/get-verba/1540742/2a0000018046117373dd522fdbb5a601f237/cattouchret',
    name: 'Subaru Levorg II',
    desc: 'Subaru Levorg II – универсал 5 дв. D-класса, полный привод. Вариатор. Бензиновые двигатели мощностью от 177 до 260 лошадиных сил.',
    unit: 'полный',
    consumption: 2.4,
    transmission: 'вариатор',
    fuel: 'бензин',
    price: 470000
  },  
  {
    img: 'https://avatars.mds.yandex.net/get-verba/1540742/2a00000180f633acc34bd6acd409f98b2bc4/cattouchret',
    name: 'Lada Largus',
    desc: 'Lada (ВАЗ) Largus I Рестайлинг – универсал 5 дв. C-класса, передний привод. Механика. Бензиновые двигатели мощностью от 90 до 106 лошадиных сил.',
    unit: 'передний',
    consumption: 1.6,
    transmission: 'механика',
    fuel: 'бензин',
    price: 470000
  },  
  {
    img: 'https://avatars.mds.yandex.net/get-verba/1540742/2a0000018b16c07e36635290b0e3a3faeb25/cattouchret',
    name: 'Audi A6 V',
    desc: 'Audi A6 V (C8) Рестайлинг – универсал 5 дв. E-класса, передний и полный привод. Робот и автомат. Дизельные, бензиновые и гибридные двигатели мощностью от 163 до 367 лошадиных сил.',
    unit: 'передний',
    consumption: 2,
    transmission: 'робот',
    fuel: 'дизель',
    price: 470000
  },  
  {
    img: 'https://avatars.mds.yandex.net/get-verba/1540742/2a0000017622d723ae95772908f7797bc437/cattouchret',
    name: 'Volkswagen Golf VIII',
    desc: 'Volkswagen Golf VIII – универсал 5 дв. alltrack C-класса, полный привод. Робот. Дизельный двигатель мощностью 200 лошадиных сил.',
    unit: 'полный',
    consumption: 2,
    transmission: 'робот',
    fuel: 'дизель',
    price: 470000
  },  
  {
    img: 'https://avatars.mds.yandex.net/get-verba/997355/2a0000017c830b598a6100c39c6ecc65310b/cattouchret',
    name: 'Ford Focus IV',
    desc: 'Ford Focus IV Рестайлинг – универсал 5 дв. active C-класса, передний привод. Механика, робот и автомат. Бензиновые и дизельные двигатели мощностью от 95 до 155 лошадиных сил.',
    unit: 'передний',
    consumption: 1,
    transmission: 'механика',
    fuel: 'дизель',
    price: 470000
  }
]

let hatch = [
  {
    img: 'https://avatars.mds.yandex.net/get-verba/1540742/2a0000017ce53a2fedad502dc4d9c826e7a4/cattouchret',
    name: 'Kia Ceed III',
    desc: 'Kia Ceed III Рестайлинг – хэтчбек 5 дв. C-класса, передний привод. Автомат, робот и механика. Бензиновые и дизельные двигатели мощностью от 100 до 160 лошадиных сил.',
    unit: 'передний',
    consumption: 1.6,
    transmission: 'автомат',
    fuel: 'бензин',
    price: 470000
  }, 
  {
    img: 'https://avatars.mds.yandex.net/get-verba/216201/2a000001609c8f8e06a898a721c25fd9d57c/cattouchret',
    name: 'Renault Megane III',
    desc: 'Renault Megane III Рестайлинг 2 – хэтчбек 5 дв. C-класса, передний привод. Механика, вариатор и робот. Бензиновые и дизельные двигатели мощностью от 95 до 220 лошадиных сил.',
    unit: 'передний',
    consumption: 1.6,
    transmission: 'механика',
    fuel: 'бензин',
    price: 470000
  }, 
  {
    img: 'https://avatars.mds.yandex.net/get-verba/3587101/2a0000018051f1b4e0ed6c7d6e5483059d08/cattouchret',
    name: 'Kia Rio IV',
    desc: 'Kia Rio IV Рестайлинг – хэтчбек 5 дв. x B-класса, передний привод. Механика и автомат. Бензиновые двигатели мощностью от 100 до 123 лошадиных сил.',
    unit: 'передний',
    consumption: 1.6,
    transmission: 'механика',
    fuel: 'бензин',
    price: 470000
  }, 
  {
    img: 'https://avatars.mds.yandex.net/get-verba/787013/2a000001609cf4be1562101ed10d48220493/cattouchret',
    name: 'Hyundai Solaris I',
    desc: 'Hyundai Solaris I Рестайлинг – хэтчбек 5 дв. B-класса, передний привод. Механика и автомат. Бензиновые двигатели мощностью от 107 до 123 лошадиных сил.',
    unit: 'передний',
    consumption: 1.6,
    transmission: 'механика',
    fuel: 'бензин',
    price: 470000
  }, 
  {
    img: 'https://avatars.mds.yandex.net/get-verba/937147/2a0000017df762ca9f0f3b6b47b599c50b45/cattouchret',
    name: 'Citroen C4 III',
    desc: 'Citroen C4 III – хэтчбек 5 дв. C-класса, передний привод. Автомат и механика. Электро, бензиновые и дизельные двигатели мощностью от 102 до 155 лошадиных сил.',
    unit: 'передний',
    consumption: 1.2,
    transmission: 'механика',
    fuel: 'бензин',
    price: 470000
  }
]

let kupe = [
  {
    img: 'https://avatars.mds.yandex.net/get-verba/216201/2a000001886df6683c4bdb7afbfd18a28c0e/cattouchret',
    name: 'Ford Mustang VII',
    desc: 'Ford Mustang VII – купе S-класса, задний привод. Автомат и механика. Бензиновые двигатели мощностью от 319 до 487 лошадиных сил.',
    unit: 'задний',
    consumption: 5,
    transmission: 'автомат',
    fuel: 'бензин',
    price: 470000
  }, 
  {
    img: 'https://avatars.mds.yandex.net/get-verba/1540742/2a0000017fb102a89cecbee0f9238dece4d8/cattouchret',
    name: 'Audi TT III',
    desc: 'Audi TT III (8S) Рестайлинг – купе S-класса, передний и полный привод. Робот и механика. Бензиновые двигатели мощностью от 197 до 245 лошадиных сил.',
    unit: 'передний',
    consumption: 2,
    transmission: 'механика',
    fuel: 'бензин',
    price: 470000
  }, 
  {
    img: 'https://avatars.mds.yandex.net/get-verba/787013/2a000001609d430ac22bd7b18a5e3cfb4a9c/cattouchret',
    name: 'Mazda RX-8 I',
    desc: 'Mazda RX-8 I Рестайлинг – купе S-класса, задний привод. Автомат и механика. Бензиновые двигатели мощностью от 192 до 250 лошадиных сил.',
    unit: 'задний',
    consumption: 1.3,
    transmission: 'механика',
    fuel: 'бензин',
    price: 470000
  }, 

]


const modalBtn = document.getElementById('modal-btn')
const menuCards = document.querySelector('.menu_cards')
const ulMenuNavbar = document.querySelector('.ul_menu_navbar')
const universalBtn = document.querySelector('.universal')
const sedanBtn = document.querySelector('.sedan')
const hatchBtn = document.querySelector('.hatch')
const kupeBtn = document.querySelector('.kupe')
let arrCategories = document.querySelectorAll('.help')

const form = document.getElementById('form')
const input = form.querySelector('#question_input ')
const submitBtn = form.querySelector('#submit')


modalBtn.addEventListener('click', openModal)

// При загрузке отображаем седаны

window.addEventListener('load', renderCards(universal)) 

universalBtn.addEventListener('click', () => {
  universalBtn.id = 'current';
  sedanBtn.removeAttribute('id');
  hatchBtn.removeAttribute('id');
  kupeBtn.removeAttribute('id');
  [...menuCards.children].forEach(element => {
    // element.style.display="none"
    element.remove()
  });
  renderCards(universal)
  cardAddArr = [...menuCards.children]
  console.log(cardAddArr);
  myCart.products = listenerButtonsAfterRerendering(cardAddArr)
})

sedanBtn.addEventListener('click', () => {
  sedanBtn.id = 'current';
  universalBtn.removeAttribute('id');
  hatchBtn.removeAttribute('id');
  kupeBtn.removeAttribute('id');
  [...menuCards.children].forEach(element => {
    // element.style.display="none"
    element.remove()
  });
  renderCards(sedan)
  cardAddArr = [...menuCards.children]
  console.log(cardAddArr);
  myCart.products = listenerButtonsAfterRerendering(cardAddArr)
})

hatchBtn.addEventListener('click', () => {
  hatchBtn.id = 'current';
  universalBtn.removeAttribute('id');
  sedanBtn.removeAttribute('id');
  kupeBtn.removeAttribute('id');
  [...menuCards.children].forEach(element => {
    // element.style.display="none"
    element.remove()
  });
  renderCards(hatch)
  cardAddArr = [...menuCards.children]
  console.log(cardAddArr);
  myCart.products = listenerButtonsAfterRerendering(cardAddArr)
})

kupeBtn.addEventListener('click', () => {
  kupeBtn.id = 'current';
  universalBtn.removeAttribute('id');
  sedanBtn.removeAttribute('id');
  hatchBtn.removeAttribute('id');
  [...menuCards.children].forEach(element => {
    // element.style.display="none"
    element.remove()
  });
  renderCards(kupe)
  cardAddArr = [...menuCards.children]
  console.log(cardAddArr);
  myCart.products = listenerButtonsAfterRerendering(cardAddArr)
})

//  ОТРИСОВКА КАРТОЧЕК С АВТОМОБИЛЯМИ 


const cartNum = document.querySelector("#cart_num");
const cart = document.querySelector("#cart");



function createAutoModal(content) {
  const modalAuto = document.createElement('div')
  modalAuto.classList.add('modalAuto')

  modalAuto.innerHTML = `
    <div class="modalAuto-content">${content}</div>
  `
  mui.overlay('on', modalAuto)
}

// ВНЕШНИЙ ВИД МОДАЛКИ ДЛЯ ИНФЫ ОБ АВТОМОБИЛЯХ

function getAutoModal(obj) {
  return `
    <div id="myModal" class="modalAuto">

      <div class="modalAuto-content">
        <span class="close">&times;</span>
        <div class="infoAutoContainer">
          <div class="imgWithFeatures">
            <img class="infoImg" src=${obj.img}>
            <hr>
            <div class="infoFeatures">
              <div class="infoName">${obj.name}</div>
              <div class="techWrap">
                <div class="infoUnit">Привод: ${obj.unit}</div>
                <div class="infoConsumption">Объём двигателя: ${obj.consumption}</div>
                <div class="infoTransmission">Коробка передач: ${obj.transmission}</div>
                <div class="infoFuel">Тип топлива: ${obj.fuel}</div>
                <div class="infoPrice">Цена: ${obj.price}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="infoDesc">
            <div class="descText">${obj.desc}</div>
        </div>
        <button class="card__addInfo">В корзину</button>
      </div>
    
    </div>
  `
}

// ФУНКЦИИ ДЛЯ ПОДСЧЁТА СУММ В КОРЗИНЕ

function toNum(str) {
  const num = Number(str.replace(/ /g, ""));
  return num;
 }
 
 function toCurrency(num) {
  const format = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
  }).format(num);
  return format;
 }

//  КОРЗИНА, СОЗДАЁМ САМ КЛАСС И ЕГО МЕТОДЫ

class Cart {
  products;
  constructor() {
    this.products = [];
  }
  get count() {
    return this.products.length;
  }
  addProduct(product) {
    this.products.push(product);
  }
  removeProduct(index) {
    console.log(index);
    this.products.splice(index, 1);
  }
  get cost() {
    const prices = this.products.map((product) => {
      return toNum(product.price);
    });
    const sum = prices.reduce((acc, num) => {
      return acc + num;
    }, 0);
    return sum;
  }
}

class Product {
  imageSrc;
  name;
  price;
  constructor(card) {
    this.imageSrc = card.querySelector(".card__image").src;
    this.name = card.querySelector(".card__title").innerText;
    this.price = card.querySelector(".card__price--common").innerText;
  }
}

const myCart = new Cart();

// ДОБАВЛЯЕМ ТОВАРЫ ИЗ КОРЗИНЫ В ЛОКАЛ СТОРЕЙДЖ

if (localStorage.getItem("cart") == null) {
  localStorage.setItem("cart", JSON.stringify(myCart));
}

const savedCart = JSON.parse(localStorage.getItem("cart"));
myCart.products = savedCart.products;
cartNum.textContent = myCart.count;

let cardAddArr = [...menuCards.children]

function listenerButtonsAfterRerendering(arr) {
  arr.forEach((cardAdd) => {
    console.log(cardAdd);
    cardAdd.querySelector('.card__add').addEventListener("click", (e) => {
      e.preventDefault();
      const card = e.target.closest(".card");
      const product = new Product(card);
      const savedCart = JSON.parse(localStorage.getItem("cart"));
      myCart.products = savedCart.products;
      myCart.addProduct(product);
      localStorage.setItem("cart", JSON.stringify(myCart));
      cartNum.textContent = myCart.count;
    });
  })
}

myCart.products = listenerButtonsAfterRerendering(cardAddArr)

function renderCards(arr) {
  return arr.forEach((elem) => {
    let div = document.createElement('div');
    let div1 = document.createElement('div');
    let img = document.createElement("img");
    let span = document.createElement("span");
    let btn = document.createElement("button")
    div.appendChild(img);
    div.appendChild(div1);
    div.appendChild(span);
    div.appendChild(btn);
    div.classList.add("card")
    div1.classList.add("card__title")
    img.classList.add("card__image")
    span.classList.add("card__price--common")
    btn.classList.add("card__add")

    img.src = elem.img;
    div1.innerHTML = elem.name;
    span.innerHTML = `${elem.price}`
    btn.innerHTML = 'В корзину'
    menuCards.appendChild(div)

    // ПРИ КЛИКЕ НА КАРТИНКУ ВЫЛАЗИТ МОДАЛКА С ИНФОЙ

    img.addEventListener('click', function () {
      createAutoModal(getAutoModal(elem))
      console.log(elem);
      const close = document.querySelector(".close");
      const modalAuto = document.querySelector(".modalAuto");

      // let addToBusketCard = document.querySelector('.card__addInfo')
      // console.log(addToBusketCard);

      // addToBusketCard.addEventListener('click', (e) => {
      //     e.preventDefault();
      //     const card = e.target.closest(".infoAutoContainer");
      //     console.log(card);
      //     const product = new Product1(card);
      //     const savedCart = JSON.parse(localStorage.getItem("cart"));
      //     myCart.products = savedCart.products;
      //     myCart.addProduct(product);
      //     localStorage.setItem("cart", JSON.stringify(myCart));
      //     cartNum.textContent = myCart.count;
      // })

      close.onclick = function() {
        modalAuto.style.display = "none";
        mui.overlay('off', modalAuto)
      }
    })
  })
}

// СОЗДАЁМ ЭЛЕМЕНТ КОРЗИНЫ

function popupContainerFill() {
  popupProductList.innerHTML = null;
  const savedCart = JSON.parse(localStorage.getItem("cart"));
  myCart.products = savedCart.products;
  const productsHTML = myCart.products.map((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("popup__product");

    const productWrap1 = document.createElement("div");
    productWrap1.classList.add("popup__product-wrap");
    const productWrap2 = document.createElement("div");
    productWrap2.classList.add("popup__product-wrap");

    const productImage = document.createElement("img");
    productImage.classList.add("popup__product-image");
    productImage.setAttribute("src", product.imageSrc);

    const productTitle = document.createElement("h2");
    productTitle.classList.add("popup__product-title");
    productTitle.innerHTML = product.name;

    const productPrice = document.createElement("div");
    productPrice.classList.add("popup__product-price");
    productPrice.innerHTML = toCurrency(toNum(product.price));

    const productDelete = document.createElement("button");
    productDelete.classList.add("popup__product-delete");
    productDelete.innerHTML = "&#10006;";

    productDelete.addEventListener("click", () => {
      myCart.removeProduct(myCart.products.indexOf(product));
      localStorage.setItem("cart", JSON.stringify(myCart));
      cartNum.textContent = myCart.count;
      popupContainerFill();
    });

    productWrap1.appendChild(productImage);
    productWrap1.appendChild(productTitle);
    productWrap2.appendChild(productPrice);
    productWrap2.appendChild(productDelete);
    productItem.appendChild(productWrap1);
    productItem.appendChild(productWrap2);

    return productItem;
  });

  productsHTML.forEach((productHTML) => {
    popupProductList.appendChild(productHTML);
  });

  popupCost.value = toCurrency(myCart.cost);
}

 // ------------------- КОРЗИНА

 const busketSection = document.querySelector('.busket_section')
 const contacts = document.querySelector(".contacts")
 const popupCloseCont = popupContacts.querySelector('#popup_closeCont')

 function isAuth() {
   busketSection.classList.remove("dispNone")
 }
   

busketSection.addEventListener('click', openCart)
contacts.addEventListener('click', openCartContacts)

function openCart(events) {
 events.preventDefault();
 popup.classList.add("popup--open");
 body.classList.add("lock");
 popupContainerFill();
}

function openCartContacts(events) {
 events.preventDefault();
 popupContacts.classList.add("popup--open");
 body.classList.add("lock");
}

popupCloseCont.addEventListener("click", (e) => {
 e.preventDefault();
 popupContacts.classList.remove("popup--open");
 body.classList.remove("lock");
});
popupClose.addEventListener("click", (e) => {
 e.preventDefault();
 popup.classList.remove("popup--open");
 body.classList.remove("lock");
});



// --------------------СЕКЦИЯ ВОПРОСЫ-----------------------------

import {Question} from './question.js'

function isValid(value) {
  return value.length >= 10
}

form.addEventListener('submit', submitFormHandler)
input.addEventListener('input', () => {
  submitBtn.disabled = !isValid(input.value)
})

function submitFormHandler(event) {
  event.preventDefault();

  if (isValid(input.value)) {
    const question = {
      text: input.value.trim(),
      date: new Date().toJSON()
    }

    submitBtn.disabled = true
    // Async request to server to save question
    Question.create(question).then(() => {
      input.value = ''
      input.className = ''
      submitBtn.disabled = false
    })
    createModal("Ваш вопрос успешно отправлен", `<button button type="submit" class="closeForm mui-btn mui-btn--primary"> Ок. </button>`)
    document.querySelector(".closeForm").addEventListener('click', () => {
      document.querySelector('.modal').style.display = 'none';
      mui.overlay('off', document.querySelector('.modal'))
    })
  }
}

// АВТОРИЗАЦИЯ

// КОНТЕНТ ФОРМЫ АВТОРИЗАЦИИ

function getAuthForm() {
    return `
      <form class="mui-form" id="auth-form">
        <div class="mui-textfield mui-textfield--float-label">
          <input type="email" id="email" required>
          <label for="email">Email</label>
        </div>
        <div class="mui-textfield mui-textfield--float-label">
          <input type="password" id="password" required>
          <label for="password">Пароль</label>
        </div>
        <button
          type="submit"
          class="mui-btn mui-btn--raised mui-btn--primary"
        >
          Войти
        </button>
      </form>
    `
  }

function authWithEmailAndPassword(email, password) {  
  const apiKey = 'AIzaSyCrCAHKkL-jHS77p1Y_0Z6KjNLAPDtSRXk'
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
  method: 'POST',
  body: JSON.stringify({
      email, password,
      returnSecureToken: true
  }),
  headers: {
      'Content-Type': 'application/json'
  }
  })
  .then(response => response.json())
  .then(data => data.idToken)
}

function createModal(title, content) {
    const modal = document.createElement('div')
    modal.classList.add('modal')
  
    modal.innerHTML = `
      <h1>${title}</h1>
      <div class="modal-content">${content}</div>
    `
  
    mui.overlay('on', modal)
}


function openModal(events) {
    events.preventDefault();
    createModal('Авторизация', getAuthForm())
    document
    .getElementById('auth-form')
    .addEventListener('submit', authFormHandler, {once: true})
}


function authFormHandler(event) {
    event.preventDefault()
  
    const btn = event.target.querySelector('button')
    const email = event.target.querySelector('#email').value
    const password = event.target.querySelector('#password').value

    btn.disabled = true
    authWithEmailAndPassword(email, password)
      .then(Question.fetch)
      .then(renderModalAfterAuth)
      .then(() => btn.disabled = false)
}
  
  function renderModalAfterAuth(content) {
    if (typeof content === 'string') {
      createModal('Ошибка!', content)
    } else {
      isAuth();
      document.querySelector('.modal').style.display = 'none';
      document.querySelector('#modal-btn').style.display = 'none';
      mui.overlay('off', document.querySelector('.modal'))
    }
  }

 