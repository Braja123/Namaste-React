import React from 'react'
import { Outlet } from 'react-router-dom'
import Profile from "./ProfileClass";
import ProfileFunctionalComp from "./Profile";

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
        <ProfileFunctionalComp name={"Gopal"} />
        {/* <Profile name={"First -Gopal"} /> */}
      </div>
    )
  }
}

export default About;