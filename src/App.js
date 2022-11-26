import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button'
import Menu from './components/Menu/Menu'
import Titulo from './components/Textos/Titulo';

function App() {
  return (
    <div className="App"
      style={{ backgroundColor: "white", minHeight: "100vh" }}
    >
      <Menu></Menu>
      <Titulo></Titulo>
      
    </div>
  );
}

export default App;
