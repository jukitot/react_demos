import {A} from "./components/A";
import {useAppContext} from "./hooks/useAppContext";



const  App = () => {
    const value = useAppContext();
  return (
    <div className="App">

            <A/>



    </div>
  );
};

export {App};

// import React from 'react';
// import {MyComponent} from "./components/MyComponent";
//
// const App = () => {
//     return (
//         <div>
//             <MyComponent>
//                 <h1>Hello</h1>
//             </MyComponent>
//         </div>
//     );
// };
//
// export {App};
