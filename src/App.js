import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutComponent from './AboutComponent/About';
import ContactComponent from './ContactComponent/Contact';
import ReactFullpage from '@fullpage/react-fullpage';

import Workshops from './workshops/Workshops'

import 'bootstrap/dist/css/bootstrap.min.css'
declare var $;
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.fullpageApi = ''
  }

  movelogo = (origin,destination,direction)=>{
    if(direction==='down' && origin.isFirst===true){
      $("#logo").removeClass('logocenter')
      $("#logo").addClass('logotop')      
    }else if(direction==='up' && destination.isFirst===true){
      $("#logo").removeClass('logotop')
      $("#logo").addClass('logocenter')   
    }
  }
  render(){
    return (
      <Router>
        <Switch>
        <Route path = '/workshop_sponsor' component = {Workshops}></Route>
          <Route path = '/'>
            <ReactFullpage
              scrollingSpeed = {1000} /* Options here */
              onLeave = {(origin,destination,direction)=>this.movelogo(origin,destination,direction)}
              render={({ state, fullpageApi }) => {
                this.fullpageApi = fullpageApi
                return (
                  <ReactFullpage.Wrapper>
                    <div className="section about">
                      <AboutComponent />
                    </div>
                    <div className="section contact">
                      <ContactComponent />
                    </div>
                  </ReactFullpage.Wrapper>
                );
              }}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}
