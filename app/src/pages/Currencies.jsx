import React, {useContext, useState, useEffect} from 'react'
import {ApiContext} from '../context/api-context';
import ListItem from '../components/ListItem'

export default function Currencies(props) {
    const {data} = useContext(ApiContext);
    
    const [curencyData, setCurrencyData] = useState([])

    useEffect(() => {
        setCurrencyData(data.currencies)
    }, [])

    console.log(curencyData.sek)
    console.log(Object.keys(data))

    let keys = Object.keys(data)
    let title = keys[1];
    console.log(title);

    return (
        
        <>
        <div>
        {curencyData.sek && Object.entries(curencyData.sek).reverse().map((currency, index) => {
            return (
                <ListItem 
                key={index}
                id={currency[0]}
                title={title}
                name={currency[1].name}
                price={currency[1].price}
                />
                )
        })}
        </div>
        </>
    )
}
