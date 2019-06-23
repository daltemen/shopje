import React, {Component} from 'react';
import NavBar from './NavBar';

class Products extends Component {
    render() {
        const { params } = this.props.match;
        console.log(params);
        return (
            <div>
                <NavBar/>
                <h1>Products</h1>
                <p>{params.shopId}</p>
            </div>
        );
    };
}

export default Products;
