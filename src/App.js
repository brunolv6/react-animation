import logo from './logo.svg';
import BlocoColorido from './BlocoColorido';
import Animacao from './Animacao'
import './App.css';

const divApp = {
  backgroundColor: 'red',
  margin: '0',
  padding: '0',
  minHeight: '0',
  display: 'block'
};

function App() {
  return (
    <div className="App" style={divApp}>
      <header className="App-header" style={divApp}>
        <BlocoColorido name="scrolls antes do scroll animado"/>
        <Animacao/>
        <BlocoColorido name="scrolls depois do scroll animado"/>
      </header>
    </div>
  );
}

export default App;
