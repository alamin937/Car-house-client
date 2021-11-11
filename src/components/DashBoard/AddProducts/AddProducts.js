import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit,reset } = useForm();
    const [succesfull, setSuccessfull] = useState(false)
  const onSubmit = data => {

    fetch('https://aqueous-meadow-61451.herokuapp.com/cars', {
      method:'post',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        setSuccessfull(true)
        reset({})
      }
    })
  };
    return (
        <div>
          <h1>Add a New Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Product Name" style={{marginTop:'10px',width:'30%',padding:'7px'}} {...register("name")} /> <br />
      <input placeholder="Price"  style={{marginTop:'20px',width:'30%',padding:'7px'}} {...register("price")} /> <br />
      <textarea placeholder="Description"  style={{marginTop:'20px',width:'30%',padding:'7px', height:'80px'}}  {...register("description")} /> <br />
      <input placeholder='Image Url'  style={{marginTop:'20px',width:'30%',padding:'7px'}} {...register("img")} /> <br />
      <input  style={{marginTop:'20px',width:'30%',padding:'7px'}} type="submit" />
    </form>
    {succesfull && <Alert severity="success">Successfully Added Product</Alert>}
        </div>
    );
};

export default AddProducts;