import React,{useEffect} from "react";
import { Jumbotron,Button} from 'reactstrap';

const Home=() =>{
    useEffect(()=>{
        document.title="Home"
    },[])
    return (
    <Jumbotron className="text-center">
            <div>
                <h1> My class</h1>
                <Button color="primary" outline>Start using</Button>
            </div>
    </Jumbotron>
    );
}

export default Home;