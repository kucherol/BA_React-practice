import React from "react";
import Main from "../Main";
import List from "../List";

class RenderPost extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }
  
    componentDidMount() {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${4}`)
        .then((response) => response.json())
        .then((users) => this.setState({ data: users }))
        .catch((error) => console.log(error));
    }
  
  
    render() {
      return (
        <>
          <List data={this.state.data} field="body" click={this.onUserClick}>
          </List>
        </>
      );
    }
  }

export default RenderPost;
