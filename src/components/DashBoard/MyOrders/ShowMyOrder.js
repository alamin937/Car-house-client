import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Button } from '@mui/material';


const ShowMyOrder = (props) => {
    const {userName, email, phone, address, productName} = props.order

    const handleDelete = () =>{
        fetch(``, {
          method:'DELETE'
        })
        .then();
    }




    return (
      <TableRow
      
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell align="right" component="th" scope="row">
        {userName}
      </TableCell>
      <TableCell align="right">{email}</TableCell>
      <TableCell align="right">{phone}</TableCell>
      <TableCell align="right">{address}</TableCell>
      <TableCell align="right">{productName}</TableCell>
      <TableCell align="right"> <Button onClick={() => handleDelete(email)}>Cancel</Button> </TableCell>
    </TableRow>
    );
};

export default ShowMyOrder;