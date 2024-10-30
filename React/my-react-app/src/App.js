 
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import AppRoute from "./AppRoute";
import Nav from "./components/nav";


// use Reducx
import configureStore from './store/configureStore';
const store = configureStore();

// import axios from "axios";

// Importing toastify module
// import { toast } from "react-toastify";
// Import toastify css file
// import "react-toastify/dist/ReactToastify.css";
// toast-configuration method,
// it is compulsory method.
// toast.configure();

// toast("Hello");

function App() {
  // axios.defaults.baseURL = "https://api.publicapis.org";
  // axios.defaults.headers.common["Content-Type"] = "application/json;charset=UTF-8";

  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <AppRoute />
      </Router>
    </Provider>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
