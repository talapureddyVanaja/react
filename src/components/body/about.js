import React from 'react'
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Image8 from '../Images/08.png';
import Image9 from '../Images/09.webp';
import Card from 'react-bootstrap/Card';
import Image12 from '../Images/16.jpg';
import Button from 'react-bootstrap/Button';
import './about.css';
function about() {
  return (
    <div>
      <Card>
      <Card.Body><center>
        <h1>
           Natural products
        </h1>
        </center></Card.Body>
    </Card>
    
    <div>
      <br/>
      <Container>
        <Row>
          <Col className='hover'>
          <img src={Image8} width="500" height="400"/>
          </Col>
          <Col>
          <center>
         <h1>LIP BALMS, SERUMS AND SCRUBS</h1> 
         </center>
          <p>Everyone needs a lip balm in their life. Lip care beauty products make nice pocket-sized gifts for friends and family and are convenient to take out and about with you to help protect lips when on the move. A lip balm is likely to include more wax to firm the product, especially if you wish to make it into a stick. Think through how you wish to package the lip balm and that will dictate the formula.</p>
          <Button>lern more</Button>
          </Col>
        </Row>
      </Container>
      <br/>
      <Row>
        <Col>
        <center>
        <h1>HOMEMADE BODY LOTION</h1>
        </center>
        <p1>For good reason, we have voted the body butter the best, first botanical formulation to make at home. Apart from being super easy to make, it is a beauty product loved by all ages and used by almost everyone. Start with a simple, framework formulation and adapt it to suit the ingredients you can find easily.</p1>
       <center>
        <Button>lern more</Button>
        </center><br/>
        </Col>
        <Col className='hover'>
        <img src={Image9} width="500" height="400"/>
        </Col>
        
      </Row>
      <br></br>
      <Row>
        <Col className='hover'>
        <img src={Image12} width="500" height="400"/>
        </Col>
        <Col>
        <center>
          <h1>HARI OIL</h1>
          <p1>Hair oils are the key nature of our Indian society. Forget about the benefits of the hair, it gives you some sort of comfort and keeps our society together. Remember when our dadi used to do in champi our hair and tell us stories? It was a major part of our life, no matter if you liked having oil in your hair or not. Other than the social interactions, there is a reason why Indians are known for their lustrous and healthy hair. Hair oil is definitely a key part of that. So today I am going to talk about different types of hair oil which are absolutely the best in the market. So if you are interested in knowing then please keep on reading.</p1>
          <Button>lern more</Button><br/>
        </center>

        </Col>
      </Row>
      
    </div>
    

    </div>
  )
}

export default about


