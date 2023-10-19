import React from 'react';
import SimpsonComponent from "./SimpsonComponent";
import './Simpsons.module.css'

const SimpsonsComponent = () => {
    const simpsons = [
        {
            id: 1,
            name: 'Homer',
            img: 'https://images.immediate.co.uk/production/volatile/sites/3/2018/08/Simpsons_SO28_Gallery_11-fb0b632.jpg?quality=90&resize=800,534'
        },
        {
            id: 2,
            name: 'Marge',
            img: 'https://cache.marieclaire.fr/data/photo/w700_c17/138/margeeee.jpg'
        },
        {
            id: 3,
            name: 'Lisa',
            img: 'https://www.simpsonspark.com/images/persos/contributions/lisa-simpson-23916.jpg'
        },
        {
            id: 4,
            name: 'Bart',
            img: 'https://www.simpsonspark.com/images/persos/contributions/bart-simpson-23210.jpg'
        },
        {
            id: 5,
            name: 'Maggie',
            img: 'https://www.lessimpson.fr/wp-content/uploads/maggie-simpson.webp'
        }
    ]
    return (
        <div>
            {
            simpsons.map(simpson => <SimpsonComponent key={simpson.id} simpson={simpson}/>)
            }
        </div>
    );
};

export default SimpsonsComponent;