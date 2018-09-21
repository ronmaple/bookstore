import React, { Component } from 'react'
import './Cart.css';
export default class CartMain extends Component {
    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        // fetch data from /saveCart to show shopping cart
    }

    componentWillMount() {
        // setstate empty data to prevent async problems
    }
    render() {
        return (
        <div className="cart-main">
            <div className="cart-headers">
                <h3> Your Cart </h3>
            </div>
        </div>
        )
    }
}
