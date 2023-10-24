import React from 'react';

const UserComponent = ({item, choseUser}) => {
    return (
        <div>
            {item.id}. {item.name}
            <br/>
            <button onClick={()=>{
                choseUser(item);
            }}>Details</button>
            <hr/>
            
        </div>
    );
};

export default UserComponent;