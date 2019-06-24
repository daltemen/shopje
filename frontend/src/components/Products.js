import React, {Component} from 'react';
import ProductsTable from './ProductsTable';

class Products extends Component {
    render() {
        const shopId = this.props.shopId;
        return (
            <div>
                <h2 className="AppCenter">Products</h2>
                <p>{shopId}</p>
                <div className="AppCenter">
                    <ProductsTable shopId={shopId}/>
                </div>
            </div>
        );
    };
}

export default Products;
