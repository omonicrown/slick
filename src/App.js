import logo from './logo.svg';
import './App.css';
import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import image from "./1.jpeg";
import axios from 'axios';
import Form from 'react-bootstrap/Form'

function App() {

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=9588ad09', { headers: { Accept: 'application/json', "Content-Type": "application/json", } }).then(response => {
      if (response.data) {
        setData(response.data)
      }
    }).catch(error => {
      console.log(error);
      if (error.response) {
        if (error.response.data.message) {
          console.log(error.response.data.message);
        }
        if (error.response.data.errors) {
          console.log(error.response.data.errors);
        }
      }
    });

  }, []);


  return (
    <div className="Container App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className='text-center'>

            <Button variant="outline-secondary" style={{ color: 'white' }} >MyTestApp</Button>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <article
      className='row col-sm-12'
        style={{ backgroundImage: `url(${image})`, height: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', display: 'grid',paddingBottom: '200px' }}
      >

        <div style={{ paddingTop: '100px', paddingLeft: '50px' }}>
          <h4 style={{ float: 'left', fontSize: '72px', color: 'white', }}>Watch</h4>
        </div>
        <div style={{ paddingLeft: '50px' }}>
          <h4 style={{ float: 'left', fontSize: '72px', color: 'white', }}>Somethng</h4>
        </div>
        <div style={{ paddingLeft: '50px' }}>
          <h4 style={{ float: 'left', fontSize: '72px', color: 'white', }}>Incredible.</h4>
        </div>

      </article>


      <div style={{ paddingLeft: '70px', paddingTop: '50px' }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ float: 'left', fontSize: '24px', color: '#000000' }}>Search</Form.Label> <br />
            <Form.Control type="text" style={{ height: '54px', borderColor: '#000000' }} />
          </Form.Group>
        </Form>
      </div>

      <div className="row" style={{ float: 'left', paddingLeft: '70px' }}>
        <div className="col-md-12">
          <h2 style={{ float: 'left',paddingTop:'40px',paddingBottom:'20px' }}> {data.Genre} </h2>
        </div> <br />


        <div className="col-md-3 col-6" >
          <Card style={{ backgroundColor: 'black', height: '300px',borderRadius:'12px' }}>
            <Card.Body>
              <Card.Title style={{ color: 'white', paddingTop: '120px' }}> {data.Title}</Card.Title>
            </Card.Body>
          </Card>

        </div>
        <div  className="col-md-3 col-6" >
          <Card style={{ backgroundColor: 'black', height: '300px',borderRadius:'12px' }}>
            <Card.Body>
              <Card.Title style={{ color: 'white', paddingTop: '120px' }}> {data.Title}</Card.Title>
            </Card.Body>
          </Card>

        </div>
        <div className="col-md-3 d-none d-md-block" >
          <Card style={{ backgroundColor: 'black', height: '300px',borderRadius:'12px' }}>
            <Card.Body>
              <Card.Title style={{ color: 'white', paddingTop: '120px' }}> {data.Title}</Card.Title>
            </Card.Body>
          </Card>

        </div>
        <div className="col-md-3 d-none d-md-block" >
          <Card style={{ backgroundColor: 'black', height: '300px',borderRadius:'12px' }}>
            <Card.Body>
              <Card.Title style={{ color: 'white', paddingTop: '120px' }}> {data.Title}</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>


      <div className="row" style={{ float: 'left', paddingLeft: '70px' }}>
        <div className="col-md-12">
          <h2 style={{ float: 'left',paddingTop:'40px',paddingBottom:'20px' }}> {data.Genre} </h2>
        </div> <br />


        <div className="col-md-3 col-6" >
          <Card style={{ backgroundColor: 'black', height: '300px',borderRadius:'12px' }}>
            <Card.Body>
              <Card.Title style={{ color: 'white', paddingTop: '120px' }}> {data.Title}</Card.Title>
            </Card.Body>
          </Card>

        </div>
        <div  className="col-md-3 col-6" >
          <Card style={{ backgroundColor: 'black', height: '300px',borderRadius:'12px' }}>
            <Card.Body>
              <Card.Title style={{ color: 'white', paddingTop: '120px' }}> {data.Title}</Card.Title>
            </Card.Body>
          </Card>

        </div>
        <div className="col-md-3 d-none d-md-block" >
          <Card style={{ backgroundColor: 'black', height: '300px',borderRadius:'12px' }}>
            <Card.Body>
              <Card.Title style={{ color: 'white', paddingTop: '120px' }}> {data.Title}</Card.Title>
            </Card.Body>
          </Card>

        </div>
        <div className="col-md-3 d-none d-md-block" >
          <Card style={{ backgroundColor: 'black', height: '300px',borderRadius:'12px' }}>
            <Card.Body>
              <Card.Title style={{ color: 'white', paddingTop: '120px' }}> {data.Title}</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>


      


      




    </div>
  );
}

export default App;
