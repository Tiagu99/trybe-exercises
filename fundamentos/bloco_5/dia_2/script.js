let textH1 = document.createElement('h1');
textH1.innerText = 'Exercício 5.2 - JavaScript DOM';

document.querySelector('body').appendChild(textH1);

let mainContent = document.createElement('div');
mainContent.className = 'main-content';

document.querySelector('body').appendChild(mainContent);

let centerContent = document.createElement('div');
centerContent.className = 'center-content';

document.querySelector('.main-content').appendChild(centerContent);

let textP = document.createElement('p');
textP.innerHTML = 'Olá, tudo bem?';

document.querySelector('.center-content').appendChild(textP);

let leftContent = document.createElement('div');
leftContent.className = 'left-content';

document.querySelector('.main-content').appendChild(leftContent);

let rightContent = document.createElement('div');
rightContent.className = 'right-content';

document.querySelector('.main-content').appendChild(rightContent);

let image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';

document.querySelector('.left-content').appendChild(image);