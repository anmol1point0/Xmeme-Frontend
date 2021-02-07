import React from "react";
import {
    Card,
    CardBody,
    CardImg,
    CardSubtitle, CardTitle
} from "reactstrap";

const Memes=({meme})=>{

    return(
        
        <Card className="text-center my-2" style={{backgroundColor:'blue'}}>
            <CardBody>
                <CardTitle style={{fontWeight: 'bold', fontSize: 50}}>
                    {meme.name}
                </CardTitle>
                <CardSubtitle style={{fontSize: 70}} className="my-2">
                    {meme.caption}
                </CardSubtitle>
            </CardBody>
            <CardImg  src={meme.imageaddress} alt="Card image cap" />
        </Card>
        
    );
}
export default Memes;