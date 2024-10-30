/*
The Context API is a feature in React that allows you to manage and share state or data across your application without passing props manually through every level of the component tree. It helps solve the problem of props drilling by providing a more efficient way to make data accessible to multiple components, regardless of their nesting level.


What is the Context API?

The Context API is a built-in feature of React that allows you to create a "context" to store data that can be accessed by any component in your component tree, without the need to pass props down manually through each intermediate component.

const MyContext = React.createContext();
export default MyContext;

function App() {
  const user = { name: "Alice", age: 25 };
  return (
    <MyContext.Provider value={user}>
      <ChildA />
    </MyContext.Provider>
  );
}


function ChildC() {
  return (
    <MyContext.Consumer>
      {value => <p>{value.name}</p>}
    </MyContext.Consumer>
  );
}


function ChildC() {
  const user = useContext(MyContext);
  return <p>{user.name}</p>;
}

Key Points:
    Context: Used to create a way to pass data through a component tree without prop drilling.
    useContext: A hook that allows you to access context data in functional components easily

    

    import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

function MyProvider({ children }) {
  const [value, setValue] = useState('initial value');

  const changeValue = ( ) => setValue(newValue);

  return (
    <MyContext.Provider value={{ value, changeValue }}>
      {children}
    </MyContext.Provider>
  );
}

function useMyContext() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
}

function ChildComponent() {
  const { value, changeValue } = useMyContext();

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => changeValue('new value')}>Change Value</button>
    </div>
  );
}

function App() {
  return (
    <MyProvider>
      <ChildComponent />
    </MyProvider>
  );
}


*/