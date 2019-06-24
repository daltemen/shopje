import React, {Component} from 'react';
import SalesTable from "./SalesTable";
import NewSales from "./NewSales";

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
                    <NewSales shopId={shopId}/>
                </div>
                <br/>
                <div className="AppCenter">
                    <SalesTable shopId={shopId}/>
                </div>
            </div>
        );
    };
}

export default Sales;
