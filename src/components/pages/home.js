import React, { Component } from 'react'
import styled from 'styled-components'


import {Link} from 'react-router-dom'
import { Media } from 'react-bootstrap';


class Home extends Component{
    render(){
        return(
            <div className='abc'>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" style={{marginRight:'unset',marginLeft:'unset',width:'100%'}}>
            <div className="carousel-inner" >
               <div className="carousel-item active">
                 <img src="/images/home01.jpeg" className="img-responsive" alt="..." style={{maxWidth:'100%',height:'auto',width:'100%'}}/>
               </div>
               <div className="carousel-item">
                 <img src="/images/home02.jpeg" className="d-block w-6" alt="..." style={{maxWidth:'100%',height:'auto',width:'100%'}}/>
              </div>
               <div className="carousel-item">
                  <img src="/images/home03.jpeg" className="d-block w-6" alt="..." style={{maxWidth:'100%',height:'auto',width:'100%'}}/>
               </div> 
               <div className="carousel-item">
                  <img src="/images/home04.jpeg" className="d-block w-6" alt="..." style={{maxWidth:'100%',height:'auto',width:'100%'}}/>
               </div> 
            </div>
          </div>

          <div >
          <img src="/images/CaptYour-1.jpg" className="img-responsive" alt="..." style={{maxWidth:'100%',height:'auto',width:'800px',display:'table',margin:'0 auto',marginTop:'0px'}}/>
          
          
          <p style={{fontWeight:'200',fontSize:'35px',marginLeft:'50px',fontFamily:'Berlin Sans FB'}}><b>About Us</b></p>
          <div className="embed-responsive embed-responsive-16by9" style={{maxWidth:'800px',height:'auto',display:'table',margin:'0 auto',marginTop:'0px'}}>
          <iframe className="embed-responsive-item" src="/images/My Video.mp4" ></iframe>
          </div>
          
          <TextDetails>
             {/* <p style={{marginLeft:'180px',marginTop:'10px',fontSize:'18px',fontWeight:'500'}}><br></br>
              For years, hundreds of camera rental shoppers have turned to CaptYour.in to capture their dream images through rental services.<br></br> 
              CaptYour.in offers a comprehensive list of for-rent cameras, as well as the information and tools to make real images captured<br></br>
              through the cameras taken on rent. 
              Today, more than ever, CaptYour.in is The Home of Camera rental Search providing genuine service.<br></br><br></br>
              <b style={{fontSize:'18px'}}>Our goals</b><br></br><br></br>
              •	Ensure we reach you with the best quality of products<br></br>
              •	Hassle free service for customer satisfaction<br></br>
              •	Provide the best price range in equipment rental segment<br></br><br></br>
              We would like you to be the part of the creative community and not just share the gear but share ideas, experiences and more importantly learn from the experts in the community.<br></br>

             </p> */}
             <p  style={{paddingLeft:"10%",fontSize:'20px',fontWeight:'500',paddingRight:'10%'}}><br></br>
              For years, hundreds of camera rental shoppers have turned to CaptYour.in to capture their dream images through rental services.<br></br>
              CaptYour.in offers a comprehensive list for-rent cameras, as well as the information and tools to make real images captured<br></br>
              through the cameras taken on rent. 
              Today, more than ever, CaptYour.in is The Home of Camera rental Search providing genuine service.<br></br></p>
              <p style={{paddingLeft:'12%',fontSize:'20px',fontWeight:'500',paddingRight:'10%'}}><b style={{fontSize:'22px'}}>Our goals</b><br></br>
              •	Ensure we reach you with the best quality of products<br></br>
              •	Hassle free service for customer satisfaction<br></br>
              •	Provide the best price range in equipment rental segment<br></br></p>
              <p style={{paddingLeft:'10%',fontSize:'20px',fontWeight:'500',paddingRight:'10%'}}>We would like you to be the part of the creative community and not just share the gear but share ideas, experiences and more importantly learn from the experts in the community.</p><br></br>



          </TextDetails>
          
          
          </div>
           
          
          <div>
          <img src="/images/image4.png" className="img-responsive" alt="..." style={{maxWidth:'100%',height:'auto',width:'100px',marginLeft:'120px'}}/>
          </div>
          


    
          
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" style={{marginRight:'unset',marginLeft:'unset',display:'table',margin:'0 auto',marginBottom:'75px'}}>
            <div className="carousel-inner" >
               <div className="carousel-item active">
                 <img src="/images/cust11.jpeg" className="img-responsive" alt="..." style={{maxWidth:'100%',height:'auto',display:'table',margin:'0 auto',width:'700px'}}/>
               </div>
               <div className="carousel-item">
                 <img src="/images/cust2.png" className="d-block w-6" alt="..." style={{maxWidth:'100%',height:'auto',display:'table',margin:'0 auto',width:'700px'}}/>
              </div>
               <div className="carousel-item">
                  <img src="/images/cust3.png" className="d-block w-6" alt="..." style={{maxWidth:'100%',height:'auto',display:'table',margin:'0 auto',width:'700px'}}/>
               </div> 
            
           
            </div>
          </div>

           

           

           

          </div>
          
        )
    }
}
export default Home;

 const TextDetails = styled.p`


 @media (max-width: 760px){
  p{
   padding-left: 1%;
  }
 }
 `