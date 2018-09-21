import React, { Component } from 'react'

import { Row, Col, Glyphicon, Button } from 'react-bootstrap';
import "./Main.css";


let randomImage = "https://404store.com/2017/12/08/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg";


export default class ProductCell extends Component {
    constructor(props) {
        super(props);
        console.log('props in constructor', props)
        this.state = {
            quantity: 0,
            id: 0,
            shoppingCart: [{}]
        }
        this.addClick = this.addClick.bind(this);
        this.minusClick= this.minusClick.bind(this)
        this.saveToShoppingCart = this.saveToShoppingCart.bind(this);

    }

    componentDidMount() {

    }

    saveToShoppingCart() {
        console.log('saveToShoppingCart props.id', this.props.id);
        console.log('saveToShoppingCart state.quantity', this.state.quantity);

        if (this.state.quantity > 0) {
            console.log('if state.quantity > 0 invoked');
            let itemQuantity = this.state.quantity;
            let itemID = this.props.id;

            console.log('itemQuantity, after: ', itemQuantity);
            console.log('itemID, after: ', itemID);

            let newShoppingCartItem = {
                itemID,
                itemQuantity
            }

            console.log('newShoppingCarItem, after:', newShoppingCartItem);
            /*
                no need to push, it creates an empty object
                let cartCopy = this.state.shoppingCart;
                cartCopy.push(newShoppingCartItem);
            */

            /*
            
                this.setState({}, () => {}) accepts a callback,
                fetch is invoked in callback as there is a time
                delay 

            */
            this.setState({
                quantity: 0,
                shoppingCart: newShoppingCartItem
            }, () => {
                fetch('/saveCart', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.state.shoppingCart)
                })
            })
            
        }
    }

    addClick(e) {
        let increased = this.state.quantity + 1;
        this.setState({
            quantity: increased
        })

        console.log('addClick() state.quantity:', this.state.quantity);
    }

    minusClick(e) {
        let decreased = 0;
        if (this.state.quantity === 0) {
            return;
        }
        else {
            decreased = this.state.quantity - 1;
        }
        this.setState({
            quantity: decreased
        })
    }


  render(props) {
    let key = this.props.id;
    console.log('this.props.key in product cell', this.props.id)
    let imageID = `item-image-${this.props.key}`
    let rowID = `row-override-${this.props.key}`
    let colImgID = `col-img-override-${this.props.key}`
    let colDetID = `col-details-override-${this.props.key}`
    let containerID = `col-container-custom-${this.props.key}`

    return (
        <Row id={rowID}>
            <Col xs={6} md={4} id={colImgID}>
                <img id={imageID} src={this.props.image}/>
            </Col>

            <Col xs={12} md={8} id={colDetID}>

                <div id={containerID} >
                    <h3>{this.props.name}</h3>
                    <p>${this.props.desc}</p>

                    <br />

                    <div className="quantity-box">
                        <p>Quantity</p>
                        <span>
                            <button className="button-quantity plus" onClick={this.addClick}>+</button>
                        </span>
                        <span>&#32;&#32;&#32;&#32;{this.state.quantity}&#32;&#32;&#32;&#32;</span>
                        <span>
                            <button className="button-quantity minus"onClick={this.minusClick}>-</button>
                        </span>
                    </div>
                </div>

                <Button 
                    bsStyle="primary" 
                    bsSize="medium" 
                    onClick={this.saveToShoppingCart} 
                    active>
                    Add to Cart <Glyphicon glyph="shopping-cart" />
                </Button>

            </Col>
        </Row>
    )
  }
}
