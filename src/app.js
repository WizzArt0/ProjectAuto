let deserts = [
  {
      img: 'https://just-eat.by/image/data/shops/146923/189775.jpg',
      name: 'Набор эклеров Сластена',
      desc: 'Набор эклеров с кремом из взбитых сливок и фруктово-ягодной начинки.',
      price: 4.70,
      inCart: false

  },
  {
      img: 'https://just-eat.by/image/data/shops/146923/189774.jpg',
      name: 'Набор эклеров Услада',
      desc: 'Набор эклеров с кремом из взбитых сливок и вареного сгущенного молока.',
      price: 6.90,
      inCart: false
  }
]

let pancakes = [
  {
      img: 'https://just-eat.by/image/data/shops/146923/193560.jpg',
      name: 'Бенто-торт Красный бархат',
      desc: 'Вишнево-шоколадный бисквит, творожно-масляный крем.',
      price: 15,
      inCart: false

  },
  {
      img: 'https://just-eat.by/image/data/shops/146923/193559.jpg',
      name: 'Бенто-торт Черный лес',
      desc: 'Шоколадный бисквит с начинкой из заварной вишни со сливочным кремом.',
      price: 6.90,
      inCart: false
  },
  {
      img: 'https://just-eat.by/image/data/shops/146923/193559.jpg',
      name: 'Бенто-торт Черный лес',
      desc: 'Шоколадный бисквит с начинкой из заварной вишни со сливочным кремом.',
      price: 6.90,
      inCart: false
  },
  {
      img: 'https://just-eat.by/image/data/shops/146923/193559.jpg',
      name: 'Бенто-торт Черный лес',
      desc: 'Шоколадный бисквит с начинкой из заварной вишни со сливочным кремом.',
      price: 6.90,
      inCart: false
  },
  {
      img: 'https://just-eat.by/image/data/shops/146923/193559.jpg',
      name: 'Бенто-торт Черный лес',
      desc: 'Шоколадный бисквит с начинкой из заварной вишни со сливочным кремом.',
      price: 6.90,
      inCart: false
  },
  {
      img: 'https://just-eat.by/image/data/shops/146923/193559.jpg',
      name: 'Бенто-торт Черный лес',
      desc: 'Шоколадный бисквит с начинкой из заварной вишни со сливочным кремом.',
      price: 6.90,
      inCart: false
  },
  {
      img: 'https://just-eat.by/image/data/shops/146923/193559.jpg',
      name: 'Бенто-торт Черный лес',
      desc: 'Шоколадный бисквит с начинкой из заварной вишни со сливочным кремом.',
      price: 6.90,
      inCart: false
  }
]

let polufabrikats = [
  {
      img: 'https://just-eat.by/image/data/shops/146923/189794.jpg',
      name: 'Замороженные блинчики с печенью',
      desc: 'Блинчики с печеночным паштетом замороженные.',
      price: 5,
      inCart: false

  },
  {
      img: 'https://just-eat.by/image/data/shops/146923/189790.jpg',
      name: 'Замороженные вареники с вишней',
      desc: 'Вареники с вишней замороженные (ручная лепка).',
      price: 4.40,
      inCart: false
  },
  {
      img: 'https://just-eat.by/image/data/shops/146923/189791.jpg',
      name: 'Замороженные вареники с вишней',
      desc: 'Вареники с вишней замороженные (ручная лепка).',
      price: 4.40,
      inCart: false
  }
]


const modalBtn = document.getElementById('modal-btn')
const menuCards = document.querySelector('.menu_cards')
const ulMenuNavbar = document.querySelector('.ul_menu_navbar')
const pancakesBtn = document.querySelector('.pancakes')
const desertsBtn = document.querySelector('.deserts')
const polufabrikatsBtn = document.querySelector('.polufabrikats')
let arrCategories = document.querySelectorAll('.help')

// ulMenuNavbar.addEventListener('click', changeCurrent);
modalBtn.addEventListener('click', openModal)

getDeserts(deserts)

pancakesBtn.addEventListener('click', () => {
  getPancakes()
})

desertsBtn.addEventListener('click', () => {
  getDeserts()
})

polufabrikatsBtn.addEventListener('click', () => {
  getPoluf()
})

// function changeCurrent(cur) {
//   // location.reload();
//   var buf = cur.target.className.split(' ');
//   console.log(buf[buf.length - 1]);
//   menuCards.remove();
//   testFunc();
// }

function getPancakes() {

  // menuCards.remove();
  

  pancakes.forEach((elem) => {
    let div = document.createElement('div');
    let div1 = document.createElement('div');
    let img = document.createElement("img");
    let span = document.createElement("span");
    div.appendChild(img);
    div.appendChild(div1);
    div.classList.add("card")
    div1.classList.add("cardName")
    img.classList.add("img_card")

    img.src = elem.img;
    div1.innerHTML = elem.name;
    menuCards.appendChild(div)
  })
}

function getPoluf() {

  // menuCards.remove();

  polufabrikats.forEach((elem) => {
    let div = document.createElement('div');
    let div1 = document.createElement('div');
    let img = document.createElement("img");
    let span = document.createElement("span");
    div.appendChild(img);
    div.appendChild(div1);
    div.classList.add("card")
    div1.classList.add("cardName")
    img.classList.add("img_card")

    img.src = elem.img;
    div1.innerHTML = elem.name;
    menuCards.appendChild(div)
  })
}

function getDeserts(categories) {

  deserts.forEach((elem) => {
    let div = document.createElement('div');
    let div1 = document.createElement('div');
    let img = document.createElement("img");
    let span = document.createElement("span");
    div.appendChild(img);
    div.appendChild(div1);
    div.classList.add("card")
    div1.classList.add("cardName")
    img.classList.add("img_card")

    img.src = elem.img;
    div1.innerHTML = elem.name;
    menuCards.appendChild(div)
  })
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
      console.log('ya mamu traxal');
      isAuth()
    }
  }

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