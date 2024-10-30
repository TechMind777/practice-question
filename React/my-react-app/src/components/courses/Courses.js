import React from "react";

import { Outlet } from "react-router-dom";

function Courses() {
  return (
    <>
      <h2>Courses</h2>
      <Outlet />
    </>
  );
}

export default Courses;
