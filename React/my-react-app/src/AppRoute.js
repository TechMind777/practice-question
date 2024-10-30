import React from "react";

import { Link, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import { Contact, Contact1 } from "./components/Contact";

import Courses from "./components/courses/Courses";
import List from "./components/courses/List";
import Search from "./components/courses/Search";
import UseReducer from "./components/UseReducer";

// const Home = ()=> <h2>Home</h2>;
// const About = ()=> <h2>About</h2>;
// const AboutID = ()=> <h2>AboutID</h2>;
const NotFound = () => <h2>NotFound</h2>;

const AppRoute = () => (
  <div>
    {/**Router */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Contact/:id" element={<Contact1 id="ss" />} />
      <Route path="/UseReducer" element={<UseReducer />} />
      <Route path="/Courses" element={<Courses />}>
        <Route path="List" element={<List />} />
        <Route path="Search" element={<Search />} />
      </Route>
      <Route path="/404" element={<NotFound />} />
      {/* <Route path="*" element={ <NotFound   /> } />  */}
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  </div>
);

export default AppRoute;
