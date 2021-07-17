import React from 'react';

const states = ['São Paulo', 'Minas Gerais', 'Goiás', 'Mato Grosso', 'Rio Grande do Sul', 'Pernambuco'];

class PersonalInformation extends React.Component{
  render() {
    return(
      <fieldset className='personal-data'>
        <legend>Dados Pessoais</legend>
          <label>
            Nome:
            <input type='text' name='nome' maxLength='40' required />
          </label>

          <label>
            Email:
            <input type='text' name='email' maxLength='50' required />
          </label>

          <label>
            CPF:
            <input type='text' name='cpf' maxLength='11' required />
          </label>

          <label>
            Endereço:
            <input type='text' name='address' maxLength='200' required />
          </label>

          <label>
            Cidade:
            <input type='text' name='city' maxLength='28' required />
          </label>

          <label>
            Estados:
            <select name='state' required>
              <option value="">Selecione</option>
              {
                states.map((value, key) => (
                  <option key={ key }>{ value }</option>
                ))
              }

            </select>
          </label>

          <label htmlFor="house">
            <input
              type="radio"
              id="house"
              name="addressType"
              value="house"
             />
             Casa
           </label>
          <label htmlFor="apart">
            <input
              type="radio"
              id="apart"
              name="addressType"
              value="apartment"
             />
             Apartamento
           </label>
        </fieldset>
    )
  }
}

export default PersonalInformation;