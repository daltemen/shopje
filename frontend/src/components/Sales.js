import React, {Component} from 'react';
import NavBar from './NavBar';

class Sales extends Component {
    shopId;
    render() {
        const { params } = this.props.match;
        console.log(params);
        return (
            <div>
                <NavBar/>
                <h1>Sales</h1>
                <p>{params.shopId}</p>
            </div>
        );
    };
}

export default Sales;
