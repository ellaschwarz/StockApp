import React, {useContext, useState, useEffect} from 'react'
import {ApiContext} from '../../context/api-context';
import ItemDetail from '../../components/ItemDetail';


export default function MarketDetail(props) {
    const {data} = useContext(ApiContext);
    const [detailData, setDetailData] = useState(null)

    const page = props.match.params.page;
    const id = props.match.params.id;

    useEffect(() => {
        setDetailData(data.markets[page][id])
    }, [])

    console.log(detailData)

   return (
           detailData && <ItemDetail data={detailData}/>
   )
}