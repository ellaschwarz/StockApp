import React from 'react';
import { Link } from 'react-router-dom';

const arrow = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>

export default function ListItem(props) {
	return (
		<>
			<tbody>
				<tr>
					<td>{props.data.ticker}</td>
					<td>{props.data.name}</td>
					<td>{props.data.price}</td>
					<td>{props.data.today}</td>
					<td>
						<Link to={`${props.title}/${props.id}`}>{arrow}</Link>
					</td>
				</tr>
			</tbody>
		</>
	);
}
