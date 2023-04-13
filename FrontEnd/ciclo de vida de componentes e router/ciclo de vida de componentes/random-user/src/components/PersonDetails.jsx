import React, { Component } from 'react';
import {randomNameApi} from '../services/RandomNameApi'
import Loading from './Loading';
import PersonCard from './PersonCard';

class PersonDetails extends Component {
  constructor() {
    super();

    this.state = {
      person: [],
      loading: true,
    }
  }

  async componentDidMount() {
    try {
      const response = await randomNameApi();
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        this.setState({
          person: data.results,
          loading: false,
        })
      } else {
        throw new Error("Error fetching data from API");
      }
    } catch (error) {
      console.log(error);
    }
  }

  getUserElements(user) {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    };
  }
  

  render() {
    const {loading, person} = this.state;

    return (
      <div>
      {loading ? <Loading /> : <PersonCard person={this.getUserElements(person[0])} />}
    </div>
    );
  }
}

export default PersonDetails;