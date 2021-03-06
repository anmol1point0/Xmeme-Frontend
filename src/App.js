import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { Col, Row } from "reactstrap";
import './App.css';
import AddMemes from './components/AddMemes';
import AllMemes from "./components/AllMemes";
import Header from "./components/Header";
import Menus from './components/Menus';
import FindMeme from "./components/FindMeme"

function App() {
  return (
    <div style={{"background-color":"dark"}}>
        <Router>
        <Header/>
        
        <Row>
          <Col md={4}>
              <br>
              </br>
              
              <Menus/>

          </Col>
          <Col md={8}>
              <Route path="/" component={AllMemes} exact/>
              <Route path="/add-memes" component={AddMemes} exact/>
              <Route path="/find-meme" component={FindMeme} exact/>
          </Col>
        </Row>
        
        </Router>
      
    </div>

  );
}

export default App;
