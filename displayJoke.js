function displayJoke(joke){
    const { setup, punchline } = joke
    const main = document.querySelector('main')
    main.innerHTML = ''
    const article = document.createElement('article')
    article.classList.add('joke')

    article.innerHTML = `
    <p>${joke.setup}</p>
    <p class="hidden">${joke.punchline}</p>
    <button class=show-answer>Show Answer</button>`

    const showAnswerButton = article.querySelector('.show-answer')
    showAnswerButton.addEventListener("click", () => {
        const answer = article.querySelector('.hidden')
        answer.classList.remove('hidden')
        showAnswerButton.classList.add('hidden')
    })

    main.append(article)
}

