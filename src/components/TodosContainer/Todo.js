import React from 'react';


const Todo = ({todo}) => {
    const {userId, id, title, completed} = todo;

    // const navigate = useNavigate();
    return (
        <div>
            <div>User ID: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Completed: {completed ? 'YES' : 'NO'} </div>
            {/*<button onClick={()=>navigate('posts', {state: id, replace: true})}>Get Posts</button>*/}
            <br/>
        </div>

    );
};

export {Todo};