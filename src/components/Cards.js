import React, { Component } from "react";
import { Card} from "react-bootstrap";
import { ButtonStyles } from "../styles/getDataStyles";

export default class Cards extends Component {
    render() {
        const { image, title, description, price, categoria} = this.props.card

        return (
            <div>
                <Card border="secondary" style={{ width: '200px', padding:'3px', backgroundColor:'white', margin:'10px',
                                    borderRadius:'8px' }}>
                    <figure >
                    <Card.Img variant="top" src={image} style={{width:'100%', borderRadius:'10px'}} />
                    </figure>
                    <Card.Body style={{textAlign:'center'}}>
                        <Card.Header style={{textAlign:'center'}}>{title}</Card.Header>
                        <Card.Text style={{fontSize:'0.7rem',textAlign:'center'}}>
                        {description}
                        </Card.Text>
                        <h3 style={{textAlign:'center'}}>price : {price}</h3>
                        <p>{categoria}</p>
                        <ButtonStyles>Buy</ButtonStyles>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}