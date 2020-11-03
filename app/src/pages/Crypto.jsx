import React, {useContext, useState, useEffect} from 'react'
import {ApiContext} from '../context/api-context';
import ListItem from '../components/ListItem'
import TableHead from '../components/TableHead';


export default function Crypto(props) {
    const {data} = useContext(ApiContext);
    
    const [cryptoData, setCryptoData] = useState([])

    useEffect(() => {
        setCryptoData(data.crypto)
    }, [])

    let keys = Object.keys(data)
    let title = keys[0];

    return (
        
        <>
        <div>
        <h1>{title.toUpperCase()}</h1>
        <table className="table table-striped table-dark table-hover">
        <TableHead />
        {cryptoData.usd && Object.entries(cryptoData.usd).reverse().map((crypto, index) => {
            return (
                
                <ListItem 
                key={crypto[0]}
                id={crypto[0]}
                title={title}
                data={crypto[1]}
                />
                
                )
        })}
        </table>
        </div>
        </>
    )
}
