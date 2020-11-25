import React from 'react';
import Graph from '../images/graph.png';
import lineChart from '../images/lineChart.png';

export default function ItemDetail(props) {
	return (
		<div className='container'>
            <h1 className='heading2'>{props.data.name}</h1>

			<div className='row d-flex justify-content-center'>
				<img style={{ width: '25rem' }} src={Graph} alt='Graph' />
				<img style={{ width: '25rem' }} src={lineChart} alt='Linechart' />
			</div>

			<div className='row d-flex shadow-lg justify-content-center p-5 m-auto rounded box'>
				<table className='table table-borderless'>
					<tbody>
						<tr>
							<td>Price</td>
							<td>{props.data.price}</td>
						</tr>
						<tr>
							<td>Today</td>
							<td>{props.data.today}</td>
						</tr>
						<tr>
							<td>Ticker</td>
							<td>{props.data.ticker}</td>
						</tr>
					</tbody>
				</table>

				<table className='table table-borderless'>
					<tbody>
						<tr>
							<td>OMNI Ticker</td>
							<td>{props.data.omni_ticker}</td>
						</tr>
						<tr>
							<td>Source</td>
							<td>{props.data.source}</td>
						</tr>
						<tr>
							<td>Link</td>
							<td>{props.data.link}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
