import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3"],
    product: 1
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-secondary m-2"
        >
          Increment
        </button>

        <button
          onClick={() => {
            this.props.onDecrement(this.props.counter);
          }}
          className="btn btn-info m-2"
        >
          Decrement
        </button>
        <button
          className=" btn btn-danger btn-sm m-2"
          onClick={() => {
            this.props.onDelete(this.props.counter.id);
          }}
        >
          delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning " : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
