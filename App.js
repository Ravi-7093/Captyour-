import React,{Component}from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/layouts/navbar'
import Footer from './components/layouts/footer'
import { Switch,Route} from 'react-router-dom'
import Products from './components/pages/products'
import Contact from './components/pages/contacts'
import News from './components/pages/news'
import Canon from './components/pages/canon'
import Nikon from './components/pages/nikon'
import Lens from './components/pages/lens';
import Home from './components/pages/home';
import Terms from './components/pages/terms';
import Faq from './components/pages/faq';




class App extends Component {
  render(){
    return(
      <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path='/products' component={Products}/>
      <Route path='/news' component={News}/>
      <Route path='/contacts' component={Contact}/>
      <Route path='/canon' component={Canon}/>
      <Route path='/nikon' component={Nikon}/>
      <Route path='/lens' component={Lens}/>
      <Route path='/home' component={Home}/>
      <Route path='/terms' component={Terms}/>
      <Route path='/faq' component={Faq}/>

      <Route  component={Home}/>

      </Switch>
      <Footer/>
      </div>
    );
  }
}

export default App;
