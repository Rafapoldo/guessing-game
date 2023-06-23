import './App.css';
import Header from './layout/Header';
import backgroundImage from './assets/images/jhin.jpeg'
import Game from "./components/Game";

function App() {
  return (
    <div className="bg-cover bg-center App min-h-screen"
        style={{ backgroundImage: `url(${backgroundImage})`

        }}>
      <Header />
      <Game/>

    </div>
  );
}

export default App;
