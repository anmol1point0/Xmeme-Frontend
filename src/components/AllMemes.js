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
        toast("These are all memes for you!!");
        getAllMemes();
    },[])

    const[memes,setMemes]=useState([
    ])
    

    const getAllMemes=()=>{
        axios.get(`${base_url}/memes`).then(
            (response)=>{
                //toast.success("course loaded");
                console.log(response);
                setMemes(response.data);
            },
            (error)=>{
                //toast.error("Error fetching response");
                console.log(error);
            }
        )
    }

    
    <ToastContainer/>
    return(
        <div>
            <h1> These are the Memes for you!</h1>
            {
                memes.length>0? memes.map((item)=>
                    <Memes key = {item.id} meme={item} />):"No Memes"
            }
        </div>
    )
}
export default AllMemes;