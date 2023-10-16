import logo from './logo.svg';
import './App.css';
import FirstComponent from "./components/first-component/FirstComponent";

function App() {
  return (
    <div className="App">
      <FirstComponent txt={'Bart'} image={'https://www.simpsonspark.com/images/persos/contributions/bart-simpson-23210.jpg'}/>
      <FirstComponent txt={'Homer'} image={'https://i.discogs.com/J4bH_-A4UcQHFSUBDyyqXbTzr7XWM8S0NfNoYgwXAiI/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE0MDAz/MTctMTMzNTcxNzQ3/Ni5wbmc.jpeg'}/>



    </div>
  );
}

export default App;
