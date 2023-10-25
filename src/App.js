import logo from './logo.svg';
import './App.css';
import {createRef} from "react";

function App() {
    let login = createRef();
    let password = createRef();
    function onSubmit(e){
        console.log(login.current.value);
        console.log(password.current.value);
        e.preventDefault();
    }
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
          <input type="text" name={'login'} ref={login}/>
          <input type="text" name={'password'} ref={password}/>
          <button>Log in</button>
      </form>

    </div>
  );
}

export default App;
