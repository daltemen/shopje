import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import "../css/Base.css"

const API = 'http://localhost:5000/api/v1/shops';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

class ShopsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shops: [],
        };
    }

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ shops: data.shops }));
    }

    render() {
        const { shops } = this.state;
        return (
            <div>
                <h1 className="AppCenter">Shop Management</h1>
                <div className="AppCenter">
                    <List component="nav" aria-label="Main mailbox folders">
                        {shops.map(shop =>
                            <ListItemLink href={`/dashboard/${shop.id}`}>
                                <ListItemText primary={shop.name} />
                            </ListItemLink>
                        )}
                    </List>
                </div>
            </div>
        );
    }

}
export default ShopsList;