import React, { Component } from 'react'
import { Thumbnail, Button, Col, Glyphicon, Row } from 'react-bootstrap';
import thumbnail from './thumbnail.png';

import './Main.css';

export default class ProductCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // thumbnail = this.props.thumbnail || thumbnail;
        let image = this.props.image || thumbnail;
        return (
            <div>
                <Col xs={6} md={3} bsClass="productCard-custom">
                    <Thumbnail 
                        bsClass="thumbnail-custom" 
                        href="#"
                        alt="171x180" 
                        src={image} 
                    />
                    <h3>{this.props.name || "Product Name"}</h3>
                    <p>{this.props.desc || "Description"}</p>

                    <Button bsStyle="default">Add to cart <Glyphicon glyph="shopping-cart"/></Button>
                    <Thumbnail 
                        bsClass="thumbnail-custom" 
                        href="#"
                        alt="171x180" 
                        src={image} 
                    />
                    <h3>{this.props.name || "Product Name"}</h3>
                    <p>{this.props.desc || "Description"}</p>

                    <Button bsStyle="default">Add to cart <Glyphicon glyph="shopping-cart"/></Button>
                </Col>
            </div>
    
        )
    }
}
