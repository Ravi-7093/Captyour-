import React ,{Component} from 'react'
import {Link} from 'react-router-dom'
import emailjs from 'emailjs-com';
import {Alert} from 'react-alert'




class Contacts extends Component {

  constructor(){
    super();
    this.state ={
      inputVal_1: "",
      inputVal_2: "",
      inputVal_3: "",

 

    }
  }

  handleInput1Change = (e) => {
    this.setState({inputVal_1: e.target.value});
  }
  handleInput2Change = (e) => {
    this.setState({inputVal_2: e.target.value});
  }
  
  handleInput3Change = (e) => {
    this.setState({inputVal_3: e.target.value});
  }
  
  sendInput =(e) =>{
     
      e.preventDefault();
      console.log(e.target)
      emailjs.sendForm('gmail', 'template_h8g9m7u', e.target,'user_nQWRJcBZ5PojUtjDXHRlH')
        .then((result) => {
            console.log(result.text);
            alert("Form is submitted");
          }, (error) => {
            console.log(error.text);
        });
        this.setState({
          inputVal_1: "",
          inputVal_2: "",
          inputVal_3: "",
        })
        }




  render() {
    return(
    <section className='my-5 py-5'>
      <div container ='container'>
        <div container ='well well-sm'>
          <h3><strong>Our Location</strong></h3>
        
        
      </div>
      <div className='row' style={{marginRight:'unset',marginLeft:'unset'}}>
        <div className = 'col-md-5'> 
        <iframe src="https://maps.google.com/maps?q=105%2C%201st%20Cross%20Rd%2C%20kandaya%20layout%2C%20Naagarabhaavi%2C%20Bengaluru%2C%20Karnataka%20560091&t=&z=13&ie=UTF8&iwloc=&output=embed"   style={{
          border:'0',
          width:'100%',
          height:'290px',
          frameborder:'0',
          }} allowFullScreen>
        </iframe>
        </div>
        <div className='col-md-5'>
          <h4><strong>Connect With  Us</strong></h4>
          <form className='bcd' onSubmit={this.sendInput}>
            <div className='form-group'>
            <label>Name</label>
            <input minLength="3" maxLength="15" type="text" name="user_name"  placeholder='Enter your Name' className='form-control' required={'true'}
            value={this.state.inputVal_1}  onChange={this.handleInput1Change}/>
            </div>

            <div className='form-group'>
            <label>Email</label>
            <input type="email" name="user_email" placeholder='Enter your valid email address' required={'true'} value={this.state.inputVal_2} onChange={this.handleInput2Change} className='form-control' />
            </div>

            <div className='form-group'>
            <label>Message</label>
             <input type='text' name="message" placeholder='Enter your valuable feedback' className='form-control' required={'true'} value={this.state.inputVal_3} onChange={this.handleInput3Change} />
            </div>


            <input  className='btn btn-outline-primary text-uppercase' type="submit" value="Send"  />

          </form>

        </div>
        </div>
      </div>
    </section>
  )
  }
}
export default Contacts;
