import React, { Component } from "react";

class ListUI extends Component {
  updateParent = () => {
    this.props.callChild(12);
  };

  render() {
    return (
      <>
        {/* use Props */}
        <h2>ListUI {this.props.pVal} </h2>
         <button onClick={this.updateParent}>Click</button>
 
      </>
    );
  }
}

// function ListUI({callChild}) {

//     function updateParent() {
//         callChild(12);
//     }

//     return (
//         <>
//             <h1>ListUI</h1>
//             <button onClick={updateParent}>Click</button>
//         </>
//     )
// }
export default ListUI;
