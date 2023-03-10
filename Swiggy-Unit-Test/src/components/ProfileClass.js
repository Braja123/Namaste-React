import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       userInfo: {
        name: 'Dum Name',
        location: 'Dum Location'
       }
    };
    console.log("Child - Constructor" + this.props.name);
  }

  async componentDidMount() {
    // const data = await fetch("https://api.github.com/users/Braja123")
    // const json = await data.json();
    // this.setState({userInfo: json})

    this.timer = setInterval(() => {
      console.log("Namaste React")
    }, 1000);
    console.log("Child - componentDidMount" + this.props.name);
  }

  componentDidUpdate(prevProps, prevState) {
    // if(this.state.userInfo.name !== prevState.userInfo.name){}
    console.log("componentDidUpdate")
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount");

  }

  render() {
    console.log("Child - render" + this.props.name);

    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} alt="alt-image" />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location {this.state.userInfo.location}</h2>
        <button>Click State</button>
      </div>
    );
  }
}

export default Profile;
