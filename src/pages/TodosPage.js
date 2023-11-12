import React from 'react';
import {Todos} from "../components/TodosContainer/Todos";
import {Outlet} from "react-router-dom";

const TodosPage = () => {
    return (
        <div>
            <Todos/>
            <Outlet/>
        </div>
    );
};

export {TodosPage};