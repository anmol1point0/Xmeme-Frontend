import React from "react"
import { Link } from "react-router-dom"
import { ListGroup } from "reactstrap"

const Menus=()=>{
    return(
        <ListGroup className = "my-500" style={{"margin-left":"20px"}}>
            <Link style={{border: '1px solid black',"background":"red" ,"color":"black"}} className="list-group-item list-group-item-action mx-1" tag="a" to="/">
                All Memes
            </Link>
            <Link style={{border: '1px solid black',"color":"black","background":"#DDE0DF"}} className="list-group-item list-group-item-action mx-1 my-2" tag="a" to="/add-memes">
                Add My Meme
            </Link>

        </ListGroup>

    )
}
export default Menus;