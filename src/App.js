
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import './App.css';
import AddMemes from './components/AddMemes';
import AllMemes from "./components/AllMemes";
import Header from "./components/Header";
import Menus from './components/Menus';



function App() {
  return (
    <div style={{"background-color":"dark"}}>
        <Router>
        <Header/>
        
        <Row>
          <Col md={4}>
              <Menus/>
              <br>
              </br>

          </Col>
          <Col md={8}>
              <Route path="/" component={AllMemes} exact/>
              <Route path="/add-memes" component={AddMemes} exact/>
          </Col>
        </Row>
        
        </Router>
      
    </div>

  );
}

export default App;
