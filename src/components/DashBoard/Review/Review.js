import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const [succesfull, setSuccessful] = useState(false)
    const onSubmit = data => {
        fetch('http://localhost:5000/review', {
            method:'post',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                setSuccessful(true)
                reset({ })
            }
        })
    };
    return (
        <div>
            <h1>Review</h1>
            <hr />
             <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Subject' style={{width:'30%', marginBottom:'20px',padding:'10px'}} {...register("Subject")} /> <br />
                <textarea placeholder='Write Something' style={{width:'30%', height:'150px'}} {...register("review")} /> <br />
    
                <input style={{width:'30%',color:'white', padding:'8px', border:'0', backgroundColor:'blue', borderRadius:'5px'}} type="submit" />
             </form>
             {succesfull && <Alert severity="success">Review Add Successfully</Alert>}
        </div>
    );
};

export default Review;