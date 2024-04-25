import * as React from 'react';

import './header.css'
import {Link} from 'react-router-dom';
import Image21 from '../Images/32.jpg';

function Header() {
  return (
    <div className='head'>
      <center>
      <img src={Image21} width='70px' height='70px'/>
      </center>
       <ul className='menu'>
     
      
        
        <li className='hover'><Link to='/' className='link'>Home</Link></li>
        <li className='hover'><Link to='about'className='link'>Product </Link></li>
        <li className='hover'><Link to='service'className='link'>Buy on </Link></li>
        <li className='hover'><Link to='contact'className='link'>Contact</Link></li>
        
      </ul>
    </div>
  )
}

export default Header
