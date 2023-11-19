fetch(`https://official-joke-api.appspot.com/random_joke`)
      .then((response) => response.json())
      .then((data) => displayJoke(data))
      .catch((error) => {
        console.log(error)
        alert('Sorry, this feature unavailable. Please try again later.')
      })
      
const randomJokeButton = document.querySelector('#random-joke-button')
randomJokeButton.addEventListener('click', () => {
    fetch(`https://official-joke-api.appspot.com/random_joke`)
      .then((response) => response.json())
      .then((data) => displayJoke(data))
      .catch((error) => {
        console.log(error)
        alert('Sorry, this feature unavailable. Please try again later.')
      })
})

const programmingJokeButton = document.querySelector('#programming-joke-button')
programmingJokeButton.addEventListener('click', () => {
  fetch(`https://official-joke-api.appspot.com/jokes/programming/random`)
  .then((response) => response.json())
  .then((data) => displayProgrammingJoke(data[0]))
  .catch((error) => {
    console.log(error)
    alert('Sorry, this feature unavailable. Please try again later.')
  })
})

const categoryForm = document.querySelector('.category-form')
categoryForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const selectedCategory = event.target.category.value

  if(selectedCategory === 'puns') {
    fetchAndDisplayPun()
  } else if(selectedCategory === 'christmas'){
    fetchAndDisplayChristmas()
  } else if(selectedCategory === 'spooky'){
    fetchAndDisplaySpooky()
  } else if(selectedCategory === 'misc'){
    fetchAndDisplayMisc()
  }
  categoryForm.reset()
})

const keywordForm = document.querySelector('.keyword-form')
keywordForm.addEventListener('submit', (event) => {
  event.preventDefault()
  fetchAndDisplayKeyword()
  keywordForm.reset()
})
