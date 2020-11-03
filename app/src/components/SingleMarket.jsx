import React, {useContext, useState, useEffect} from 'react'
import {ApiContext} from '../context/api-context';
import ListItem from './ListItem'
import TableHead from '../components/TableHead';

export default function SingleMarkets(props) {
    const {data} = useContext(ApiContext);
    const page = props.match.params.page;
    
    const [marketData, setMarketData] = useState([])

    useEffect(() => {
        setMarketData(data.markets[page])
    }, [])

    return (
        
        <>
        <div>
            <h1>MARKETS</h1>
        <table className="table table-striped table-dark">
        <TableHead />
        {marketData && Object.entries(marketData).reverse().map((market, index) => {
            return (
                <ListItem 
                key={index}
                id={market[0]}
                title={page}
                data={market[1]}
                />
                )
        })}
        </table>
        </div>
        </>
    )
}
