import React,{useEffect,useState} from "react"
import { Fragment } from "react"
import { Form,FormGroup,Input,Container,Button } from "reactstrap"
import axios from "axios";
import base_url from "../api/base_url";
import {toast,ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const AddMemes=()=>{

    const [meme,setMemes] =  useState({});
    useEffect(()=>{
        toast("Add your memes here");
        document.title="Add Memes";
        
    },[])

    const handleForm = (e) =>{
        console.log("here is the meme for saving");
        console.log(meme);
        e.preventDefault();
        addMeme(meme);
    }
    const addMeme=(data)=>{
        axios.post(`${base_url}/memes`,data).then(
            (response)=>{
                console.log(`${data}`)
                console.log(response);
                toast("posted successfully");
            },
            (error)=>{
                console.log(error);
                toast.error("Error occured");
            }
        )
    }
    <ToastContainer />
    return <Fragment>
        <h1 className="text-center my-3"> Want to Post your Meme?</h1>
        <Form onSubmit={handleForm}>
            <FormGroup >
                <label for = "name" className="mx-3">Name</label>
                <Input 
                    type="text" 
                    placeholder="Enter your Name here" 
                    id="name" 
                    name = "name"
                    onChange ={(e)=>{
                        setMemes({...meme,name:e.target.value})
                    }}
                    />
            </FormGroup>
            <FormGroup>
                <label className="mx-3">Enter Caption</label>
                <Input 
                type="text" 
                placeholder="Enter your caption here" 
                id="caption" 
                name = "caption"
                onChange ={(e)=>{
                    setMemes({...meme,caption:e.target.value})
                }}
                />
            </FormGroup>
            <FormGroup>
                <label className="mx-3">Url of your meme</label>
                <Input 
                type="url" 
                placeholder="Enter url of meme here" 
                id="imageaddress" 
                name = "imageaddress"
                onChange ={(e)=>{
                    setMemes({...meme,imageaddress:e.target.value})
                }} 
                />
            </FormGroup>
            <Container className="text-center">
                <Button type = "submit" color="success">Add Meme</Button>
                <Button color="warning" className="ml-2">Clear</Button>
            </Container>
        </Form>
    </Fragment>
    
}

export default AddMemes;