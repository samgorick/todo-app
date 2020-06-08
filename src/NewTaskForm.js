import React from 'react';

class NewTaskForm extends React.Component {

  constructor(){
    super()
    this.state = {
      taskInput: ""
    }
  }

  dealWithChange = (event) => {
    this.setState({
      taskInput: event.target.value
    })
  }

  render(){
    return(
      <div className="create-new-task">
        <h3>Create New Task</h3>
        <form onSubmit={(event) => this.props.dealWithForm(event)}>
          <input 
            id="task"
            name="task"
            onChange={this.dealWithChange}
            value={this.state.taskInput}
            type="text"
          >
          </input>
          <input
            type="submit"
          >
          </input>
        </form>
      </div>
    )
  }
}

export default NewTaskForm