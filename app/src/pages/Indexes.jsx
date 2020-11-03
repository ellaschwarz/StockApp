import React, { useContext, useState, useEffect } from 'react';

import { ApiContext } from '../context/api-context';

import ListItem from '../components/ListItem';
import TableHead from '../components/TableHead';

export default function Indexes(props) {
	const { data } = useContext(ApiContext);

	const [indexData, setIndexData] = useState([]);

	useEffect(() => {
		setIndexData(data.indexes);
	}, []);

	let keys = Object.keys(data);
	let title = keys[2];

	return (
		<>
			<div>
				<h1 className='heading2'>{title.toUpperCase()}</h1>
				<table className='table table-striped table-dark table-hover'>
					<TableHead />
					{indexData.se &&
						Object.entries(indexData.se)
							.reverse()
							.map((indexes, index) => {
								return (
									<ListItem
										key={index}
										id={indexes[0]}
										title={title}
										data={indexes[1]}
									/>
								);
							})}
				</table>
			</div>
		</>
	);
}
