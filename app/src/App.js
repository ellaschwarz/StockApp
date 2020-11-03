import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Markets from './pages/Markets';
import Indexes from './pages/Indexes';
import Currencies from './pages/Currencies';
import Crypto from './pages/Crypto';
import CryptoDetail from './pages/detail/CryptoDetail';
import IndexDetail from './pages/detail/IndexDetail';
import CurrencyDetail from './pages/detail/CurrencyDetail';
import SingleMarket from './components/SingleMarket';
import MarketDetail from './pages/detail/MarketDetail';

import { ApiContext } from './context/api-context';

function App() {
	const [data, setData] = useState(null);

	const handleFetchData = () => {
		if (data) {
			return console.log('Data is already set');
		}
		fetch('https://market-data-collector.firebaseio.com/market-collector.json')
			.then(res => res.json())
			.then(res => {
				setData(res);
				console.log(res);
			});
	};

	useEffect(() => {
		handleFetchData();
	}, []);

	return (
		<>
			<div className='container'>
				<div className='content-wrap'>
					<div
						className='py-160 text-center shadow-lg p-3 mb-5 rounded'
						style={{ backgroundColor: '#020A27' }}
					>
						<div className='container shape-parent'>
							<div className='row justify-content-conter mb-100'>
								<div className='col-12 col-lg-8 col-xl-6'>
									<h1 className='display-4 mb-20 text-white show-on-scroll show-on-scroll-ready'>
										<Link className='text-white' to='/'>
											Stockly
										</Link>
									</h1>
								</div>
							</div>
						</div>
					</div>
				</div>

				<></>
				<Switch>
					{data && (
						<ApiContext.Provider value={{ data }}>
							<Route exact path='/' component={Home}></Route>

							<Route exact path='/markets' component={Markets}></Route>
							<Route exact path='/indexes' component={Indexes}></Route>
							<Route exact path='/currencies' component={Currencies}></Route>
							<Route exact path='/crypto' component={Crypto}></Route>

							<Route exact path='/crypto/:id' component={CryptoDetail}></Route>
							<Route
								exact
								path='/currencies/:id'
								component={CurrencyDetail}
							></Route>
							<Route exact path='/indexes/:id' component={IndexDetail}></Route>

							<Route
								exact
								path='/markets/:page'
								component={SingleMarket}
							></Route>
							<Route
								exact
								path='/markets/:page/:id'
								component={MarketDetail}
							></Route>
						</ApiContext.Provider>
					)}
				</Switch>
			</div>
		</>
	);
}

export default App;
