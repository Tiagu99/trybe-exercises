import React from 'react';

class Connections extends React.Component {
  constructor() {
    super();

    this.state = {
      user: '',
      list: [],
      counter: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.removeContact = this.removeContact.bind(this);
    this.contactAdder = this.contactAdder.bind(this)
  }

  shouldComponentUpdate(_nextProps, { list: length }) {
    const maxContactsNumber = 3;

    return length <= maxContactsNumber
  }

  componentDidUpdate(_prevProps, prevState) {
    const { list } = this.state;
    if (prevState.list.length < list.length) {
      document.querySelector('.gitNetwork')
        .style.backgroundColor = 'lightblue';
    } else if (prevState.list.length > list.length) {
      document.querySelector('.gitNetwork')
        .style.backgroundColor = 'lightcoral';
    }
  }

  handleChange({ target: { value } }) {
    this.setState({
      user: value,
    });
  }

  async handleClick() {
    const { user, list, counter } = this.state;
    const url = `https://api.github.com/users/${user}`;
    const isUserAbsent = !list.some((contact) => contact.login === user);

    if (isUserAbsent) {
      try {
        const apiResponse = await fetch(url)
        const profileObject = await apiResponse.json()
        this.setState({
          list: [...list, profile],
          counter: counter + 1
        })
      } catch (error) {
        console.log(error);
      }
    }
  }

  removeContact(loginToRemove) {
    const { list, counter } = this.state;
    const updatedList = list.filter(({ login }) => login !== loginToRemove);

    this.setState({
      list: updatedList,
      counter: counter - 1,
    });
  }

  contactAdder(counter) {
    return (
      <div className="git-connections">
        <div className="counter">
          <h5>Quantidade de contatos:</h5>
          <span>{ counter }</span>
        </div>
        <div className="form">
          <form className="input-group justify-content-center">
            <input
              className="form-control"
              type="text"
              onChange={ this.handleChange }
              placeholder="Adicione seu contato famoso"
            />
            <button
              className="btn btn-outline-dark"
              type="button"
              onClick={ this.handleClick }
            >
              Adicionar
            </button>
          </form>
        </div>
      </div>
    )
  }

  contactList(list) {
    return (
        <div className="card-list d-flex flex-row justify-content-around">
          { list.map(({ name, avatarUrl, login}) => (
            <div className="card d-flex align-items-center" key={ name }>
              <h5>{ name }</h5>
              <img className="c-img" src={ avatarUrl } alt="Avatar" width="50%" />
              <button
                className="c-button btn btn-danger w-25 align-self-center"
                data-login={ login }
                type="button"
                onClick={() => this.removeContact(login) }
              >
                X
              </button>
            </div>))}
        </div>
      )
  }

  render() {
    const { list, counter } = this.state;

    return (
      <div>
        {this.contactAdder(counter)}
        {this.contactList(list)}
      </div>
    );
  }
}

export default Connections;
