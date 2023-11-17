function displayKeyword(joke) {
    const main = document.querySelector('main')
    main.innerHTML = ''
    if(joke.setup === undefined){
        main.innerHTML = 'There are no matches. Please try again!'
    } else {
        const article = document.createElement('article')
        article.classList.add('joke')
        article.innerHTML = `
        <p>${joke.setup}</p>
        <p class="hidden">${joke.delivery}</p>
        <button class=show-answer>Show Answer</button>`
        showAnswer(article)
        main.append(article)
    }
}

function fetchAndDisplayKeyword() {
    const keywordInput = document.querySelector('#keyword')
    const keyword = keywordInput.value
    fetch(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&contains=${keyword}`)
      .then((response) => response.json())
      .then((data) => displayKeyword(data))
      .catch((error) => {
        const main = document.querySelector('main')
        main.innerHTML = 'This feature is currently unavailable, Please try again later.'
      })
}

