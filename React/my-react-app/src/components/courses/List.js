import React, { useState, useEffect } from "react";

import ListUI from "./ListUI";


function List() {
  let [pVal, SetPVal] = useState(0);
  let [dependies, SetDependies] = useState(0);

  const reciveFromChild = (e) => {
    console.log("reciveFromChild", e);
    SetPVal(e);
  };

  useEffect(() => {
    console.log("useEffect----->");
  }, [dependies, pVal]); // []--> dependies Array , when values of deependies array update , useEffect is runs

  return (
    <>
      <h2>List</h2>

      {/* use Props */}
      <ListUI pVal={pVal} callChild={reciveFromChild} />

      {/* useContext */}
      {/* <MyContext.Provider value= {pVal}>
        <ListUI callChild={reciveFromChild} />
      </MyContext.Provider> */}
    </>
  );
}

export default List;
