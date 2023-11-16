function displayProgrammingJoke(joke){
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
