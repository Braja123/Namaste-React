import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import ProfileFunction from "./Profile";
import ProfileClass from "./ProfileClass";
// import UserContext from "../util/UserContext";

// const About = () => {
//   return (
//     <>
//       <div>About us page</div>
//       <p>Inside About us page</p>
//       {/* <Outlet /> */}
//       <ProfileFunction name={"Das Function"} />
//       <ProfileClass name={"Sanu Class"} />
//     </>
//   );
// };

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent-constructor");
  }

  componentDidMount() {
    console.log("Parent-componentDidMount");
  }

  render() {
    console.log("Parent-render");

    return (
      <>
        <div>About us page</div>
        {/* <UserContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold text-xl p-10">{user.name}</h4>
          )}
        </UserContext.Consumer> */}
        <p>Inside About us page</p>
        <ProfileFunction name={"Das Function"} />
        {/* <ProfileClass name={"First Child"} /> */}
      </>
    );
  }
}

export default About;

/* 
O/P of Console:
---------------------
Parent Constructor
Parent Render
    First Child Constructor
    First Child Render
    Second Child Constructor
    Second Child Render
    First Child ComponentDidMount
    Second Child ComponentDidMount
Parent ComponentDidMount 

*/
