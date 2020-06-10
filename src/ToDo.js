import React from "react";

class ToDo extends React.Component {

  handleDrag = () => {
    console.log("on drag event")
  }

  dragStart = () => {
    console.log("drag start")
  }

  dragOver = () => {
    console.log("drag over")
  }

  dragEnd = () => {
    console.log("drag end")
  }

  render() {
    return (
      <div className='ui card' draggable="true"
        onDrag={this.handleDrag}
        onDragStart={this.dragStart}
        onDragOver={this.dragOver}
        onDragEnd={this.dragEnd}
      >
        <div className='content'>
          <div className='header'>
            <p>{this.props.task}</p>
          </div>
        </div>
        <div className='extra content'>
          <div className='ui two buttons'>
            <button
              className='ui medium red button'
              onClick={() => this.props.delete(this.props.id)}
            >
              <i className='check circle icon'></i>
              Done
            </button>
            <button
              className='ui medium button'
              onClick={() => this.props.edit(this.props)}
            >
              <i className='edit icon'></i>
              Edit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDo;
