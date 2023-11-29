import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../Services";

const CarForm = () => {
    const {register, reset, handleSubmit} = useForm();
    const save = async (car)=>{
        await carService.create(car)
        // reset()
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'}{...register('brand')}/>
            <input type="text" placeholder={'price'}{...register('price')}/>
            <input type="text" placeholder={'year'}{...register('year')}/>
            <button>Save</button>
        </form>
    );
};

export {CarForm};