import React from "react";
import { Container, Row } from 'reactstrap';


export default function Followers(props){
        return (
        	<Container>
	            <Row>
	                {props.followers}	                
	            </Row>	            
            </Container>
        )
}