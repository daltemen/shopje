import React, {Component} from 'react';
import ProductsTable from './ProductsTable';

class Products extends Component {
    render() {
        const { shopId } = this.props.shopId;
        console.log(shopId);
        return (
            <div>
                <h2 className="AppCenter">Products</h2>
                <p>{shopId}</p>
                <div className="AppCenter">
                    <ProductsTable/>
                </div>
            </div>
        );
    };
}

export default Products;
