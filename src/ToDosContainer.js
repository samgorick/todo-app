import React from 'react'
import ToDo from './ToDo'

class ToDosContainer extends React.Component {

  render(){
    return(
      <div className="todos-container" >
        {this.props.tasks.map(task => <ToDo key={task.id} id={task.id} task={task.task} delete={this.props.delete}/>)}
      </div>
    )
  }
}

export default ToDosContainer