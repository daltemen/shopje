import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
}));

let products = [];

const API_PRODUCTS = 'http://localhost:5000/api/v1/products';
const API_SALES = 'http://localhost:5000/api/v1/sales/';


export default function FormDialog({shopId}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [values, setValues] = React.useState({
        client: '',
        phone: '',
        price: '',
        products: [],
        quantity: '',
    });

    const getProducts = shopId => {
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

    getProducts(shopId);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const change = e => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const submit = () => {
        console.log(values);
        console.log(shopId);

        const request = {
            client : values.client,
            phone : values.phone,
            price : values.price,
            products : [{id: values.products, quantity: parseInt(values.quantity)}],
            shop_id: shopId,
        };

        fetch(API_SALES, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
            .then(response => response.json())
            .then(() => alert("successful"));

    };


    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                New Sales
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Sale</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill out.
                    </DialogContentText>
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            name="client"
                            label="Client"
                            className={classes.textField}
                            value={values.client}
                            onChange={e => change(e)}
                            margin="normal"
                        />
                        <TextField
                            name="phone"
                            label="Phone"
                            className={classes.textField}
                            value={values.phone}
                            onChange={e => change(e)}
                            type="number"
                            margin="normal"
                        />
                        <TextField
                            name="price"
                            label="Price"
                            className={classes.textField}
                            value={values.price}
                            onChange={e => change(e)}
                            margin="normal"
                            type="number"
                        />
                        <TextField
                            select
                            name="products"
                            label="Products"
                            className={classes.textField}
                            value={values.products}
                            onChange={e => change(e)}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                            helperText="Please select your currency"
                            margin="normal"
                        >
                            {products.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            name="quantity"
                            label="Quantity"
                            className={classes.textField}
                            value={values.quantity}
                            onChange={e => change(e)}
                            margin="normal"
                            type="number"
                        />
                    </form>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={submit} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}