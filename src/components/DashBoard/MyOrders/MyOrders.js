import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UseAuth from '../../../UseHooks/UseAuth';
import { Button } from '@mui/material';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const {user} = UseAuth();

    useEffect(() =>{
        const url = `http://localhost:5000/placeorder?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[user.email])


    const handleDelete = id =>{
        const url = `http://localhost:5000/placeorder?email=${id}`
        fetch(url , {
            method:'DELETE'
        })
        .then()
    }
  




    return (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Product Area</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Product</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.userName}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.productName}</TableCell>
              <TableCell align="right"> <Button onClick={() => handleDelete(user._id)}>Remove</Button> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default MyOrders;