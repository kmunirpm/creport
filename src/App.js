import logo from './logo.svg';
import './App.css';
import {SelectInput, TextInput} from './pages/Inputs';
import Nav from './common/Nav';

function App() {
  return (
    <div className="container">
      <Nav />
      <header className="App-header">
        <TextInput />
        <SelectInput />
      </header>
    </div>
  );
}

export default App;
