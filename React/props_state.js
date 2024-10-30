/*
"In React, both props and state are used to manage data within components, but they serve different purposes and are used in different scenarios.

    Props are short for properties and are used to pass data from a parent component to a child component. They are immutable, meaning that the child component receiving the props cannot modify them. Props are primarily used for configuration or passing data and methods down the component tree, making components reusable and dynamic. The flow of data with props is always unidirectional, from parent to child.

    State, on the other hand, is a mutable object that allows a component to manage its own data internally. Unlike props, a component can change its own state, typically using the useState hook in functional components or setState in class components. When the state changes, it triggers a re-render of the component, reflecting the new state in the UI. State is local to the component and not directly accessible by other components unless passed down as props.

To sum up, props are used to pass data into a component and are immutable, while state is used to manage data within a component and is mutable. Understanding when to use props versus state is crucial for building efficient and predictable React components."**


-----Passing Data from Child to Parent-----------------------
To pass data from a child component to a parent component, you typically pass a function from the parent to the child as a prop. The child component can then call this function, passing the data back up to the parent.

// Parent Component
import React, { useState } from 'react';

function ParentComponent() {
  const [childData, setChildData] = useState("");

  const handleDataFromChild = (data) => {
    setChildData(data);
  };

  return (
    <div>
      <ChildComponent sendDataToParent={handleDataFromChild} />
      <p>Data from Child: {childData}</p>
    </div>
  );
}

// Child Component
function ChildComponent(props) {
  const handleClick = () => {
    const data = "Hello from Child!";
    props.sendDataToParent(data);
  };

  return (
    <div>
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
}



Parent to Child: Use props to pass data down from a parent component to a child component.
Child to Parent: Pass a function as a prop from the parent to the child. The child can then call this function to send data back up to the parent.

*/