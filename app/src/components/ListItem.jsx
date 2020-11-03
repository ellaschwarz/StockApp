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
  <tbody>
    <tr>
      <td>{props.data.ticker}</td>
      <td>{props.data.name}</td>
      <td>{props.data.price}</td>
      <td>{props.data.today}</td>
      <td><Link to={`${props.title}/${props.id}`}>Go to item</Link></td>
    </tr>
  </tbody>

</>
    )
}


{/* <h1>{props.name}</h1>
<p>{props.price}</p>
<Link to={`${props.title}/${props.id}`}>Go to item</Link> */}
