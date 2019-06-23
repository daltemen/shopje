import React, {Component} from 'react';
import NavBar from './NavBar';
import Products from './Products';
import Sales from './Sales';
import "../css/Base.css"

class DashBoard extends Component {
    render() {
        const { params } = this.props.match;
        console.log(params);
        return (
            <div>
                <NavBar/>
                <h1 className="AppCenter">Dashboard</h1>
                <div className="AppCenter">
                </div>
                <Products className="AppCenter" shopId={params.shopId}/>
                <Sales className="AppCenter" shopId={params.shopId}/>
            </div>
        );
    };
}

export default DashBoard;
