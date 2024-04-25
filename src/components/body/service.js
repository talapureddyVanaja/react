import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Image13 from '../Images/24.jpg';
import Image14 from '../Images/25.webp';
import Image15 from '../Images/26.webp';
import Image16 from '../Images/29.webp';
import Image17 from '../Images/27.jpg';
import Image18 from '../Images/28.jpg';
import Image19 from '../Images/30.jpg';
import Image20 from '../Images/31.jpg';
function Service() {
  return (
    <div>
      <Card>
      <Card.Body><center>
        <h1>CHEMICAL PRODUCTS</h1>
        </center></Card.Body>
    </Card>
    <br></br>
    <Container>
      <Row>
        <Col>
      <img src={Image13} className='hover' width="300" height="300"/>
      <center>
        <h2>pure </h2>
        </center>
        <br/>
        <center>
        <Button>buy</Button>
        </center>
        </Col><br/>
          <Col>
          
        <img src={Image14} className='hover' width="300" height="300"/>
        <center>
        <h2>irsi</h2>
        </center>
        <br/>
        <center>
        <Button>buy</Button>
        </center>
       </Col><br/>
        
        <Col >
          
        <img src={Image15} className='hover' width="300" height="300"/>
        <center>
        <h2>eyeshadow</h2>
        </center>
        <br/>
        <center>
        <Button>buy</Button>
        </center>
        </Col><br/>
        <Col >
      <img src={Image19} className='hover' width="300" height="300"/>
      <center>
        <h2>brush </h2>
        </center>
        <br/>
        <center>
        <Button>buy</Button>
        </center>
        </Col><br/>
      </Row>
    </Container>
<div>
  <br></br>
<Container>
      <Row>
        <Col >
      <img src={Image16} className='hover' width="300" height="300"/>
      <center>
        <h2>skin-care </h2>
        </center>
        <br/>
        <center>
        <Button>buy</Button>
        </center>
        </Col><br/>
          <Col>
          
        <img src={Image17} className='hover' width="300" height="300"/>
        <center>
        <h2>essentials</h2>
        </center>
        <br/>
        <center>
        <Button>buy</Button>
        </center>
       </Col><br/>
        
        <Col>
          
        <img src={Image18} className='hover' width="300" height="300"/>
        <center>
        <h2>pin on skin</h2>
        </center>
        <br/>
        <center>
        <Button>buy</Button>
        </center>
        </Col><br/>
        
        <Col>
          
          <img src={Image20} className='hover' width="300" height="300"/>
          <center>
          <h2>lores</h2>
          </center>
          <br/>
          <center>
          <Button>buy</Button>
          </center>
          </Col><br/>
      </Row>
    </Container>
    </div>
    </div>
  )
  }


export default Service
