import React, {Component} from 'react';
import NavBar from './NavBar';

class DashBoard extends Component {



    render() {
        const { params } = this.props.match;
        console.log(params);
        return (
            <div>
                <NavBar/>
                <h1>Dashboard</h1>
                <p>{params.shopId}</p>
            </div>
        );
    };
}

export default DashBoard;
