
const randomJokeButton = document.querySelector('#random-joke-button')
randomJokeButton.addEventListener('click', () => {
    fetch(`https://official-joke-api.appspot.com/random_joke`)
      .then((response) => response.json())
      .then((data) => displayJoke(data))
      .catch((error) => console.log(error))
})
