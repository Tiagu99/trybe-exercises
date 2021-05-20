function createOptionStates() {
  const states = [{state: 'Acre', id: 'ac'}, {state: 'Alagoas', id: 'al'}, {state: 'Amapá', id: 'ap'}, {state: 'Amazonas', id: 'am'}, {state: 'Bahia', id: 'ba'}, {state: 'Ceará', id: 'ce'}, {state: 'Distrito Federal', id: 'df'}, {state: 'Espírito Santo', id: 'es'}, {state: 'Goiás', id: 'go'}, {state: 'Maranhão', id: 'ma'}, {state: 'Mato Grosso', id: 'mt'}, {state: 'Mato Grosso do Sul', id: 'ms'}, {state: 'Minas Gerais', id: 'mg'}, {state: 'Pará', id: 'pa'}, {state: 'Paraíba', id: 'pb'}, {state: 'Paraná', id: 'pr'}, {state: 'Pernambuco', id: 'pe'}, {state: 'Piauí', id: 'pi'}, {state: 'Rio de Janeiro', id: 'rj'}, {state: 'Rio Grande do Norte', id: 'rn'}, {state: 'Rio Grande do Sul', id: 'rs'}, {state: 'Rondônia', id: 'ro'}, {state: 'Roraima', id: 'rr'}, {state: 'Santa Catarina', id: 'sc'}, {state: 'São Paulo', id: 'sp'}, {state: 'Sergipe', id: 'se'}, {state: 'Tocantins', id: 'to'}];
  for (let index in states) {
    let stateOption = document.createElement('option');
    stateOption.innerHTML = states[index].state;
    stateOption.value = states[index].id;
    document.querySelector('#select-state').appendChild(stateOption);
  }
}

createOptionStates();

function inputNull(label) {
  alert(`O campo ${label.innerText} deve ser preenchido!`);
}

function validInput() {
  
}

let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function() {
  event.preventDefault();

})
