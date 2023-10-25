import React from 'react';
import {useForm} from "react-hook-form";

const Users = () => {
    let {register,
        handleSubmit,
        watch} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch('https://jsonplaceholder.typicode.com/comments', {
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
                <label> Email:
                    <input {...register('email')}/></label>
                <br/>
                <label> Body:
                    <textarea{...register('body')} className={'inputBody'} ></textarea>
                </label>
                <br/>
                <button>Save Comment</button>
            </form>

        </div>
    );
};

export default Users;