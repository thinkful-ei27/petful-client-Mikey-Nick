'use strict';
import React from 'react';
import Pet from './components/Pet.js';
import { connect } from 'react-redux';
import actions  from './actions/index'

const{ dogActions , catActions } = actions

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(catActions.fetchCat())
    this.props.dispatch(dogActions.fetchDog())
  }

  //This will take catToAdopt and dogToAdopt
  handleClick = e => {
    e.preventDefault();
    let animal = e.target.value;
    console.log(animal);
    if(animal === 'cat'){
      this.props.dispatch(catActions.adoptCat());
    } else {
      this.props.dispatch(dogActions.adoptDog());
    }
  }

  render() {
    return (
      <div>
        <Pet onAdoptPet={(e) => this.handleClick(e)} petToAdopt={this.props.cat} loading={this.props.catLoading} />
        <Pet onAdoptPet={(e) => this.handleClick(e)} petToAdopt={this.props.dog} loading={this.props.dogLoading}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cat: state.cat.data,
  catLoading: state.cat.loading,
  dog: state.dog.data,
  dogLoading: state.dog.loading
})

export default connect(mapStateToProps)(Dashboard);