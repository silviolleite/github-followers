import React, { useState, useEffect } from "react"
import { Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';


export default function Paginate(props){
	if (props.link === ''){
		return '';
	}
	function setIcon(rel) {
		switch (rel) {
			case 'next':
				return (<i class="fas fa-chevron-right"></i>);
			case 'prev':
				return (<i class="fas fa-chevron-left"></i>);
			case 'first':
				return (<i class="fas fa-step-backward "></i>);
			case 'last':
				return (<i class="fas fa-step-forward"></i>);
			default:
				return '';
		}
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
					<PaginationLink onClick={paginate} value={link}>{setIcon(rel)}</PaginationLink>
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


