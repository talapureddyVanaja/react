import React from 'react'
import './footer.css';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function footer() {
  return (
    <>
    
    <div style={{backgroundColor:'lightcyan',paddingTop:70}}>
        <Container>
          
            <Row>
                <Col style={{padding:20}}>
                     <h3>Quick Link</h3>
                     <li className='footer'>about us</li>
                     <li className='footer'>Trema & conditions</li>
                     <li className='footer'>Privacy</li>
                     <li className='footer'>Refund</li>
                     <li className='footer'>Shipping policy</li>
                     <li className='footer'>contact</li>
                </Col>
                <Col style={{padding:20}}>
                  <h3>CATEGORIES</h3>
                  
                  <li className='footer'>EYES</li>
                  <li className='footer'>FACE</li>
                  <li className='footer'>BRUSHES</li>
                  <li className='footer'>KITS</li>
                  <li className='footer'>LIPS</li>
                  <li className='footer'>NAILS</li>
                </Col>
                
                <Col style={{padding:20}}>
                 
                  <h3>Help Desk</h3>
                  <li className='footer'>+91 9810245261</li>
                  <li className='footer'>Mon-Sat 10 AM to 7 PM</li>
                  <li className='footer'>Email: support@hokmakeup.com</li></Col>
                  
                  
            </Row>
            
        </Container>
        
    
    </div>
    </>
  )
}

export default footer
