import React, { Component } from "react";
import axios from "axios";

import StudentList from "./StudentList.js";
import SingleStudent from "./SingleStudent.js";
import NewStudentForm from "./NewStudentForm";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      selectedStudent: {},
      isDisplaying: false,
    };
    this.addStudent = this.addStudent.bind(this);
  }

  componentDidMount() {
    this.getStudents();
  }

  getStudents = async () => {
    try {
      const { data: students } = await axios.get("/api/students");
      this.setState({
        students,
      });
    } catch (error) {
      console.error(error);
    }
  };

  selectStudent = (student) => {
    return this.setState({
      selectedStudent: student,
    });
  };

  addStudent = (student) => {
    const students = [...this.state.students];
    students.push(student);
    this.setState({ students });
  };

  toggle = () => {
    this.setState({ isDisplaying: !this.state.isDisplaying });
  };

  render() {
    return (
      <div>
        <h1>Students</h1>
        <button onClick={this.toggle}>Add New Student</button>
        {this.state.isDisplaying ? (
          <NewStudentForm addStudent={this.addStudent} />
        ) : null}

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
          </thead>
          <StudentList
            students={this.state.students}
            selectStudent={this.selectStudent}
          />
        </table>
        {this.state.selectedStudent.id ? (
          <SingleStudent student={this.state.selectedStudent} />
        ) : null}
      </div>
    );
  }
}
