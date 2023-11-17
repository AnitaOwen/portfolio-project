
fetch('https://uselessfacts.jsph.pl/today.json?language=en')
      .then((response) => response.json())
      .then((data) => displayFactOfTheDay(data))
      .catch((error) => console.log(error))
      
function displayFactOfTheDay(fact) {
    const main = document.querySelector('main')
    main.innerHTML = ''
    const article = document.createElement('article')
    article.classList.add('fact')
    article.innerHTML = `
    <h2>Today's Fact</h2>
    <p>${fact.text}</p>
    <button class="random-fact-button">Random Useless Fact</button>`
    const randomFactButton = article.querySelector('.random-fact-button')
    randomFactButton.addEventListener('click', fetchRandomFact)
            
    main.append(article)
    }

    function fetchRandomFact() {
        fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        .then((response) => response.json())
        .then((data) => displayFactOfTheDay(data))
        .catch((error) => console.log(error))
    }