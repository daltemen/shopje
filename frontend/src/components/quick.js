import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from "@material-ui/core/MenuItem";
import Select from '@material-ui/core/Select';

let products = [];

const API_PRODUCTS = 'http://localhost:5000/api/v1/products';
const API_SALES = 'http://localhost:5000/api/v1/sales/';


class NewSales extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            client: '',
            phone: 3,
            price: 0,
            products: [],
            quantity: 0,
        };
        this.getProducts(this.props.shopId);

    }

    getProducts = shopId => {
        console.log(products.length > 0);
        if (products.length === 0) {
            fetch(API_PRODUCTS + /shop/ + shopId)
                .then(response => response.json())
                .then(data => {
                    data.products.forEach((product) => {
                        products.push({value: product.id, label: product.name});
                    });
                });
        }
    };

    handleClickOpen = () => {
        this.setState({
            open: true
        })
    };

    handleClose = () => {
        this.setState({
            open: false
        })
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submit = () => {
        console.log(this.state);
        this.setState({
            open: false
        })
    };

    render () {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    New Sale
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Sales Form</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please fill out.
                        </DialogContentText>
                        <Select
                            autoFocus
                            value=""
                            // onChange={handleChange}
                            inputProps={{
                                name: 'age',
                                id: 'age-simple',
                            }}
                            fullWidth
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        {/*<TextField*/}
                        {/*    autoFocus*/}
                        {/*    name="products"*/}
                        {/*    select*/}
                        {/*    label="Select"*/}
                        {/*    fullWidth*/}
                        {/*    onChange={e => this.change(e)}*/}
                        {/*    helperText="Please select your currency"*/}
                        {/*    margin="dense"*/}
                        {/*    SelectProps={{*/}
                        {/*        MenuProps: {*/}
                        {/*            className: "Menu",*/}
                        {/*        },*/}
                        {/*    }}*/}
                        {/*>*/}
                        {/*    {products.map(option => (*/}
                        {/*        <MenuItem key={option.value} value={option.value}>*/}
                        {/*            {option.label}*/}
                        {/*        </MenuItem>*/}
                        {/*    ))}*/}
                        {/*</TextField>*/}

                        {/*<TextField*/}
                        {/*    autoFocus*/}
                        {/*    margin="dense"*/}
                        {/*    name="client"*/}
                        {/*    label="Client"*/}
                        {/*    onChange={e => this.change(e)}*/}
                        {/*    fullWidth*/}
                        {/*/>*/}
                        {/*<TextField*/}
                        {/*    autoFocus*/}
                        {/*    margin="dense"*/}
                        {/*    name="phone"*/}
                        {/*    label="Phone"*/}
                        {/*    fullWidth*/}
                        {/*    onChange={e => this.change(e)}*/}
                        {/*    type="number"*/}
                        {/*/>*/}
                        {/*<TextField*/}
                        {/*    autoFocus*/}
                        {/*    margin="dense"*/}
                        {/*    name="price"*/}
                        {/*    label="Price"*/}
                        {/*    fullWidth*/}
                        {/*    onChange={e => this.change(e)}*/}
                        {/*    type="number"*/}
                        {/*/>*/}

                        {/*<TextField*/}
                        {/*    autoFocus*/}
                        {/*    margin="dense"*/}
                        {/*    name="quantity"*/}
                        {/*    label="Quantity"*/}
                        {/*    fullWidth*/}
                        {/*    onChange={e => this.change(e)}*/}
                        {/*    type="number"*/}
                        {/*/>*/}

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.submit} color="primary">
                            Subscribe
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    };

}
export default NewSales;