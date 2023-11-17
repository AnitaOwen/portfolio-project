fetch('https://v2.jokeapi.dev/joke/Christmas?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=twopart')
      .then((response) => response.json())
      .then((data) => displayChristmas(data))
      .catch((error) => console.log(error));
