import React from "react"
import { Container, Row, Col, Jumbotron } from "reactstrap"

export default function About(){
	return(
		<Container>
			<Row>
				<Col>
					<Jumbotron>
				        <h1 className="display-3">React Project!</h1>
				        <p className="lead">Learning React Hooks.</p>
				        <hr className="my-2" />
				        <p>I am in loving with React.</p>
				      </Jumbotron>
				</Col>
			</Row>
		</Container>
	)
}

