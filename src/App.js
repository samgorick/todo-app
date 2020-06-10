import React from "react";
import ToDosContainer from "./ToDosContainer";
import NewTaskForm from "./NewTaskForm";
import EditTaskForm from "./EditTaskForm";
import SortableContainer from './SortableContainer'
import { ReactSortable } from "react-sortablejs";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      edit: false,
      editTask: {}
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/taskList")
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          tasks: json
        });
      });
  }

  dealWithForm = task => {
    fetch("http://localhost:3000/taskList", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ task: task })
    })
      .then(resp => resp.json())
      .then(json => {
        this.setState(prevState => ({
          tasks: [json, ...prevState.tasks]
        }));
      });
  };

  dealWithDelete = taskId => {
    fetch(`http://localhost:3000/taskList/${taskId}`, {
      method: "DELETE"
    });
    const updatedTodos = this.state.tasks.filter(task => task.id !== taskId);
    this.setState({
      tasks: updatedTodos
    });
  };

  dealWithEdit = task => {
    this.setState({
      edit: true,
      editTask: task
    });
  };

  handleEdit = edit => {
    fetch(`http://localhost:3000/taskList/${edit.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ task: edit.task })
    })
      .then(resp => resp.json())
      .then(json => {
        const updatedTasks = this.state.tasks.map(task =>
          task.id === json.id ? json : task
        );
        this.setState({
          tasks: updatedTasks,
          edit: false
        });
      });
  };

  handleComponent = (newState) => {
    this.setState({
      tasks: newState
    })
  }

  render() {
    return (
      <div className='App ui center aligned container'>
        <header className='App-header margin'>
          <h1 className='ui center aligned header'>Your Tasks:</h1>
          <NewTaskForm
            dealWithForm={this.dealWithForm}
            editTask={this.state.editTask}
          />
          {this.state.edit ? (
            <EditTaskForm
              edit={this.state.editTask}
              handleEdit={this.handleEdit}
            />
          ) : null}
            <ToDosContainer
              tasks={this.state.tasks}
              delete={this.dealWithDelete}
              edit={this.dealWithEdit}
            />
          <SortableContainer tasks={this.state.tasks} handleComponent={this.handleComponent}/>
        </header>
      </div>
    );
  }
}

export default App;
