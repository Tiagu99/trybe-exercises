let textH1 = document.createElement('h1');
textH1.innerText = 'Exercício 5.2 - JavaScript DOM';

document.getElementsByTagName('body')[0].appendChild(textH1);

let mainContent = document.createElement('div');
mainContent.className = 'main-content';

document.getElementsByTagName('body')[0].appendChild(mainContent);

let centerContent = document.createElement('div');
centerContent.className = 'center-content';

document.querySelector('.main-content').appendChild(centerContent);