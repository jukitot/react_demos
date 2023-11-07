import React, {useEffect, useState} from 'react';
import axios from "axios";

import css from './Users.module.css'
import {User} from "../User/User";
import {axiosService} from "../../../services/axiosService";
import {userServise} from "../../../services/userServise";
import {UserDetails} from "../UserDetails/UserDetails";


const Users = () => {

    const click = async (userId)=>{
        const {data} =  await userServise.getById(userId);
        setUserDetails(data);
    }

    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState(null)
    useEffect(()=>{
        // fetch('https://jsonplaceholder.typicode.com/users')
        //
        //     .then(res=> res.json())
        //     .then(value => setUsers(value))

        //     axiosService.get('/users')
        //         .then(({data})=>setUsers(data))

        userServise.getAll().then(({data})=>setUsers(data))

    })
    return (
        <div>
        <div className={css.Users}>
            {
                users.map(user=><User key={user.id} user={user} click={click}/>)
            }
        </div>
            {
                userDetails && <UserDetails userDetails={userDetails}/>
            }
        </div>
    );
};

export {Users};