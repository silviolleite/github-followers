import React from "react"
import { Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';


export default function Paginate(props){	
	if (props.link === ''){
		return '';
	}

	function paginate(e){
		props.paginateSearch(e.target.value)
	}

	let data = props.link.split(',');
	let pages = data.map((item, index) => {
		let links = item.split(';');
		let re = /[>]|.+\?/gi;
		let link = '?' + links[0].replace(re, '');
		re = /\srel=|"/gi;
		let rel = links[1].replace(re, '');
		if (rel !== 'first' && rel !== 'last') {
			return (
				<PaginationItem key={index}>
					<PaginationLink onClick={paginate} value={link}>{rel}</PaginationLink>
				</PaginationItem>
			)
		}
		return undefined;
	});
	return (
		<Row>
			<Col md={12}>
				<Pagination aria-label="Page navigation example">
					{pages}
				</Pagination>
			</Col>
			<Col md={12}>
				<p>Page: {props.number}</p>
			</Col>
		</Row>
		)
}
