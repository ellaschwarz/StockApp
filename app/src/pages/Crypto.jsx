import React, {useContext, useState, useEffect} from 'react'
import {ApiContext} from '../context/api-context';
import ListItem from '../components/ListItem'


export default function Crypto(props) {
    const {data} = useContext(ApiContext);
    
    const [cryptoData, setCryptoData] = useState([])

    useEffect(() => {
        setCryptoData(data.crypto)
    }, [])

    console.log(cryptoData.usd)
    console.log(Object.keys(data))

    let keys = Object.keys(data)
    let title = keys[0];
    console.log(title);

    return (
        
        <>
        <div>
        {cryptoData.usd && Object.entries(cryptoData.usd).reverse().map((crypto, index) => {
            return (
                <>
                <ListItem 
                key={crypto[0]}
                id={crypto[0]}
                title={title}
                name={crypto[1].name}
                price={crypto[1].price}
                />
                </>
                )
        })}
        </div>
        </>
    )
}
