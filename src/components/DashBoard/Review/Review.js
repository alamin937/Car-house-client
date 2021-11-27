import { Alert, Button } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const [increase, setIncrease] = useState(0)
    const [succesfull, setSuccessful] = useState(false)


    const handleincrease = () =>{
       if(increase < 5){
        setIncrease(parseInt(increase+1))
       }
    }









    const onSubmit = data => {
        console.log(data)
        fetch('https://stark-woodland-28823.herokuapp.com/review', {
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
                <br />
                <textarea placeholder='Write Something' style={{width:'30%', height:'150px'}} {...register("review_sec")} /> <br />
                <input style={{width:'30%',color:'white', padding:'8px', border:'0', backgroundColor:'blue', borderRadius:'5px'}} type="submit" />
             </form>
             <Button onClick={handleincrease}>Increase</Button> <br />
             {succesfull && <Alert severity="success">Review Add Successfully</Alert>}
        </div>
    );
};

export default Review;