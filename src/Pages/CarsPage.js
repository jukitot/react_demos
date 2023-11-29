import React from 'react';
import {Cars} from "../Components";
import {CarForm} from "../Components/CarsContainer/CarForm";

const CarsPage = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarsPage};