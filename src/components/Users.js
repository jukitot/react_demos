import React from 'react';
import {useForm} from "react-hook-form";

const Users = () => {
    let {register,
        handleSubmit,
        watch,
        formState:{errors}} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
    console.log(watch('title'));
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label> Name:
                <input {...register('name', {required: true})}/></label>
                <br/>
                <label> Username:
                <input {...register('username')}/></label>
                <br/>
                <label> Email:
                <input {...register('email')}/>
                </label>
                <br/>
                <button>Save User</button>
            </form>

        </div>
    );
};

export default Users;