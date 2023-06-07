
import './App.css';
import Header from './layout/Header';
import Carro from './components/carro';

function App() {
  return (
    <div className="App">
      <Header />
      <Carro fator={10}/>
    </div>
  );
}

export default App;
