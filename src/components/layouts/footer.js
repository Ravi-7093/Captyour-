import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function Footer(){

  return(
    <FooterContainer className='main-footer'>
    <div className='footer-middle'>
    <div className='container'>
    <div className='row'>
    
    <div className='col-md-3 col-sm-6'>
    <h4>Useful Links </h4>
    <ul className='list-unstyled'>
    <li><Link className=" text-white text-uppercase " to="/home">HOME</Link></li>
    <li><Link className=" text-white text-uppercase " to="/products">PRODUCTS</Link></li>
    <li><Link className=" text-white text-uppercase " to="/contacts">Connect With Us</Link></li>
    <li><Link className=" text-white text-uppercase " to="/faq">FAQ's</Link></li>
    <li><Link className=" text-white text-uppercase " to="/terms">TERMS AND CONDITIONS</Link></li>

    </ul>
    </div>
    

    <div className='col-md-3 col-sm-6'>
    <h4>Follow Us </h4>
    <ul className='list-unstyled'>
    <li ><a className='fa fa-instagram'  href='https://www.instagram.com/captyour.in/'> </a></li>
    <li ><a className='fa fa-whatsapp'  href='https://wa.me/qr/27EETKALUCJHO1'> </a></li>
    </ul>
    </div>

    
    </div>
    <div className='footer-bottom'>
    <p className="a" style={{marginBottom:'10px'}}>&copy;{new Date().getFullYear()} CaptYour.in - All rights reserved</p>
    </div>

    </div>
    </div>
    

   </FooterContainer>
  );
  }

  export default Footer;
  const FooterContainer =styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top : 3rem;
    color: var(--mainWhite);
    }

    .footer-bottom {
      padding-top: 3rem;
      padding-top: 2rem;
    }

    .abc {
      color: var(--mainGrey);
    }

     a:hover {
      color: var(--mainWhite);
    }
    
    .fa-facebook {
      background: #3B5998;
      color: white;
      padding: 8px 15px;
      font-size: 15px;
      width: 10px;
      text-align: center;
      text-decoration: none;
      margin: 5px 2px;
}

.fa-whatsapp {
  background: ##25D366;
  color: #25D366;
  padding: 8px 5px;
  font-size: 25px;
  width: 15px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
}
    
 .fa-instagram {
  background: #cb2027;
  color: white;
  padding-top:8px;
  padding-right:25px;
  padding-left:8px;
  padding-bottom:8px;



  font-size: 20px;
  width: 10px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
}
    
    /* Add a hover effect if you want */
    .fa:hover {
      opacity: 0.7;
    }
  `

  ;
