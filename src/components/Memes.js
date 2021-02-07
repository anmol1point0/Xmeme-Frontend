import React from "react";
import {
    Card,
    CardImg,
    CardSubtitle, CardTitle
} from "reactstrap";

const Memes=({meme})=>{

    return(
        
        <Card className="text-center my-2" style={{backgroundColor:'powderblue'}}>
            
                <CardTitle style={{ fontSize: 25, textAlign: "left"}}>
                    <i style={{fontWeight: 'bold'}}>Name</i>: {meme.name}
                </CardTitle>
            
            <CardImg  style={{"margin-top": "0px"}} src={meme.imageaddress} alt="Card image cap" />
            
            <CardSubtitle style={{fontSize: 25, textAlign: "left"}} className="my-2">
            <i style={{fontWeight: 'bold'}}>Caption</i>: {meme.caption}
                </CardSubtitle>
            
        </Card>
        
    );
}
export default Memes;