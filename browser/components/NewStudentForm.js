import React, { Component } from "react";
import axios from "axios";

export default class NewStudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    // console.log("");
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const { data } = await axios.post("/api/students", this.state);
      this.props.addStudent(data);
      console.log(data);
    } catch (err) {
      console.log("err in handle submit: ", err);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          required
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          required
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          required
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
