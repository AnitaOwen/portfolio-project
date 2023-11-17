function displayJoke(joke){
    const main = document.querySelector('main')
    main.innerHTML = ''
    const article = document.createElement('article')
    article.classList.add('joke')
    article.innerHTML = `
    <p>${joke.setup}</p>
    <p class="hidden">${joke.punchline}</p>
    <button class=show-answer>Show Answer</button>`
    showAnswer(article)
    main.append(article)
}

function showAnswer(article){
    const showAnswerButton = article.querySelector('.show-answer')
    showAnswerButton.addEventListener("click", () => {
        const answer = article.querySelector('.hidden')
        answer.classList.remove('hidden')
        showAnswerButton.classList.add('hidden')
    })
}