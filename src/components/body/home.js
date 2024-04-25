import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import Image1 from '../Images/04.jpg';
import Image2 from '../Images/05.jpeg';
import Image3 from '../Images/06.jpg';
import Card from 'react-bootstrap/Card';

import CardGroup from 'react-bootstrap/CardGroup';
import  Image4 from '../Images/11.jpeg';
import Image5 from '../Images/010.jpeg';
import Image6 from '../Images/12.avif';
import Image7 from '../Images/13.jpg';
import Image10 from '../Images/14.webp';
import Image11 from '../Images/15.jpg';

function UncontrolledExample() {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img src={Image1} width="1200px" height="700px"/>
        <Carousel.Caption>
          <h2></h2>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Image2} width='1150px'/>
        <Carousel.Caption>
          <h2></h2>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Image3} width='1500px' height="700px"/>
        <Carousel.Caption>
          <h3></h3>
          <p>
          
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  <br></br>
  <div>
  <Card>
      <Card.Body>
        <center>
        
        <h1>NATURAL PRODUCTS</h1>
        </center>
        </Card.Body>
    </Card>
  
  </div>
<div>
<CardGroup>
      <Card>
        <Card.Img variant="top" src={Image4}/>
        <Card.Body>
        
          <Card.Title>
            <marquee>
            <h1>ILIA</h1>
            </marquee>
            </Card.Title>
            
          <Card.Text>
          The best makeup brands blend natural, effective ingredients with nourishing vitamins and oils. Enter ILIA. This natural cosmetic line is making formulas from scratch to ensure your makeup is the cleanest it can be, while being dedicated to sustainability and ethics every step of the way. We love the multi-purpose sticks for travel and the compact makeup collection. You can read our review of ILIA’s Super Serum Skin Tint here.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card >
        <Card.Img variant="top" src={Image5} />
        <Card.Body>
          <Card.Title>
            <marquee>
            <h1>Well People</h1> 
             </marquee>
             </Card.Title>
          <Card.Text>
          If you’re going for the perfect no-makeup look, Well People is the brand for you. The cruelty-free and natural cosmetics in this collection are designed to nourish and soothe your skin while also giving you the color and coverage you desire. Plus, the line includes many vegan products we adore. We love how versatile and affordable Well People’s handcrafted cosmetics are, especially since 35+ products are EWG-verified. (You can find Well People in major drugstores!)
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
      <Card.Img variant="top" src={Image6} />
        <Card.Body>
          <Card.Title>
          <marquee>
           <h1>RMS Beauty</h1>
            </marquee>
            </Card.Title>
          <Card.Text>
          RMS Beauty is renowned in the beauty world, and it’s clear why. The brand’s cosmetic collection is produced with raw, food-grade and organic ingredients that hydrate and illuminate your skin, while enhancing and improving your already beautiful complexion. RMS is dedicated to transforming the way people use makeup, creating products that are not only nontoxic and GMO-free, but also healing and nourishing.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
    </CardGroup>
</div>
<div>
<Card>
      <Card.Body>
        <center>
        <h1>SKIN PRODUCTS</h1>
        </center>
      </Card.Body>
    </Card>
</div>
<div>
<CardGroup>
      <Card>
        <Card.Img variant="top" src={Image7} />
        <Card.Body>
          <Card.Title>
            <center>
           <h1> Kosas Revealer concealer</h1>
            </center>
            </Card.Title>
          <Card.Text>
          If you're anything like Hailey Bieber, you're probably sure to make it the concealer of choice too. Sheena Yaitanes, who considers this product her all-time favourite, said, “It has the perfect amount of coverage and the prettiest finish I’ve ever seen, and it stays put and doesn’t crease.” What’s more: it blends like a dream (some people even wear it as foundation!) and is available in 28 shades, so everyone can find their perfect match.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Image10} />
        <Card.Body>
          <Card.Title><center>
            <h1>Jones Road Miracle Balm</h1>
            </center></Card.Title>
          <Card.Text>
          From acclaimed makeup artist Bobbi Brown’s coveted beauty brand, Jones Road products are expect to be clean and high-performing. We're obsessed with its Miracle Balm, which delivers the ultimate soft-focus minimalist pigment.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Image11} />
        <Card.Body>
          <Card.Title>
            <center>
           <h1> RMS Beauty Luminizer</h1>
            </center>
            </Card.Title>
          <Card.Text>
          The best highlighters not only leave a luminous glow but like this RMS pigment, can support healthy skin, too. A cult classic for a reason, this delivers an effortless light-reflective highlight that’s neither greasy nor glittery.
         <p> Key Ingredients: A lightweight, vegan concealer with the Sephora ‘Clean Stamp of Approval’ infused with hyaluronic acid and algae extract.</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
    </CardGroup>
</div>
  </>
  
);

}

export default UncontrolledExample;