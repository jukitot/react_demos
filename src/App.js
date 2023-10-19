import logo from './logo.svg';
import './App.css';
import SimpsonsComponent from "./components/Simpsons/SimpsonsComponent";
import Characters from "./components/Characters/Characters";

function App() {
  return (
    <div className="App">
      <SimpsonsComponent/>
        <Characters/>

    </div>
  );
}

export default App;
