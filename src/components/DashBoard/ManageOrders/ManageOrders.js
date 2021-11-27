import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container,Button } from '@mui/material';

const ManageOrders = () => {
    const [orders, setOrders] = useState([])


    const handleDelete = id =>{
       const procced = window.confirm('Are You Sure You Want To Delete')
       if(procced){
        const url = `https://stark-woodland-28823.herokuapp.com/placeorder/${id}`
        fetch(url, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                alert('Deleted Succesfully')
                const remaining = orders.filter(order => order._id !== id)
                setOrders(remaining)
            }
        })
       }
    }

    useEffect(() =>{
        fetch('https://stark-woodland-28823.herokuapp.com/placeorder')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    return (

       <Container>
            <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{backgroundColor:'blue'}}>
            <TableRow >
              <TableCell style={{color:'white'}} align="right">Name</TableCell>
              <TableCell style={{color:'white'}} align="right">Email</TableCell>
              <TableCell style={{color:'white'}} align="right">Phone</TableCell>
              <TableCell style={{color:'white'}} align="right">Address</TableCell>
              <TableCell style={{color:'white'}} align="right">Product</TableCell>
              <TableCell style={{color:'white'}} align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row) => (
              <TableRow
                key={row.userName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right" component="th" scope="row">
                  {row.userName}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.productName}</TableCell>
                <TableCell align="right"> <Button onClick={() => handleDelete(row._id)}>Remove</Button> </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
       </Container>
    );
};

export default ManageOrders;