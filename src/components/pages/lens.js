import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


class Lens extends Component{
  
  canonsmallform=(e)=>{
    e.preventDefault();
    window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSfnLS1-hVek8P4hEPxFBO7s0A4wjdXfjuvUXdqXjNVGdKdioA/viewform?embedded=true"
  
  }

  canonsbigform=(e)=>{
    e.preventDefault();
    window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSdX3JAiDsQ9DX4Tl__-9pX1vyzin1pdmmtMiPzli2dYrm1yXQ/viewform?embedded=true"
  
  }

  nikonsmallform=(e)=>{
    e.preventDefault();
    window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSck7OXyvQ5Xu1ON8fap5dO6CjXX2IFEnjHNcpBHFq-0OrnYEQ/viewform?embedded=true"
  
  }

  nikonbigform=(e)=>{
    e.preventDefault();
    window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSe2tSBqjE0X93-KiL1rqOLF6XZY49_C5oz7j0QVDTRbwKOG_w/viewform?embedded=true"
  
  }


    render(){
        return(
            <React.Fragment>
              <HeaderDetails className='container-fluid align-items-center' style={{height:'20vh'}}>
                <h1 className='display-1 font-weight-bold' style={{fontSize:'3rem',paddingTop:'3%'}}>Camera Lens</h1>
                {/* <h4 className='display-5'>Canon</h4>
                <p>canon</p> 
                    
                      {/* <i className='fab fa-facebook-f'></i>
           </div>
           <div className='col-2'>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe2tSBqjE0X93-KiL1rqOLF6XZY49_C5oz7j0QVDTRbwKOG_w/viewform?embedded=true" width="640" height="1805" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
           </div>
           <div className='col-2'>
           <i className='fab fa-google-plus-g'></i>
           </div>
           <div className='col-2'>
           <i className='fab fa-reddit'></i>
           </div>
           <div className='col-2'>
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSck7OXyvQ5Xu1ON8fap5dO6CjXX2IFEnjHNcpBHFq-0OrnYEQ/viewform?embedded=true" width="640" height="1805" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>           </div>
           <div className='col-2'>
           <i className='fab fa-facebook-messenger'></i> */}
                  
                  
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

                <div >
                <h1  style={{marginLeft:'12px'}}>Canon 18-55 mm lens</h1>
                <img src="/images/canon1855.jpg" className="img-responsive" alt="..." style={{maxWidth:'100%',height:'auto',width:'300px',marginLeft:'10px'}}/>
                <div className='container' style={{marginLeft:'1px',marginTop:'45px'}}>
                    <p style={{fontWeight:'700',fontSize:'30px'}}><b>Special features:-</b></p>
                        <ol>
                      
                     <li style={{fontSize:'20px'}}>Compact and lightweight </li><br></br>
                     <li style={{fontSize:'20px'}}>A versatile zoom range and quiet operation for power on the go </li><br></br>
                     <li style={{fontSize:'20px'}}>Its small size lets it fit just about anywhere </li><br></br>
                     <li style={{fontSize:'20px'}}>The lead screw-type stepping motor (STM) helps ensure smooth autofocus and near-silent operation</li><br></br>
                     <li style={{fontSize:'20px'}}>Advanced image stabilization can result in sharper photos with minimal blur, even in low light.</li><br></br>
                     
                </ol>
                </div>
                <div className='containabcr' marginTop='100px' style={{display:'flex', flexWrap:'wrap'}}>
                <button  type ='submit' className='btn btn-outline-primary text-uppercase' onClick={this.canonsmallform} style={{padding:'.7rem .7rem',marginLeft:'300px',fontSize:'1rem',marginBottom:'20px',fontWeight:'700',borderRadius:'.45rem',display:'flex', flexWrap:'wrap',marginRight:'unset',marginLeft:'70px'}}>Rent Now <p style={{color:'black',fontWeight:'500',paddingLeft:'5px'}}>@</p><del style={{color:'black',fontWeight:'500',paddingLeft:'5px'}} onClick={this.canonsmallform}> 300/-</del><p style={{color:'black',fontWeight:'700',paddingLeft:'5px'}}> 200/-</p></button>

                     </div>
                </div>
                <div >
                <h1  style={{marginLeft:'12px'}}>Canon 55-250 mm lens</h1>
                <img src="/images/canon55250.jpg" className="img-responsive" alt="..." style={{maxWidth:'100%',height:'auto',width:'300px',marginLeft:'10px'}}/>
                <div className='container' style={{marginLeft:'1px',marginTop:'45px'}}>
                    <p style={{fontWeight:'700',fontSize:'30px'}}><b>Special features:-</b></p>
                        <ol>
                      
                     <li style={{fontSize:'20px'}}>Get Closer while capturing a special moment</li><br></br>
                     <li style={{fontSize:'20px'}}>Go Everywhere with Extra Reach  because lightweight lenses offer a versatile zoom range to cover a range of subjects</li><br></br>
                     <li style={{fontSize:'20px'}}>Smooth, Quiet STM Focusing When Shooting Movies</li><br></br>
                     <li style={{fontSize:'20px'}}>Advanced image stabilization can result in sharper photos with minimal blur, even in low light.</li><br></br>
                     
                </ol>
                </div>
                <div className='containabcr' marginTop='100px' style={{display:'flex', flexWrap:'wrap'}}>
                <button  type ='submit' className='btn btn-outline-primary text-uppercase' onClick={this.canonsbigform} style={{padding:'.7rem .7rem',marginLeft:'300px',fontSize:'1rem',marginBottom:'20px',fontWeight:'700',borderRadius:'.45rem',display:'flex', flexWrap:'wrap',marginRight:'unset',marginLeft:'70px'}}>Rent Now <p style={{color:'black',fontWeight:'500',paddingLeft:'5px'}}>@</p><del style={{color:'black',fontWeight:'500',paddingLeft:'5px'}} onClick={this.canonsbigform}> 400/-</del><p style={{color:'black',fontWeight:'700',paddingLeft:'5px'}}> 300/-</p></button>

                     </div>
                     
                <div >
                <h1 Product style={{marginLeft:'12px'}}>Nikon 18-55 mm lens</h1>
                <img src="/images/nikon1855.jpg" className="img-responsive" alt="..." style={{maxWidth:'100%',height:'auto',width:'300px',marginLeft:'10px'}}/>
                <div className='container' style={{marginLeft:'1px',marginTop:'45px'}}>
                    <p style={{fontWeight:'700',fontSize:'30px'}}><b>Special features:-</b></p>
                        <ol>
                       <li style={{fontSize:'20px'}}>A Go-To Lens For Nearly Any Situation</li><br></br>
                       <li style={{fontSize:'20px'}}>Everyday Excellence</li><br></br>

                     <li style={{fontSize:'20px'}}>Outstanding Nikon Image Quality</li><br></br>
                     <li style={{fontSize:'20px'}}>Smooth, Fast Autofocus</li><br></br>
                     <li style={{fontSize:'20px'}}>Sharp Photos, Steady Videos</li><br></br>
                     </ol>
                </div>
                <div className='containabcr' marginTop='100px' style={{display:'flex', flexWrap:'wrap'}}>
                <button  type ='submit' className='btn btn-outline-primary text-uppercase' onClick={this.nikonsmallform} style={{padding:'.7rem .7rem',marginLeft:'300px',fontSize:'1rem',marginBottom:'20px',fontWeight:'700',borderRadius:'.45rem',display:'flex', flexWrap:'wrap',marginRight:'unset',marginLeft:'70px'}}>Rent Now <p style={{color:'black',fontWeight:'500',paddingLeft:'5px'}}>@</p><del style={{color:'black',fontWeight:'500',paddingLeft:'5px'}} onClick={this.nikonsmallform}> 300/-</del><p style={{color:'black',fontWeight:'700',paddingLeft:'5px'}}> 200/-</p></button>

                     </div>
                </div>

                <div >
                <h1 Product style={{marginLeft:'12px'}}>Nikon 70-300 mm lens</h1>
                <img src="/images/nikon70350.jpg" className="img-responsive" alt="..." style={{maxWidth:'100%',height:'auto',width:'300px',marginLeft:'10px'}}/>
                <div className='container' style={{marginLeft:'1px',marginTop:'45px'}}>
                    <p style={{fontWeight:'700',fontSize:'30px'}}><b>Special features:-</b></p>
                        <ol>
                       <li style={{fontSize:'20px'}}>Bring your World Within Reach, Blur-Free</li><br></br>
                       <li style={{fontSize:'20px'}}>Portable Super-Telephoto Power Versatile 70–300Mm Focal Length</li><br></br>

                     <li style={{fontSize:'20px'}}>Sharp Photos, Steady Videos VR Image Stabilization</li><br></br>
                     <li style={{fontSize:'20px'}}>Smooth, Fast Autofocus</li><br></br>
                      </ol>
                </div>
                <div className='containabcr' marginTop='100px' style={{display:'flex', flexWrap:'wrap'}}>
                <button  type ='submit' className='btn btn-outline-primary text-uppercase' onClick={this.nikonbigform} style={{padding:'.7rem .7rem',marginLeft:'300px',fontSize:'1rem',marginBottom:'20px',fontWeight:'700',borderRadius:'.45rem',display:'flex', flexWrap:'wrap',marginRight:'unset',marginLeft:'70px'}}>Rent Now <p style={{color:'black',fontWeight:'500',paddingLeft:'5px'}}>@</p><del style={{color:'black',fontWeight:'500',paddingLeft:'5px'}} onClick={this.nikonbigform}> 400/-</del><p style={{color:'black',fontWeight:'700',paddingLeft:'5px'}}> 300/-</p></button>

                     </div>
                </div>
                

                     
                </div>
              
                
               
            </React.Fragment>
        )
    }
}
export default Lens;


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