import React from 'react';

import css from './Header.module.css'
import {NavLink, useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={css.Header}>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/comments">Comments</NavLink>
            </div>

            <button onClick={()=>navigate(-1)}>Prev Page</button>
            <button onClick={()=>navigate(1)}>Next Page</button>
        </div>
    );
};

export {Header};