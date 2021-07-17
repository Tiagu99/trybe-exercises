import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      dogImage: '',
      loading: true,
    };

    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
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
    const { dogImage, loading } = this.state;
    const load = <h4>loading...</h4>;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Dog Images</h1>
          { loading
            ? load
            : <img className="dog-image" src={ dogImage } alt="dog" />}
          <button type="button" onClick={ this.fetchDog }> Buscar outro</button>
        </header>
      </div>
    );
  }
}

export default App;
