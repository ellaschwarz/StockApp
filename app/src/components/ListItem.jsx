import React from 'react'
import {Link} from 'react-router-dom';

// import markets from '../pages/detail/Market';
// import currencies from '../pages/detail/Currency';
// import indexes from '../pages/detail/Crypto';
// import crypto from '../pages/detail/Index';
import {ApiContext} from '../context/api-context';


export default function ListItem(props) {
    return (
<>
            <h1>{props.title}</h1>
            <h1>{props.name}</h1>
            <p>{props.price}</p>
            <Link to={`${props.title}/${props.id}`}>Go to item</Link>
</>
    )
}



