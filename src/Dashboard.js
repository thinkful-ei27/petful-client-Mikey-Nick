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
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <Pet onAdoptPet={(e) => this.handleClick(e)} petToAdopt={this.props.cat} />
        <Pet onAdoptPet={(e) => this.handleClick(e)} petToAdopt={this.props.dog} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cat: state.cat.data,
  dog: state.dog.data
})

export default connect(mapStateToProps)(Dashboard);