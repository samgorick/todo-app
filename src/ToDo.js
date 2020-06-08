import React from 'react';

class ToDo extends React.Component {
  render(){
    return(
      <div className="todo-card">
        <p>{this.props.task}</p>
        <button className="todo-card-btn" onClick={() => this.props.delete(this.props.id)}>
          Task Complete
        </button>
      </div>
    )
  }
}

export default ToDo