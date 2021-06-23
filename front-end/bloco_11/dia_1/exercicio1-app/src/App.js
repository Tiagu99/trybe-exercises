import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Retirar o Lixo', 'Lavar a louça', 'Cozinhar', 'Limpar a casa'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {tasks.map((task) => Task(task))}
      </header>
    </div>
  );
}

export default App;
