import React, { Component } from 'react';
import './App.css';
import ImageMain from './components/image-upload/image-main'
import Register from './components/register-login/register'
import {BrowserRouter  as Router, Route } from 'react-router-dom' ;
import SignIn from './components/register-login/signin';


 export default class App extends Component{

  render(){
  return (
     <div>
       <Router>      
          <Route path="/"  exact component={Register}  />
           <Route path="/api/uploads" component={ ImageMain}  /> 
          <Route path="/register" component ={Register}  />
          <Route path="/signin" component ={ SignIn}  />
         </Router>
      
       {/* <ImageMain/> */}
     </div> 
  );
}

}