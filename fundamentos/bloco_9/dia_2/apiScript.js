// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject =  {
    method: 'GET',
    headers: { 'Accept': 'application/JSON' }
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((response) => {
      const joke = document.createElement('p');
      joke.innerHTML = response.joke;
      document.querySelector('#jokeContainer').appendChild(joke);
    });
};

window.onload = () => fetchJoke();