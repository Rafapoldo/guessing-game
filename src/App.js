import logo from './logo.svg';
import './App.css';
import Header from './layout/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Rafa teste
        </p>
        <div className="bg-green-500 text-white p-4">
          <h1 className="text-2xl">Meu aplicativo com Tailwind CSS</h1>
          <p className="mt-4">Bem-vindo ao meu aplicativo estilizado com Tailwind CSS!</p>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
