import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button'
import Menu from './components/Menu/Menu'
import Titulo from './components/Textos/Titulo';
import Box from './components/Box/Box';
import CartWidget from './components/CartWidget/CartWidget';


function App() {
  return (
    <div className="App"
      style={{ backgroundColor: "white", minHeight: "100vh" }}
    >
      <Menu><CartWidget></CartWidget></Menu>
      <Box><Titulo label="Funko World"></Titulo></Box>
      
      
    </div>
  );
}

export default App;
