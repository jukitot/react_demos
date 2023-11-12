import React from 'react';


const Album = ({album}) => {
    const {userId, id, title} = album;

    // const navigate = useNavigate();
    return (
        <div>
            <div>User ID: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>

            {/*<button onClick={()=>navigate('posts', {state: id, replace: true})}>Get Posts</button>*/}
            <br/>
        </div>

    );
};

export {Album};