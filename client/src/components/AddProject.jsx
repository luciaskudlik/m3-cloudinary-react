import React, { Component } from "react";
import axios from "axios";

class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", description: "" };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { title, description} = this.state;

    axios
      .post("http://localhost:5000/api/projects", { title, description })
      .then(() => {
        this.props.getData();
        this.setState({ title: "", description: ""});
      })
      .catch((err) => console.log(err));
  };


  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
        
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
          />

          <label>Description:</label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={(e) => this.handleChange(e)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;
