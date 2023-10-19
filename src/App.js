import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {

  //hook useState
  // const [users, setUsers] = useState([])

  //hook useEffect один раз вивод
 // useEffect(()=>{
 //   fetch('https://jsonplaceholder.typicode.com/users')
 //       .then(value => value.json())
 //       .then(value => {
 //         setUsers(value);
 // }, [])

      // })
  let [counter, setCounter] = useState(0)
  const onClickIncrement = () => {
      counter++;
      setCounter(counter)
  }
  const onClickDecrement = () =>{
      counter--;
      setCounter(counter)
  }
  return (
    <div className="App">

        <h1>counter: {counter} </h1>
        <button onClick={onClickIncrement}>+</button>
        <button onClick={onClickDecrement}>-</button>

        {/*// users.map(value => <div key={value.id}>{value.name} </div>)*/}


    </div>
  );
}

export default App;
