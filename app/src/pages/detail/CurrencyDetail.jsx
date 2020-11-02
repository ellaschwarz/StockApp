import React, {useContext, useState, useEffect} from 'react'
import {ApiContext} from '../../context/api-context';
import ItemDetail from '../../components/ItemDetail';


export default function CurrencyDetail(props) {
    const {data} = useContext(ApiContext);
    const [detailData, setDetailData] = useState(null)
    console.log(data)

    const id = props.match.params.id;

    useEffect(() => {
        setDetailData(data.currencies.sek[id])
    }, [])

    return (
            detailData && <ItemDetail data={detailData}/>
    )
}