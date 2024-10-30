import React  from "react";
// import { Link, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <>
        <h2>Router</h2>
        <nav>
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/about">About</Link> </li>
                <li> <Link to="/contact">Contact</Link> </li>
                <li> <Link to="/Contact/1">ContactID</Link> </li>
                <li> <Link to="/redirect-page">redirect-page</Link> </li>
                <li> <Link to="/redirect">redirect</Link> </li>
                <li> <Link to="/Courses">Courses</Link> </li>
                <li> <Link to="/Courses/List">List</Link> </li>
                <li> <Link to="/Courses/Search">Search</Link> </li>
                <li> <Link to="/UseReducer">UseReducer</Link> </li>
                
            </ul>
        </nav>
    </>
    );
}
export default Nav;