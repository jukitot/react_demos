import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/carService";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator";

const CarForm = ({trigger, carForUpdate, setCarForUpdate}) => {
    const {register, reset, handleSubmit, formState:{isValid, errors},
    setValue} = useForm({mode:'all',  resolver: joiResolver(carValidator)});
    const save = async (car)=>{
        console.log(car);
        await carService.create(car);
       trigger()
        reset()
    }

    const update = async (car)=>{
        await carService.updateById(carForUpdate.id, car)
        trigger()
        setCarForUpdate(null)
        reset()
    }

    useEffect(()=>{
        if(carForUpdate){
            setValue('brand', carForUpdate.brand, {shouldValidate:true})
            setValue('price', carForUpdate.price,{shouldValidate:true})
            setValue('year', carForUpdate.year,{shouldValidate:true})
        }
    },[carForUpdate, setValue])
    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <input type="text" placeholder={'Brand'}{...register('brand')}/>
                <input type="text" placeholder={'Price'}{...register('price', {valueAsNumber:true})}/>
                <input type="text" placeholder={'Year'}{...register('year',{valueAsNumber:true})}/>
                <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Save'}</button>

            </form>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}

            
        </div>
    );
};

export {CarForm};