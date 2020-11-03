import React, { useContext, useState, useEffect } from 'react';
import { ApiContext } from '../context/api-context';
import { Switch, Route, Link } from 'react-router-dom';
import SingleMarket from '../components/SingleMarket';

export default function Markets(props) {
	const { data } = useContext(ApiContext);

	const [marketData, setMarketData] = useState([]);

	useEffect(() => {
		setMarketData(data.markets);
	}, []);

	console.log(marketData.se);
	console.log(Object.keys(data));

	let keys = Object.keys(data);
	let title = keys[3];
	console.log(title);

	//Map alla markets
	//Lägg det sedan i links

	return (
		<>
			<h1>{title}</h1>
			{marketData &&
				Object.entries(marketData)
					.reverse()
					.map((markets, index) => {
						return (
							<div className='container'>
								<div className='row'>
									<div
										className='card shadow-lg p-3 mb-5 rounded'
										style={{ width: '18rem', backgroundColor: '#020A27' }}
									>
										<div className='card-body'>

												<Link className='text-white stretched-link'
												key={markets[0]} to={`/markets/${markets[0]}`}>{markets[0]}</Link>
										
										</div>
									</div>
								</div>
							</div>
						);
					})}
		</>
	);
}
