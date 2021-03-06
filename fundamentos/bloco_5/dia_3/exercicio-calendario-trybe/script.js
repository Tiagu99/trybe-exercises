function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDays = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let days = document.createElement('li');
    if (dezDaysList[index] == 24 || dezDaysList[index] == 31) {
      createHoliday(days, dezDaysList[index], monthDays);

    } else if (dezDaysList[index] == 4 || dezDaysList[index] == 11 || dezDaysList[index] == 18) {
      createFryday(days, dezDaysList[index], monthDays);

    } else if (dezDaysList[index] == 25) {
      frydayHoliday(days, dezDaysList[index], monthDays);

    } else {
      createDay(days, dezDaysList[index], monthDays);

    }
  }
}
function createHoliday(element, numberDay, month) {
  element.className = 'day holiday';
  element.innerHTML = numberDay;
  month.appendChild(element);
}
function createFryday(element, numberDay, month) {
  element.className = 'day fryday';
  element.innerHTML = numberDay;
  month.appendChild(element);
}
function frydayHoliday(element, numberDay, month){
  element.className = 'day fryday holiday';
  element.innerHTML = numberDay;
  month.appendChild(element);
}
function createDay(element, numberDay, month){
  element.className = 'day';
  element.innerHTML = numberDay;
  month.appendChild(element);
}
createDaysOfTheMonth();

function createButton(buttonName, idName){
  let button = document.createElement('button');
  button.innerHTML = buttonName;
  button.id = idName;
  document.querySelector('.buttons-container').appendChild(button);
}

createButton('Feriados', 'btn-holiday');

let buttonHoliday = document.querySelector('#btn-holiday');
buttonHoliday.addEventListener('click', changeElementsColor);

function changeElementsColor() {
  let elements = document.querySelectorAll('.holiday');
  if (elements[0].style.backgroundColor !== 'white') {
    for (let index = 0; index < elements.length; index += 1) {
      elements[index].style.backgroundColor = 'white';
    }
  } else {
    for (let index = 0; index < elements.length; index += 1) {
      elements[index].style.backgroundColor = 'rgb(238,238,238)';
    }
  }
}

createButton('Sexta-Feira', 'btn-fryday');

let buttonFryday = document.querySelector('#btn-fryday');
buttonFryday.addEventListener('click', changeElementsName);

function changeElementsName() {
  let elements = document.querySelectorAll('.fryday');
  if (elements[0].innerHTML !== 'SEXTOU!!!') {
    for (let index = 0; index < elements.length; index += 1) {
      elements[index].innerHTML = 'SEXTOU!!!';
    }
  } else {
    for (let index = 0; index < elements.length; index += 1) {
      elements[index].innerHTML = parseInt(elements[index].previousElementSibling.innerHTML) + 1;
    }
  }
}

function addTask(taskName) {
  let elemtent = document.createElement('span');
  elemtent.innerHTML = taskName;
  document.querySelector('.my-tasks').appendChild(elemtent);
}

addTask('Cozinhar');

function addColorSubtittle(color) {
  let element = document.createElement('div');
  element.style.backgroundColor = color;
  element.className = 'task';
  document.querySelector('.my-tasks').appendChild(element);
}

addColorSubtittle('blue');

let changeColor = document.querySelector('.task');
changeColor.addEventListener('click', changeColorDays);

function changeColorDays(event) {
  if (event.target.className == 'task') {
    event.target.className = 'task selected';
  } else {
    event.target.className = 'task';
  }
}

let buttonAdd = document.querySelector('#btn-add');
buttonAdd.addEventListener('click', addCompromisse);

function addCompromisse() {
  let input = document.querySelector('#task-input');
  if (input.value.length > 0) {
    let element = document.createElement('li');
    element.innerHTML = input.value;
    document.querySelector('.task-list').appendChild(element);
  } else {
    alert('ERRO! O campo está vazio');
  }
}

function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

dayMouseOver();
dayMouseOut();

function setColorTaskDays() {
  let days = document.querySelector('#days');
  days.addEventListener('click', function (event) {
    
    let colorSelected = document.getElementsByClassName('task selected');
    if (colorSelected.length > 0 && colorSelected[0].style.backgroundColor !== event.target.style.color) {
      event.target.style.color = colorSelected[0].style.backgroundColor;
    } else {
      event.target.style.color = 'rgb(119,119,119)';
    }
  })

}

setColorTaskDays();