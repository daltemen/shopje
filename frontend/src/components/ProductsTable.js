import React, {Component} from 'react';
import MaterialTable from 'material-table';

const API = 'http://localhost:5000/api/v1/products';

class MaterialTableDemo extends Component {
    products;

    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {title: 'Id', field: 'id'},
                {title: 'Name', field: 'name'},
                {title: 'Price', field: 'price'},
                {title: 'Quantity', field: 'quantity'},
            ],
            dataTable: [],
        };
    }

    componentDidMount() {
        this.getProducts(this.props.shopId);
    }

    getProducts(shopId) {
        fetch(API + /shop/ + shopId)
            .then(response => response.json())
            .then(data => this.setState({dataTable: data.products}));
    }

    addProduct(newProduct) {
        newProduct.shop_id = this.props.shopId;
        fetch(`${API}/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(response => response.json())
            .then(data => console.log(data));
    }

    updateProduct(newProduct) {
        newProduct.shop_id = this.props.shopId;
        fetch(`${API}/${newProduct.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(response => response.json())
            .then(data => console.log(data));
    }

    deleteProduct(oldData) {
        fetch(`${API}/${oldData.id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => console.log(data));
    }

    render() {
        return (
            <MaterialTable
                title="Products List"
                columns={this.state.columns}
                data={this.state.dataTable}
                editable={{
                    onRowAdd: newData =>
                        new Promise(resolve => {
                            resolve();
                            this.addProduct(newData);
                            const dataTable = [...this.state.dataTable];
                            dataTable.push(newData);
                            this.setState({...this.state, dataTable})
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise(resolve => {
                            resolve();
                            this.updateProduct(newData);
                            const dataTable = [...this.state.dataTable];
                            dataTable[dataTable.indexOf(oldData)] = newData;
                            this.setState({...this.state, dataTable});
                        }),
                    onRowDelete: oldData =>
                        new Promise(resolve => {
                            resolve();
                            this.deleteProduct(oldData);
                            const dataTable = [...this.state.dataTable];
                            dataTable.splice(dataTable.indexOf(oldData), 1);
                            this.setState({...this.state, dataTable});
                        }),
                }}
            />
        );
    };

}

export default MaterialTableDemo;