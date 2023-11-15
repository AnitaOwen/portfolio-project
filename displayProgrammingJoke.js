function displayProgrammingJoke(joke){
    const main = document.querySelector('main')
    main.innerHTML = ''
    const article = document.createElement('article')
    article.classList.add('joke')

    article.innerHTML = `
    <p>${joke.setup}</p>
    <p class="hidden">${joke.punchline}</p>
    <button class=show-answer>Show Answer</button>`

    const showAnswerButton = article.querySelector('.show-answer')
    const answer = article.querySelector('.hidden')
    
    showAnswerButton.addEventListener("click", () => {
        answer.classList.remove('hidden')
        showAnswerButton.classList.add('hidden')
    })

    main.append(article)
}
