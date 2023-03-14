import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Gopal",
        location: "Dummy Loc"
      }
    }
    console.log("child - Constructor" + this.props.name);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("setinterval");
    }, 1000)
    // return timer;
    // console.log("child - componentDidMount" + this.props.name);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount");
  }





  render() {
    console.log("child - render" + this.props.name);

    const {count} = this.state;
    return (
      <>
      <h1>Profile Clas Component</h1>
      <img src={this.state.userInfo.avatar_url} />
      <h2>Name: {this.state.userInfo.name}</h2>
      <h2>Location: {this.state.userInfo.location}</h2>
      <h2>Count: {count}</h2>
      </>
    )
  }
}

export default ProfileClass;