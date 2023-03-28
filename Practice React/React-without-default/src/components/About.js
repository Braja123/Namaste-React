import React from 'react'
import { Outlet } from 'react-router-dom'
import Profile from "./ProfileClass";
import ProfileFunctionalComp from "./Profile";
import UserContext from '../utils/UserContext';

class About extends React.Component {
  constructor(props) {
    super(props);
    
    // console.log("parent - constructor");
  }

  componentDidMount() {
    // console.log("parent - componentDidMount");
  }

  render() {
    // console.log("parent - render");

    return (
      <div>
        <h1>About</h1>
        <UserContext.Consumer>
          {({user}) => <h4>{user.name} - {user.email}</h4>}
        </UserContext.Consumer>
        <ProfileFunctionalComp name={"Gopal"} />
        {/* <Profile name={"First -Gopal"} /> */}
      </div>
    )
  }
}

export default About;