import React from "react";
import "./App.css";
import ToDosContainer from "./ToDosContainer";
import NewTaskForm from "./NewTaskForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/taskList")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          tasks: json,
        });
      });
  }

  dealWithForm = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/taskList", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ task: event.target.task.value }),
    })
      .then((resp) => resp.json())
      .then((json) => {
        this.setState((prevState) => ({
          tasks: [...prevState.tasks, json],
        }));
      });
  };

  dealWithDelete = (taskId) => {
    fetch(`http://localhost:3000/taskList/${taskId}`, {
      method: "DELETE",
    }).then(
      fetch("http://localhost:3000/taskList")
        .then((resp) => resp.json())
        .then((json) => {
          this.setState({
            tasks: json,
          });
        })
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Your Tasks:</h1>
          <NewTaskForm dealWithForm={this.dealWithForm} />
          <ToDosContainer
            tasks={this.state.tasks}
            delete={this.dealWithDelete}
          />
        </header>
      </div>
    );
  }
}

export default App;
