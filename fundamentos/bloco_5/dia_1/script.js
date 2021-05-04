/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
        1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
        2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
        3. Crie uma função que mude a cor do quadrado vermelho para branco.
        4. Crie uma função que corrija o texto da tag <h1>.
        5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
        6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

function changeText(){
  document.getElementsByTagName('p')[0].innerHTML = 'Espero estar consolidado no mercado de trabalho';
}

function changeSideColor(){
  document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';
}

function changeInnerColor(){
  document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
}

function fixText(){
  document.getElementsByTagName('h1')[0].innerHTML = 'Exercício 5.1 - JavaScript';
}

function changeUpperCase(){
  let text = document.getElementsByTagName('p')[0].innerHTML;
  document.getElementsByTagName('p')[0].innerHTML = text.toUpperCase();
}

function showTagsContent(){
  let text = document.getElementsByTagName('p');
  for (let index in text) {
    console.log(text[index].innerHTML);
  }
}

changeText();
fixText();
changeUpperCase();
showTagsContent();