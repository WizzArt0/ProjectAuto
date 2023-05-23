const modalBtn = document.getElementById('modal-btn')

modalBtn.addEventListener('click', openModal)

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
        const apiKey = 'AIzaSyDIwdXP5VEbTh2z8iuw4cKftPCCieqja2U'
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
      createModal('Корзина', Question.listToHTML(content))
    }
  }