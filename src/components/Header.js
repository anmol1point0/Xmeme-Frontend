import React from "react";
import {Card,CardBody} from "reactstrap";


const Header=()=>{
    return(
    <div>
            <Card style={{width:"100%", zIndex:"1000", position:"fixed"}} className="text_center bg-warning">
            <CardBody>
                <h1 className="text-center my-3"> Memester!!</h1>
            </CardBody>
            </Card>
           
        </div>
    );
}

export default Header;