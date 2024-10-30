import React ,{useContext} from "react";
 
import MyContext from "../../context/myContext";

// import {toast} from 'toast';

function SearchChild(props) {
  const context =  useContext(MyContext);

  console.log(" context",  context)

  const updateParent = () => {
    props.callChild(1290);
    // toast("Hello")
  };  
 

  return (
     <>
     <h2>Search -- {context}</h2>
     {/* use Props */}
     {/* <h2>ListUI {this.props.pVal} </h2> */}
      <button onClick={updateParent}>Click</button>

   </>
       
  );
}

export default SearchChild;
