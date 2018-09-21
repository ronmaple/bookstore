import React, { Component } from 'react'

import { Grid } from 'react-bootstrap';
import './Main.css';
import ProductCell from './ProductCell';

export default class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [{}]
        }
    }

    async componentDidMount() {
        try {
            const res = await fetch('/api');
            const data = await res.json();
            await this.setState(data);
        } catch(e) {
            if (e) console.error(e);
        }
    }
    
    // when async data from componentDidMount() is not yet loaded, prevents DOM errors by unmounting the component
    componentWillUnmount() {
        this.setState({
            data: [{}]
        })
    }

    render(props) {

        return (
            <Grid id="grid-override">
                {
                    this.state.data.map(item => {

                        /*
                            Similar to the need of componentWillUnmount
                            item.product.price or any nested objects will be called
                            during componentDidMount (pre-rendering), and return
                            an error, crashing the app
                        */

                        let price = "price";
                        let key = 0;

                        if (!(Object.keys(item).length === 0 && item.constructor === Object)) {
                            console.log("item.product.price", item.product.price);
                            price = item.product.price;
                            key = item.id;
                            console.log('key in', key);
                            console.log('item in', item.id)
                        }

                        return (
                            <ProductCell 
                                id={key}
                                image={item.image}
                                name={item.name}
                                desc={price}
                            /> 
                        );
                    })
                }
                
            </Grid>
        )
    }
}


/*
    Previous render return:

            // <Grid bsClass="grid">
            //     <Row>
            //         {
            //             this.state.data.map((product) => {
            //                 return <ProductCard name={product.name} image={product.image} />
            //             })
            //         }

            //         {/* <ProductCard 
            //         /> */
            //     </Row>
            // </Grid>