import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return(
        <div>
          <h1>Welcome to Home</h1>
          <ul>
            <li>
              <Link to ='/'> Home </Link>
          </li>
          </ul>
        </div>
    )
  }
}

export default Home;
