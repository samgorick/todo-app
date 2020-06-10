import React from "react";
import { ReactSortable } from "react-sortablejs";
import ToDo from "./ToDo";

class ToDosContainer extends React.Component {
  render() {
    return (
      <ReactSortable
        className='ui centered cards'
        list={this.props.tasks}
        setList={newState => this.props.handleComponent(newState)}
      >
        {this.props.tasks.map(task => (
          <ToDo
            key={task.id}
            id={task.id}
            task={task.task}
            delete={this.props.delete}
            edit={this.props.edit}
          />
        ))}
      </ReactSortable>
    );
  }
}

export default ToDosContainer;
