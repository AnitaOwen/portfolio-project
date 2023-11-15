function displayPun(pun){
    const main = document.querySelector('main')
    main.innerHTML = ''
    const article = document.createElement('article')
    article.classList.add('joke')
    article.innerHTML = `
    <p>${pun.joke}</p>
    <button class="another-one-button">Another One</button>`
    const anotherOneButton = article.querySelector('.another-one-button')
    anotherOneButton.addEventListener('click', fetchAndDisplayPun)
    main.append(article)
}

function fetchAndDisplayPun() {
    fetch('https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single')
      .then((response) => response.json())
      .then((data) => displayPun(data))
      .catch((error) => console.log(error));
}

function displayChristmas(joke){
        const { setup, delivery } = joke
        const main = document.querySelector('main')
        main.innerHTML = ''
        const article = document.createElement('article')
        article.classList.add('joke')
        article.innerHTML = `
        <p>${joke.setup}</p>
        <p class="hidden">${joke.delivery}</p>
        <button class=show-answer>Show Answer</button>
        <button class="another-one-button">Another One</button>`
        showAnswer(article)
        const anotherOneButton = article.querySelector('.another-one-button')
        anotherOneButton.addEventListener('click', fetchAndDisplayChristmas)
        main.append(article)
}

function fetchAndDisplayChristmas() {
    fetch('https://v2.jokeapi.dev/joke/Christmas?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=twopart')
      .then((response) => response.json())
      .then((data) => displayChristmas(data))
      .catch((error) => console.log(error));
}
