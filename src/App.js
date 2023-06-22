import './App.css';
import Header from './layout/Header';
import GuessForm from './components/GuessForm';
import backgroundImage from './assets/images/jhin.jpeg'

function App() {
  return (
    <div className="bg-cover bg-center App min-h-screen" 
        style={{ backgroundImage: `url(${backgroundImage})`
                
        }}>
      <Header />
      <GuessForm/>
      
    </div>
  );
}

export default App;
