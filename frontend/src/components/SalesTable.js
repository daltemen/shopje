import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const API = 'http://localhost:5000/api/v1/sales';

class SalesTable extends Component {
    sales;
    constructor(props) {
        super(props);
        this.state = {
            rows : [
            ]
        }
    }

    componentDidMount() {
        this.getSales(this.props.shopId);
    }

    getSales(shopId) {
        fetch(API + /shop/ + shopId)
            .then(response => response.json())
            .then(data => this.setState({rows: data.sales}));
    }

    render() {
        return (
            <Paper>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell align="right">Client</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.client}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default SalesTable;