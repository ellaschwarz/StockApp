import React, {useContext, useState, useEffect} from 'react'
import {ApiContext} from '../context/api-context';
import ListItem from '../components/ListItem'
import TableHead from '../components/TableHead';

export default function Currencies(props) {
    const {data} = useContext(ApiContext);
    
    const [curencyData, setCurrencyData] = useState([])

    useEffect(() => {
        setCurrencyData(data.currencies)
    }, [])

    let keys = Object.keys(data)
    let title = keys[1];


    return (
        
        <>
        <div>
        <h1>{title.toUpperCase()}</h1>
        <table className="table table-striped table-dark table-hover">
        <TableHead />
        {curencyData.sek && Object.entries(curencyData.sek).reverse().map((currency, index) => {
            return (
                <ListItem 
                key={index}
                id={currency[0]}
                title={title}
                data={currency[1]}

                />
                )
        })}
        </table>
        </div>
        </>
    )
}
