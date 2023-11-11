import React from 'react';
import {carService} from "../../services/carService";

const Car = ({car, setCarForUpdate, trigger}) => {
    const {id, brand, price, year} = car;

    const del = async ()=>{
        await carService.deleteById(id)
        trigger()
    }

    return (
        <div>
            <div>ID:{id}</div>
            <div>Brand:{brand}</div>
            <div>Price:{price}</div>
            <div>Year:{year}</div>
            <button onClick={()=>setCarForUpdate(car)}>Update</button>
            <button onClick={del} >Delete</button>
        </div>
    );
};

export {Car};