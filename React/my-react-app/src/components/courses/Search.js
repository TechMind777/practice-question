import React ,{useState} from "react";
 
import MyContext from "../../context/myContext";

import SearchChild from "./SearchChild";

import axios from "axios";

function Search() {

  axios.get('entries', { })
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err));

  let [pVal, SetPVal] = useState(0); 

  const reciveFromChild = (e) => {
    console.log("reciveFromChild", e);
    SetPVal(e);
  };  

  return (
    <>
      <h2>Search pVal {pVal}</h2>

        {/* useContext */}
        <MyContext.Provider  value = {pVal}>
          {/* <ListUI    /> */}
          <SearchChild callChild={reciveFromChild} />

        </MyContext.Provider>

    </>
  );
}

export default Search;
