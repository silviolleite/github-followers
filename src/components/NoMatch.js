import React from "react"
import { Container, Row, Col, Jumbotron } from "reactstrap"

export default function NoMatch(props){
	return(
		<Container>
			<Row>
				<Col>
				        <h1 className="display-3">404!</h1>
				        <p className="lead">Page not found</p>
				</Col>
			</Row>
		</Container>
	)
}

