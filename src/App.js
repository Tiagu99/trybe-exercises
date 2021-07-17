import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      dogImage: '',
      loading: true,
      name: '',
    };

    this.fetchDog = this.fetchDog.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setDogLocalStorage = this.setDogLocalStorage.bind(this);
    this.getDog = this.getDog.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('dogImage')) {
      this.getDog();
    } else this.fetchDog();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    return !(nextState.dogImage.includes('terrier'));
  }

  

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  setDogLocalStorage() {
    localStorage.setItem('dogImage', JSON.stringify(this.state));
  }

  getDog() {
    const { dogImage, loading, name } = JSON.parse(localStorage.getItem('dogImage'));
    this.setState({
      dogImage,
      loading,
      name,
    });
  }

  fetchDog() {
    this.setState({
      loading: true,
    }, () => {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((dog) => this.setState({
          dogImage: dog.message,
          loading: false,
        }));
    });
  }

  render() {
    const { dogImage, loading, name } = this.state;
    const load = <h4>loading...</h4>;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Dog Images</h1>
          { loading
            ? load
            : <img className="dog-image" src={ dogImage } alt="dog" />}
          <button type="button" onClick={ this.fetchDog }> Buscar outro</button>
          <input name="name" value={ name } onChange={ this.handleChange } />
          <button type="button" onClick={ this.setDogLocalStorage }>Salvar Dog</button>
        </header>
      </div>
    );
  }
}

export default App;
