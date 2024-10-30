import React from "react";
import {useParams, useLocation, useSearchParams} from 'react-router-dom'
function Contact() {
    return <h1>Contact</h1>;
  }
  function Contact1(props) {
    let paran = useParams();
    console.log("paran",paran);

    let location = useLocation();
    const sParams = new URLSearchParams(location.search);
    const query = sParams.get('f');

    console.info("location", location);
    console.info("query", query);


    const [searchParams, setSearchParams] = useSearchParams();

    console.info("searchParams-->", searchParams);
    console.info("setSearchParams=>", searchParams?.get('f'));

 

    return <h1>Contact Id{props.id}</h1>;
  }
export { Contact, Contact1 };
// export default Contact;
