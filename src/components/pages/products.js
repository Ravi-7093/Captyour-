import React ,{Component} from 'react'

import {Link} from 'react-router-dom'


class Products extends Component {
  render(){
      
    return(


//  <div className ='col-10 col-lg-4  mb-5'>
//   <div className='card' style ={{width: '18rem'}}>
//   <img src={'/images/mamm.jpg'}  className='card-img-top'/>
//     <div className='card-body'>
//   <h3 className='card-title text-uppercase'>
   
//  </h3>
//   <h5 className='card-title'>Canon cameras</h5>
//   <p className='card-text'></p>
//  <Link className='btn btn-outline-primary text-uppercase'>More Info</Link>
//  </div>
//  </div>
//  </div> 

 
//  <div class="card-deck" style={{marginLeft:'25px',marginBottom:'150px',width: '80rem',display:'flex',flexWrap:'wrap'}}>
//  <div class="card">
//      <img src="/images/product2.jpeg" class="card-img-top"  />
//      <div class="card-body">
//          <h3 class="card-title ">Canon Cameras</h3>
//          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor.</p>
//      </div>
//      <Link  to='/canon'className='btn btn-outline-primary text-uppercase' style={{display:'flex', flexWrap:'wrap',marginRight:'unset',marginLeft:'unset'}}>More Info</Link>
//  </div>
//  <div class="card">
//      <img src="/images/product1.jpeg" class="card-img-top" style={{maxWidth:'100%',height:'auto'}}/>
//      <div class="card-body">
//          <h3 class="card-title ">Nikon Cameras</h3>
//          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor.</p>
//      </div>
//      <Link  to='/nikon'className='btn btn-outline-primary text-uppercase' style={{display:'flex', flexWrap:'wrap',marginRight:'unset',marginLeft:'unset'}}>More Info</Link>
//  </div>
//  <div class="card">
//      <img src="/images/product3.jpeg" class="card-img-top" />
//      <div class="card-body">
//          <h3 class="card-title ">Action Cameras</h3>
//          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor.</p>
//      </div>
//      <Link  to='/nikon'className='btn btn-outline-primary text-uppercase' style={{display:'flex', flexWrap:'wrap',marginRight:'unset',marginLeft:'unset'}}>Coming Soon</Link>
//  </div>
// </div>

//   
<div class="container">
      <div class="card-deck" >
          <div class="card mb-4" >
              <img class="card-img-top img-fluid" src="/images/product1.jpg" alt="Card image cap" />
              <div class="card-body">
                  <h4 class="card-title" style={{fontSize:'28px'}}><b>Nikon Cameras</b></h4>
                  <p class="card-text" style={{fontSize:'18px'}}><b>Fact:</b>  Nikon's perfect focus system is used for biological research microscope.</p>
                </div>
              <Link  to='/nikon'className='btn btn-outline-primary text-uppercase' style={{display:'flex', flexWrap:'wrap',marginRight:'unset',marginLeft:'unset',display: 'table-cell',textAlign:'center'}}>Rent Now</Link>
          </div>
          <div class="card mb-4">
              <img class="card-img-top img-fluid" src="/images/product2.jpg" alt="Card image cap"/>
              <div class="card-body">
                  <h4 class="card-title" style={{fontSize:'28px'}}><b>Canon Cameras</b></h4>
                  <p class="card-text" style={{fontSize:'18px'}}><b>Fact:</b> Canon introduced the world synchronized first flash and shutter camera.</p>
                  
              </div>
              <Link  to='/canon'className='btn btn-outline-primary text-uppercase' style={{display:'flex', flexWrap:'wrap',marginRight:'unset',marginLeft:'unset',display: 'table-cell'}}>Rent Now</Link>
        
          </div>
          <div class="w-100 d-none d-sm-block d-md-none"></div>
           <div class="card mb-4">
              <img class="card-img-top img-fluid" src="/images/product3.jpg" alt="Card image cap"/>
              <div class="card-body">
                  <h4 class="card-title" style={{fontSize:'28px'}}><b>Camera Lens</b></h4>
                  <p class="card-text" style={{fontSize:'18px'}}><b>Fact: </b> The biggest SLR lens ever made was of 256 kg! It was built for wildlife photography.</p>
                </div>
                <Link  to='/lens'className='btn btn-outline-primary text-uppercase' style={{display:'flex', flexWrap:'wrap',marginRight:'unset',marginLeft:'unset',display: 'table-cell'}}>Rent Now</Link>
                </div>  
   
          <div class="w-100 d-none d-md-block d-lg-none"></div>
          <div class="card mb-4">
              <img class="card-img-top img-fluid" src=".././images/product4.jpg" alt="Card image cap"/>
              <div class="card-body">
                  <h4 class="card-title" style={{fontSize:'28px'}}><b>Action Cameras</b></h4>
                  <p class="card-text" style={{fontSize:'18px'}}><b>Fact: </b> The world's first action camera was introduced by Woodman labs in 2004!</p>
                  
              </div>
              <Link  className='btn btn-outline-primary text-uppercase' style={{display:'flex', flexWrap:'wrap',marginRight:'unset',marginLeft:'unset',display: 'table-cell'}}>Coming Soon</Link>
          </div>
          <div class="w-100 d-none d-sm-block d-md-none"></div>
           <div class="w-100 d-none d-lg-block d-xl-none"></div> 
          
      </div>
  </div>

)

  }
}
export default Products;
