import React from "react"
import { Link } from "react-router-dom"
import { ListGroup } from "reactstrap"

const Menus=()=>{
    return(
        <ListGroup  style={{"margin-left":"2px","position":"fixed",width:"30.5%",top: "36%",
        right: "70%",left:"0%"}}>
            <Link  style={{border: '1px solid black',"background":"#ffeeba" ,"color":"black",textAlign:"center"}} className="list-group-item list-group-item-action mx-1" tag="a" to="/" active>
                All Memes
            </Link>
            <Link style={{border: '1px solid black',"color":"black","background":"#c3e6cb",textAlign:"center"}} className="list-group-item list-group-item-action mx-1 my-2" tag="a" to="/add-memes" active>
                Add My Meme
            </Link>
            <Link  style={{border: '1px solid black',"background":"#ffeeba" ,"color":"black",textAlign:"center"}} className="list-group-item list-group-item-action mx-1" tag="a" to="/find-meme" active>
                find Meme
            </Link>

        </ListGroup>

    )
}
export default Menus;