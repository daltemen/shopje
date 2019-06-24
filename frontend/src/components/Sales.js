import React, {Component} from 'react';
import ProductsTable from './ProductsTable';

class Sales extends Component {
    shopId;
    render() {
        const shopId = this.props.shopId;
        console.log(shopId);
        return (
            <div>
                <h2 className="AppCenter">Sales</h2>
                <p>{shopId}</p>
                <div className="AppCenter">
                    <ProductsTable shopId={shopId}/>
                </div>
            </div>
        );
    };
}

export default Sales;
