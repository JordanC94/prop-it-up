import React, { Component } from "react";

class PersonCard extends Component {
  render() {
    const { firstName, lastName, age, hairColor } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="card justify-content-center">
              <div className="card-body">
                <h1 className = "card-title">{firstName} {lastName}</h1>
                <p>{age}</p>
                <p>{hairColor}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonCard;
