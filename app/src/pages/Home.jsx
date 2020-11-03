import React from 'react';

import {Link} from 'react-router-dom';


import marketImg from '../images/markets.jpg'
import cryptoImg from '../images/crypto.jpg'
import indexImg from '../images/index.jpg'
import currencyImg from '../images/currency.jpg'

export default function Home() {
	return (
		<div id='menu' className='container'>
            <div className='row d-flex justify-content-around'>
			<div
				className='card shadow-lg p-3 mb-5 rounded'
				style={{ width: '18rem', backgroundColor: '#020A27' }}
			>
				<img src={marketImg} className='card-img-top' alt='Market' />
				<div className='card-body'>
					<Link
						className='text-white stretched-link'
						href='#market'
						to='/markets'
					>
						Markets
					</Link>
				</div>
			</div>

			<div
				className='card shadow-lg p-3 mb-5 rounded'
				style={{ width: '18rem', backgroundColor: '#020A27' }}
			>
				<img src={indexImg} className='card-img-top' alt='Market' />
				<div className='card-body'>
					<Link className='text-white stretched-link' to='/indexes'>
						Indexes
					</Link>{' '}
				</div>
			</div>

			<div
				className='card shadow-lg p-3 mb-5 rounded'
				style={{ width: '18rem', backgroundColor: '#020A27' }}
			>
				<img src={currencyImg} className='card-img-top' alt='Market' />
				<div className='card-body'>
					<Link className='text-white stretched-link' to='/currencies'>
						Currencies
					</Link>
				</div>
			</div>

			<div
				className='card shadow-lg p-3 mb-5 rounded'
				style={{ width: '18rem', backgroundColor: '#020A27' }}
			>
				<img src={cryptoImg} className='card-img-top' alt='Market' />
				<div className='card-body'>
					<Link className='text-white stretched-link' to='/crypto'>
						Crypto
					</Link>{' '}
				</div>
			</div>
		</div>
        </div>
	);
}
