import {A} from "./components/A";
import {createContext} from "react";


const Context = createContext(null)
const  App = () => {
  return (
    <div className="App">
        <Context.Provider value={'hello'}>
            <A/>
        </Context.Provider>


    </div>
  );
};

export {App, Context};
