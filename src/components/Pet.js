

import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props)
  };


  render() {
    return (
      <section>
        <h2>{this.props.petToAdopt.name}</h2>
        <img src={this.props.petToAdopt.imageURL} alt={this.props.petToAdopt.imageDescription} />
        <main>
          <dl>
            <dt>Sex</dt>
            <dd>{this.props.petToAdopt.sex}</dd>
            <dt>Age</dt>
            <dd>{this.props.petToAdopt.age}</dd>
            <dt>Breed</dt>
            <dd>{this.props.petToAdopt.breed}</dd>
            <dt>Story</dt>
            <dd>{this.props.petToAdopt.story}</dd>
          </dl>
          <button value={this.props.petToAdopt.name}
            onClick={(e) => this.props.onAdoptPet(e)}>
            Adopt</button>
        </main>
      </section>)
  }
}