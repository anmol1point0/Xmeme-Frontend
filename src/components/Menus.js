import React from "react"
import { Link } from "react-router-dom"
import { ListGroup } from "reactstrap"

const Menus=()=>{
    return(
        <ListGroup style={{"margin-left":"20px"}}>
            <Link className="list-group-item list-group-item-action mx-1" tag="a" to="/">
                All Memes
            </Link>
            <Link className="list-group-item list-group-item-action mx-1" tag="a" to="/add-memes">
                Add My Meme
            </Link>

        </ListGroup>

    )
}
export default Menus;