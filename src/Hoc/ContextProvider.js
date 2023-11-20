import React, {createContext, useState} from 'react';

const Context = createContext(null)
const ContextProvider = ({children}) => {
   const state =  useState({isAuth: false, me: null});
    return (
       <ContextProvider value={state}>
           {children} lk
       </ContextProvider>
    );
};

export {ContextProvider, Context};