import React, { Component } from "react";
class navBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        totalCounters=
        {this.state.counters.filter(c => c.value > 0).length}
        <a class="navbar-brand" href="#">
          Navbar
        </a>
      </nav>
    );
  }
}

export default navBar;
// stateles functions
// const navBar = () => {
//     return (  );
// }

// export default navBar;
