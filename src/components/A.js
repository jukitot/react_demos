import React, {useContext} from 'react';
import {B} from "./B";
import {Context} from "../App";

const A = () => {

    return (
        <div>
            <div>A: </div>
            <B/>
        </div>
    );
};

export {A};