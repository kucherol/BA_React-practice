import React from "react";
import List from "../List";

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ data: users }))
      .catch((error) => console.log(error));
  }

  onUserClick(user) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
      .then((response) => response.json())
      .then((users) => this.setState({ data: users }))
      .catch((error) => console.log(error));
    alert(`${user.id} telephone is ${user.phone}`);
  }

  render() {
    return (
      <>
        <List data={this.state.data} field="name" click={this.onUserClick}>
        </List>
      </>
    );
  }
}

export default Main;
