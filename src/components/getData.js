import React, { Component } from 'react'
import { Container} from 'react-bootstrap';
import { ButtonStyles, TitleStyle } from '../styles/getDataStyles';
import Cards from "./Cards";



export default class GetData extends Component {
    constructor(){
        super()
        this.state ={
            clothes:[]
        }
    }
    componentDidMount(){
        this.getClothes()
    }
    getClothes = async () =>{
        const url ='https://apiclothies.herokuapp.com/clothes'
        const resp = await fetch(url)
        const data = await resp.json()
        const {results} = data 
        //destructurando
        console.log(data)
        console.log(results)

        this.setState({
            clothes : data
        })
    }
    render() {
        console.log(this.state.clothes);
        return(
            <Container style={{backgroundColor:'hsl(209deg 100% 71%)'}}>
                <TitleStyle>THE BEST CLOTHES</TitleStyle>
                <form>            
                    <ButtonStyles>Men</ButtonStyles>
                    <ButtonStyles>Women</ButtonStyles>
                    <ButtonStyles>Electronics</ButtonStyles>
                    <ButtonStyles>Jewelery</ButtonStyles>
                </form>    
                <div style={{ display:'flex',
                flexDirection:'row', flexWrap: 'wrap'}}>
                    {
                        this.state.clothes.map((items,index) =>(
                            <Cards card = {items} key={index}
                            />
                        ))
                    }
                </div>
            </Container>
        )
        
  }
}