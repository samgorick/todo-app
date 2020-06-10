import React, { Component } from "react";
import { ReactSortable } from "react-sortablejs";
import ToDo from "./ToDo";

class SortableContainer extends Component {

  render() {
    return (
      <ReactSortable list={this.props.tasks} setList={newState => this.props.handleComponent(newState)} >
        {this.props.tasks.map(task => (<div className="ui segment" key={task.id}>{task.task}</div>))}
      </ReactSortable>
    );
  }
}

export default SortableContainer;
