import React, {useContext, useState, useEffect} from 'react'
import {ApiContext} from '../context/api-context';
import ListItem from './ListItem'

export default function SingleMarkets(props) {
    const {data} = useContext(ApiContext);
    const page = props.match.params.page;
    
    const [marketData, setMarketData] = useState([])

    useEffect(() => {
        setMarketData(data.markets[page])
        console.log('heeeeej')
    }, [])

    return (
        
        <>
        <div>
        {marketData && Object.entries(marketData).reverse().map((market, index) => {
            return (
                <ListItem 
                key={index}
                id={market[0]}
                title={page}
                name={market[1].name}
                price={market[1].price}
                />
                )
        })}
        </div>
        </>
    )
}
