import React, { Component } from "react";
import "./style.scss";

class Toogler extends Component {
    constructor(props) {
      super(props);
      this.state = {
        className: "show",
      };
    }
  
    handleClick() {
    if (this.state.className === "hide"){
        this.setState((prevState) => ({
        className: "show",
        }));} else {
        this.setState((prevState) => ({
            className: "hide",
            }));
        }
    }
  
    render() {
      return (
          <>
          <button
            onClick={() => this.handleClick()}>
            {this.state.className}
          </button>
          <p className={this.state.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi adipisci consequatur magni, omnis ipsam nemo cupiditate quos possimus cum eaque perferendis cumque, deleniti a? Culpa, quae? Obcaecati incidunt officiis quia?
          Assumenda error deserunt incidunt adipisci, molestiae magnam cumque excepturi nesciunt deleniti maiores commodi ex expedita voluptatibus perspiciatis impedit eligendi autem eaque debitis. Eos officiis possimus atque dolore voluptate rerum neque!
          Id atque saepe, debitis nemo distinctio itaque pariatur recusandae ex quos necessitatibus deserunt nulla et architecto natus, totam nisi nostrum rem quaerat eius error cumque in mollitia accusamus rerum. Aut!
          Blanditiis iste perspiciatis quam ipsum vitae corporis enim alias consequatur atque, natus ducimus minima nihil quaerat veritatis, ad porro vero eveniet eum asperiores voluptatum hic in quis? Tempore, ducimus praesentium!
          Distinctio hic inventore voluptatibus animi consequatur qui similique id consequuntur! Odit, ea fugit assumenda laborum porro dolorem tempore maxime voluptatem facere at accusamus in corrupti saepe, sint, earum possimus voluptate?</p>
          </>
      );
    }
  }

export default Toogler;