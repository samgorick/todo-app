import React from "react";

class NewTaskForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }

  dealWithChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dealWithForm(this.state.task);
    this.setState({
      task: ""
    });
  };

  render() {
    return (
      <div className='new-task-form margin'>
        <h3 className='ui center aligned header'>Create New Task</h3>
        <form className='ui form' onSubmit={this.handleSubmit}>
          <input
            className='six wide field'
            id='task'
            name='task'
            placeholder='Enter task...'
            onChange={this.dealWithChange}
            value={this.state.task}
            type='text'
          ></input>
          <button type='submit' className='ui button'>
            Create Task
          </button>
        </form>
      </div>
    );
  }
}

export default NewTaskForm;
