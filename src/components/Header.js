import React from "react";
import {Card,CardBody} from "reactstrap";


const Header=()=>{
    return(
    <div>
            <Card className="text_center my-3 bg-warning">
            <CardBody>
                <h1 className="text-center my-3"> Memester!!</h1>
            </CardBody>
            </Card>
           
        </div>
    );
}

export default Header;