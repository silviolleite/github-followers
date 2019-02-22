import React from "react";
import { Container, Row, Col } from 'reactstrap';


export default function Followers(props){

        return (
        	<Container>
	            <Row>
	                {props.followers}	                
	            </Row>	            
            </Container>
        )
}