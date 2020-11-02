import React, {useContext, useState, useEffect} from 'react'
import {ApiContext} from '../context/api-context';
import ListItem from '../components/ListItem'

export default function Indexes(props) {
    const {data} = useContext(ApiContext);
    
    const [indexData, setIndexData] = useState([])

    useEffect(() => {
        setIndexData(data.indexes)
    }, [])

    console.log(indexData.se)
    console.log(Object.keys(data))

    let keys = Object.keys(data)
    let title = keys[2];
    console.log(title);

    return (
        
        <>
        <div>
        {indexData.se && Object.entries(indexData.se).reverse().map((indexes, index) => {
            return (
                <ListItem 
                key={index}
                id={indexes[0]}
                title={title}
                name={indexes[1].name}
                price={indexes[1].price}
                />
                )
        })}
        </div>
        </>
    )
}
