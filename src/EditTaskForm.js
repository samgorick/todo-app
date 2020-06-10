import React from "react";

class EditTaskForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: null,
      task: ""
    };
  }

  componentDidMount() {
    this.setState({
      id: this.props.edit.id,
      task: this.props.edit.task
    });
  }

  dealWithChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleEdit(this.state);
    this.setState({
      task: ""
    });
  };

  render() {
    return (
      <div className='edit-task-form margin'>
        <h3 className='ui center aligned header'>Edit Task</h3>
        <form className='ui form' onSubmit={this.handleSubmit}>
          <input
            className='six wide field'
            id='task'
            name='task'
            onChange={this.dealWithChange}
            value={this.state.task}
            type='text'
          ></input>
          <button type='submit' className='ui button'>
            Edit Task
          </button>
        </form>
      </div>
    );
  }
}

export default EditTaskForm;
