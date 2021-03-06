import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import base_url from "../api/base_url";
import Memes from "./Memes";

toast.configure();
const AllMemes=()=>{


    useEffect(()=>{
        document.title="All Memes";
        getAllMemes();
        window.scrollTo(0, 0)
    },[])

    const[memes,setMemes]=useState([
    ])
    

    const getAllMemes=()=>{
        axios.get(`${base_url}/memes`).then(
            (response)=>{
                response.data.slice(0,1);
                toast.success("Memes loaded..Enjoy!!");
                console.log(response);
                setMemes(response.data);
            },
            (error)=>{
                toast.error("Error fetching response, Please sit back we are looking into it :)");
                console.log(error);
            }
        )
    }

    
    <ToastContainer/>
    return(

        <div className="text-center" style={{"margin-top":"147px"}}>
            
            <h1 style={{color:"green"}}> These are the Memes for you!</h1>
            <br>
            </br>
            {
                memes.length>0? memes.slice(0,100).map((item)=>
                    <Memes key = {item.id} meme={item} />):"Memes Loading..."
            }
        </div>
    )
}
export default AllMemes;