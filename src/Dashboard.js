'use strict';
import React from 'react';
import Pet from './components/Pet.js';

export default class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }
    //This will take catToAdopt and dogToAdopt
    handleClick = e => {
      e.preventDefault();
      console.log(e.target.value);
    }

    render(){
        return(

          <div>
          <Pet onAdoptPet={(e)=>this.handleClick(e)}petToAdopt={this.props.catToAdopt}/>
          <Pet onAdoptPet={(e)=>this.handleClick(e)} petToAdopt={this.props.dogToAdopt}/>
          </div>
        )
    }
}