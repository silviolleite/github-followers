import React from "react"
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';


export default function Paginate(props){	
	if (props.link === ''){
		return ''
	}
	let data = props.link.split(',')
	let pages = data.map((item) => {
		let links = item.split(';');
		let re = /[<,>]/gi; 
		let link = links[0].replace(re, '');
		re = /rel=|"/gi
		let rel = links[1].replace(re, '');	
		return (
			<PaginationItem>
				<PaginationLink href={link}>{rel}</PaginationLink>
			</PaginationItem>                      
		)
	});
	return (
		<Row>
		<Col>			
			<Pagination aria-label="Page navigation example">
				{pages}
			</Pagination>
		</Col>
		</Row>
		)
}
