import React, {useContext, useState, useEffect} from 'react'
import {ApiContext} from '../../context/api-context';
import ItemDetail from '../../components/ItemDetail';


export default function CryptoDetail(props) {
    const {data} = useContext(ApiContext);
    const [detailData, setDetailData] = useState(null)
    console.log(data)

    const id = props.match.params.id;

    useEffect(() => {
        setDetailData(data.crypto.usd[id])
    }, [])

    return (
            detailData && <ItemDetail data={detailData}/>
    )
}