import {configureStore} from "@reduxjs/toolkit";
import {counter1Reducer} from "./slices/counterSlice";

const store = configureStore({
    reducer:{
        counter1: counter1Reducer
    }

});

export {store}