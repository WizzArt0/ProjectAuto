const popup = document.querySelector(".popup");
const popupClose = document.querySelector("#popup_close");
const body = document.body;
const popupContainer = document.querySelector("#popup_container");
const popupProductList = document.querySelector("#popup_product_list");
const popupCost = document.querySelector("#popup_cost");
const popupDiscount = document.querySelector("#popup_discount");
const popupCostDiscount = document.querySelector("#popup_cost_discount");


let deserts = [
  {
      img: 'https://just-eat.by/image/data/shops/146923/189775.jpg',
      name: 'Набор эклеров Сластена',
      desc: 'Набор эклеров с кремом из взбитых сливок и фруктово-ягодной начинки.',
      price: 4.70

  },
  {
      img: 'https://just-eat.by/image/data/shops/146923/189774.jpg',
      name: 'Набор эклеров Услада',
      desc: 'Набор эклеров с кремом из взбитых сливок и вареного сгущенного молока.',
      price: 6.90
  }
]

let pancakes = [
  {
      img: 'https://just-eat.by/image/data/shops/146923/193560.jpg',
      name: 'Бенто-торт Красный бархат',
      desc: 'Вишнево-шоколадный бисквит, творожно-масляный крем.',
      price: 15

  },
  {
      img: 'https://just-eat.by/image/data/shops/146923/193559.jpg',
      name: 'Бенто-торт Черный лес',
      desc: 'Шоколадный бисквит с начинкой из заварной вишни со сливочным кремом.',
      price: 6.90
  },
  {
      img: 'https://just-eat.by/image/data/shops/146923/193559.jpg',
      name: 'Бенто-торт Черный лес',
      desc: 'Шоколадный бисквит с начинкой из заварной вишни со сливочным кремом.',
      price: 6.90
  },
  {
      img: 'https://just-eat.by/image/data/shops/146923/193559.jpg',
      name: 'Бенто-торт Черный лес',
      desc: 'Шоколадный бисквит с начинкой из заварной вишни со сливочным кремом.',
      price: 6.90
  },
  {
      img: 'https://just-eat.by/image/data/shops/146923/193559.jpg',
      name: 'Бенто-торт Черный лес',
      desc: 'Шоколадный бисквит с начинкой из заварной вишни со сливочным кремом.',
      price: 6.90
  },
  {
      img: 'https://just-eat.by/image/data/shops/146923/193559.jpg',
      name: 'Бенто-торт Черный лес',
      desc: 'Шоколадный бисквит с начинкой из заварной вишни со сливочным кремом.',
      price: 6.90
  },
  {
      img: 'https://just-eat.by/image/data/shops/146923/193559.jpg',
      name: 'Бенто-торт Черный лес',
      desc: 'Шоколадный бисквит с начинкой из заварной вишни со сливочным кремом.',
      price: 6.90
  }
]

let polufabrikats = [
  {
      img: 'https://just-eat.by/image/data/shops/146923/189794.jpg',
      name: 'Замороженные блинчики с печенью',
      desc: 'Блинчики с печеночным паштетом замороженные.',
      price: 5

  },
  {
      img: 'https://just-eat.by/image/data/shops/146923/189790.jpg',
      name: 'Замороженные вареники с вишней',
      desc: 'Вареники с вишней замороженные (ручная лепка).',
      price: 4.40
  },
  {
      img: 'https://just-eat.by/image/data/shops/146923/189791.jpg',
      name: 'Замороженные вареники с вишней',
      desc: 'Вареники с вишней замороженные (ручная лепка).',
      price: 4.40
  }
]


const modalBtn = document.getElementById('modal-btn')
const menuCards = document.querySelector('.menu_cards')
const ulMenuNavbar = document.querySelector('.ul_menu_navbar')
const pancakesBtn = document.querySelector('.pancakes')
const desertsBtn = document.querySelector('.deserts')
const polufabrikatsBtn = document.querySelector('.polufabrikats')
let arrCategories = document.querySelectorAll('.help')

const form = document.getElementById('form')
const input = form.querySelector('#question_input ')
const submitBtn = form.querySelector('#submit')

// ulMenuNavbar.addEventListener('click', changeCurrent);
modalBtn.addEventListener('click', openModal)


// При загрузке отображаем десерты

window.addEventListener('load', renderCart(pancakes)) 

pancakesBtn.addEventListener('click', () => {
  pancakesBtn.id = 'current';
  desertsBtn.removeAttribute('id');
  polufabrikatsBtn.removeAttribute('id');
  [...menuCards.children].forEach(element => {
    element.remove()
  });
  renderCart(pancakes)
})

desertsBtn.addEventListener('click', () => {
  desertsBtn.id = 'current';
  pancakesBtn.removeAttribute('id');
  polufabrikatsBtn.removeAttribute('id');
  [...menuCards.children].forEach(element => {
    element.remove()
  });
  renderCart(deserts)
})

polufabrikatsBtn.addEventListener('click', () => {
  polufabrikatsBtn.id = 'current';
  pancakesBtn.removeAttribute('id');
  desertsBtn.removeAttribute('id');
  [...menuCards.children].forEach(element => {
    element.remove()
  });
  renderCart(polufabrikats)
})



// menuCards.addEventListener('click', goToCart)

// function goToCart(event) {
//   cart.push(event.target)
//   console.log(cart);
// }


function renderCart(arr) {
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
  })
}

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

const cardAddArr = Array.from(document.querySelectorAll(".card__add"));
const cartNum = document.querySelector("#cart_num");
const cart = document.querySelector("#cart");

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

if (localStorage.getItem("cart") == null) {
  localStorage.setItem("cart", JSON.stringify(myCart));
}

const savedCart = JSON.parse(localStorage.getItem("cart"));
myCart.products = savedCart.products;
cartNum.textContent = myCart.count;

myCart.products = cardAddArr.forEach((cardAdd) => {
  cardAdd.addEventListener("click", (e) => {
    e.preventDefault();
    const card = e.target.closest(".card");
    const product = new Product(card);
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    myCart.products = savedCart.products;
    myCart.addProduct(product);
    localStorage.setItem("cart", JSON.stringify(myCart));
    cartNum.textContent = myCart.count;
  });
});

console.log(myCart);

function popupContainerFill() {
  popupProductList.innerHTML = null;
  const savedCart = JSON.parse(localStorage.getItem("cart"));
  console.log(savedCart);
  myCart.products = savedCart.products;
  console.log(myCart);
  const productsHTML = myCart.products.map((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("popup__product");
    console.log(productItem);

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
      myCart.removeProduct(product);
      localStorage.setItem("cart", JSON.stringify(myCart));
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
  popupDiscount.value = toCurrency(myCart.discount);
  popupCostDiscount.value = toCurrency(myCart.costDiscount);
}

// ------------------------------------------------------------------

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

    console.log(question);

    submitBtn.disabled = true
    // Async request to server to save question
    Question.create(question).then(() => {
      input.value = ''
      input.className = ''
      submitBtn.disabled = false
    })
    createModal("Ваш вопрос успешно отправлен", `<button button type="submit" class="mui-btn mui-btn--primary"> Ок. </button>`)
    // ПРИ НАЖАТИИ НА КНОПКУ ЗАКРЫТЬ МОДАЛКУ
  }
}

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


// АВТОРИЗАЦИЯ

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

    // console.log(email, password);
  
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
      // СДЕЛАТЬ ЗАКРЫТИЕ МОДАЛКИ АВТОРИЗАЦИИ!!!!!!!!!!
    }
  }

  // ------------------- КОРЗИНА

  const busketSection = document.querySelector('.busket_section')

  function isAuth() {
    busketSection.classList.remove("dispNone")
  }
    
  function authWithEmailAndPassword(email, password) {  
    const apiKey = 'AIzaSyAvTxNA5WTz8uEQw-TuYYRmgKw_3c8ZgTY'
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



busketSection.addEventListener('click', openCart)

function openCart(events) {
  events.preventDefault();
  popup.classList.add("popup--open");
  body.classList.add("lock");
  popupContainerFill();
}

popupClose.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.remove("popup--open");
  body.classList.remove("lock");
});