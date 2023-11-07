import {useEffect, useRef, useState} from "react";

function App() {
    const [user, setUser] = useState([]);
    const [count, setCount] = useState(0)
  //   const name = useRef();
  //   const age = useRef();
  const save=(e)=>{
  //   e.preventDefault();
  //     console.log(name.current.value);
  //     console.log(age.current.value);
  //     e.target.reset();
  }
    console.log(user);

    const handler = (e) =>{
      e.preventDefault()
      setUser(prevState => ({...prevState, [e.target.name]:e.target.value}))

  }

  return (
      // <form onSubmit={save}>
      //   <input type="text" placeholder={'name'} name={'name'} onChange={handler}/>
      //   <input type="text" placeholder={'age'} name={'age'} onChange={handler}/>
      //   <button>Save</button>
      // </form>
      <div>
          <div>Count: {count}</div>
          <button onClick={()=>setCount(prev=>prev+1)}>Inc</button>
      </div>
  );
}

export default App;
