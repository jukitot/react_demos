import React, {useEffect, useState} from 'react';
import Cars from "./Cars";
import CarForm from "./CarForm";
import {carService} from "../services/carService";

const CarsContainer = () => {
    const [cars, setCars] = useState([]);
    const [flag, setFlag] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState(null)

    const trigger = () => {
        setFlag(prev => !prev)
    }

    useEffect(() =>{
        carService.getAll().then(({data}) => setCars(data))
    }, [flag])
    return (
        <div>
            <CarForm trigger={trigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} trigger={trigger}/>

        </div>
    );
};

export default CarsContainer;