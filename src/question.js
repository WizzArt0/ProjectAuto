export class Question {
    static create(question) {
      return fetch('https://dolce-vita-ee2e3-default-rtdb.europe-west1.firebasedatabase.app/questions.json', {
        method: 'POST',
        body: JSON.stringify(question),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(response => {
          console.log(response)
        })
        .then(addToLocalStorage)
    }

    static fetch(token) {
        if (!token) {
          return Promise.resolve('<p class="error">У вас нет токена</p>')
        }
        return fetch(`https://dolce-vita-ee2e3-default-rtdb.europe-west1.firebasedatabase.app/questions.json?auth=${token}`)
          .then(response => response.json())
          .then(response => {
            if (response && response.error) {
              return `<p class="error">${response.error}</p>`
            }
    
            // return response ? Object.keys(response).map(key => ({
            //   ...response[key],
            //   id: key
            // })) : []
          })
      }
}

function addToLocalStorage(question) {
    const all = getQuestionsFromLocalStorage()
    all.push(question)
    localStorage.setItem('questions', JSON.stringify(all))
  }
  
  function getQuestionsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('questions') || '[]')
  }
  
