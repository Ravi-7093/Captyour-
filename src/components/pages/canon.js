import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


class Canon extends Component{

  canonform=(e)=>{
    e.preventDefault();
    window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSeE63Px2DF6yrwWPtufEp-Bwv8lXSIbgW8MLoL7kMmC_jDG6g/viewform?embedded=true"
  
  }
    render(){
        return(
            <React.Fragment>
              <HeaderDetails className='container-fluid align-items-center' style={{height:'20vh'}}>
                <h1 className='display-1 font-weight-bold' style={{fontSize:'3rem',paddingTop:'3%'}}>Canon Cameras</h1>
                {/* <h4 className='display-5'>Canon</h4>
                <p>canon</p> */}
                 <div className='container mt-5'> 
                  
                    
                      {/* <i className='fab fa-facebook-f'></i>
           </div>
           <div className='col-2'>
           <i className='fab fa-twitter'></i>
           </div>
           <div className='col-2'>
           <i className='fab fa-google-plus-g'></i>
           </div>
           <div className='col-2'>
           <i className='fab fa-reddit'></i>
           </div>
           <div className='col-2'>
           <i className='fab fa-whatsapp'></i>
           </div>
           <div className='col-2'>
           <i className='fab fa-facebook-messenger'></i> */}
                    </div>
                  
                </HeaderDetails>

                <div className='container' ></div>
                <ul className='nav nav-tabs' >
                  <li className='nav-item' >
                    <a href='#aboutPlace' className='nav-link active' role='tab' data-toggle='tab' style={{ border: '.5px solid ' }}>About Product</a>
                  </li>
                  {/* <li className='nav-item'>
         <a href='#reviews' className='nav-link active' role='tab' data-toggle='tab'>Reviews</a>
         </li>
         <li className='nav-item'>
         <a href='#map' className='nav-link active' role='tab' data-toggle='tab'>Map</a>
         </li> */}
                </ul>
                <div className='tab-content mb-1' >
                  <div id='aboutPlace' className='tab-pane in active mt-5'  role='tabpanel' style={{marginLeft:'25px'}}>
                    <h2 className='mb-3'style={{fontSize:'3rem'}}>
                     Canon EOS 1500D  </h2><br></br>
                    
                    {/* <img src='/images/mamm.jpg'  className='rounded mx-auto d-block' style={{ maxWidth: '50%',padding:'0.0rem' }} />  */}

                    {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                       <div className="carousel-inner" style={{marginLeft:'10px'}}>
                          <div className="carousel-item active">
                            <img src="/images/canon01.png" className="d-block w-10" alt="..."/>
                          </div>
                          <div className="carousel-item">
                            <img src="/images/canon02.png" className="d-block w-10" alt="..."/>
                         </div>
                          <div className="carousel-item">
                             <img src="/images/canon03.png" className="d-block w-10" alt="..."/>
                          </div>
                          <div className="carousel-item">
                             <img src="/images/canon04.png" className="d-block w-10" alt="..."/>
                          </div>  
                       </div>
                     </div> */}

                      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" style={{display:'flex', flexWrap:'wrap',marginRight:'unset',marginLeft:'unset'}}>
                       <div className="carousel-inner" >
                          <div className="carousel-item active">
                            <img src="/images/canon01.png" className="img-responsive" alt="..." style={{maxWidth:'100%',height:'auto'}}/>
                          </div>
                          <div className="carousel-item">
                            <img src="/images/canon02.png" className="d-block w-6" alt="..." style={{maxWidth:'100%',height:'auto'}}/>
                         </div>
                          <div className="carousel-item">
                             <img src="/images/canon03.png" className="d-block w-6" alt="..." style={{maxWidth:'100%',height:'auto'}}/>
                          </div> 
                          <div className="carousel-item">
                             <img src="/images/canon04.png" className="d-block w-6" alt="..." style={{maxWidth:'100%',height:'auto'}}/>
                          </div> 
                       </div>
                     </div>


                    <div className='abc' style={{marginLeft:'1px',marginTop:'45px'}}>
                    <p style={{fontWeight:'700',fontSize:'30px'}}><b>Special features:-</b></p>
                        <ol>
                       <li style={{fontSize:'20px'}}><b>Sensor:</b> 24.1 MP APS-C SIZE CMOS SENSOR</li><br></br>
                       <li style={{fontSize:'20px'}}><b>Image Enlargement:</b> After shooting, you can enlarge photographs of the objects for clear zoomed view.</li><br></br>

                     <li style={{fontSize:'20px'}}><b>Change In Aspect Ratio:</b> Boldly crop the subject and save it with a composition that has impact. 
                     </li><br></br>
                     <li style={{fontSize:'20px'}}><b>Digital Storage Capacity:</b> 64 GB</li><br></br>
                     <li style={{fontSize:'20px'}}><b>Display Resolution Maximum: </b>1080p Full HD</li><br></br>
                     <li style={{fontSize:'20px'}}><b>Included Components: </b>EOS 1500D,EF S18-55 IS II,Strap,Battery Charger,BATTERY PACK,16 GB SD CARD.</li><br></br>
                     <li style={{fontSize:'20px'}}><b>Optical Sensor Resolution: </b>24.1 Megapixels</li><br></br>
                     <li style={{fontSize:'20px'}}><b>Max Vertical Resolution: </b>1080 Pixels</li><br></br>





                     </ol>
                     {/* <div className='bcd' marginTop='100px'>
                     <Link  to='/contacts' className='btn btn-outline-primary text-uppercase' style={{padding:'.7rem .7rem',marginLeft:'400px',fontSize:'1rem',marginBottom:'20px',fontWeight:'700',borderRadius:'.45rem'}}>Buy Now</Link>

                     </div> */}
                   <div className='containabcr' marginTop='100px' style={{display:'flex', flexWrap:'wrap'}}>
                   <button type='submit' className='btn btn-outline-primary text-uppercase' onClick={this.canonform} style={{padding:'.7rem .7rem',marginLeft:'300px',fontSize:'1rem',marginBottom:'20px',fontWeight:'700',borderRadius:'.45rem',display:'flex', flexWrap:'wrap',marginRight:'unset',marginLeft:'70px'}}>Rent Now<p style={{color:'black',fontWeight:'500',paddingLeft:'5px'}}>@</p><del style={{color:'black',fontWeight:'500',paddingLeft:'5px'}} onClick={this.canonform}> 600/-</del><p style={{color:'black',fontWeight:'700',paddingLeft:'5px'}}> 450/-</p></button>

                  </div>
                  </div>
                  </div>
                  {/* <div className='tab-pane' id='reviews' role='tabpanel'>
         review contnet

         </div>
         <div className='tab-pane' id='map' role='tabpanel'>
         <iframe src={maps} style={{border:'0',height:'28.125rem',width:'100%',frameborder:'0'}}></iframe>

         </div> */}
                </div>
            

            </React.Fragment>
        )
    }
}
export default Canon;


const HeaderDetails = styled.header`
background: linear-gradient(rgba(109,109,109),rgba(255,255,255));
height: 50vh;
text-transform: uppercase;
color : var(--mainWhite);
text-align: center;


h1{
  padding-top : 10%;
  color : var(--mainDark);

  
}

h4{
  color : var(--mainDark);
 
}

p{
  padding-left: 10%;
  padding-right: 10%;
  margin-bottom: 10%;
  color : var(--mainDark);

}

.nav-item
{
  height: 18.75rem;
}
@media(max-width: 760px){
  h1,h4 {
    color : var(--mainDark);

  }
}
`