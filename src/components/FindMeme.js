import React,{useState, useEffect} from "react";
import { Fragment } from "react"
import { Form,FormGroup,Input,Container,Button } from "reactstrap"
import axios from "axios";
import base_url from "../api/base_url"
import Memes from "./Memes"
import ReactDOM from 'react-dom';
import { toast } from "react-toastify";

toast.configure();
const FindMeme=()=>{

     
    const[id,setId]=useState({});

    useEffect(()=>{
        console.log("find meme");
        document.title="Find Meme";
        
    },[])
    const handleForm = (e) =>{
        console.log(id.id);
        console.log("here is the meme");
        e.preventDefault();
        
        FindMeme(id)
    }
    
    const FindMeme=(id)=>{
        console.log("id iaadfds s "+ id.id);
        console.log(`${base_url}/memes/`+id.id);
        var otherTemp;
        axios.get(`${base_url}/memes/`+id.id).then(
            (response)=>{
                toast.success("Here is your meme!")
                console.log(response.data);
                otherTemp = <div style={{"margin-top":"5%"}}> <Memes key={id.id} meme={response.data}/> </div>;
                console.log(otherTemp);
                ReactDOM.render(otherTemp, document.getElementById('FormResult'))

            },(error)=>{
                console.log(error);
                toast.error("No Meme exist with this ID :(")
            }
        )
        //otherTemp = <div><p>Hello</p></div>;
    }

    return (
        <div>
        <div>
        <Fragment>
        <h1  className="text-center" style={{"margin-top":"18%"}}> Want to find the meme?</h1>
        <Form>
            <FormGroup >
                <label style= { {fontWeight: 'bold'}} for = "id">ID</label>
                <Input 
                    type="text" 
                    placeholder="Enter the ID" 
                    id="id" 
                    name = "id"
                    onChange ={(e)=>{
                        setId({...id,id:e.target.value})
                    }}
                    />
            </FormGroup>
            <Container className="text-center">
                <Button type = "submit" color="success" onClick={handleForm} >Find Meme</Button>
                <Button type="reset" color="warning" className="ml-2"  >Clear</Button>
            </Container>
        </Form>
    </Fragment>
    </div>
    <div id = "FormResult">

        </div>
    </div>)
}

export default FindMeme;