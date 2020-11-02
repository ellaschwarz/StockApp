import React from 'react'

export default function ItemDetail(props) {
    return (
        <div>
            {/* <h1>{props.data}</h1> */}
            <h1>{props.data.name}</h1>
            <p>{props.data.price}</p>
        </div>
    )
}
