// The useRef hook in React is a powerful tool that allows you to create a reference to a DOM element or store a mutable value that persists across re-renders without causing a re-render when updated. It's commonly used for accessing or modifying DOM elements directly, storing previous values, or holding any mutable data.

// Basic Usage
// Here's a simple example of how to use useRef:

    import React, { useRef } from 'react';

    function MyComponent() {
    const inputRef = useRef(null);

    const focusInput = () => {
        // Focus the input element using the ref
        inputRef.current.focus();
    };

    return (
        <div>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>Focus Input</button>
        </div>
    );
    }

    export default MyComponent;
/*


Key Points about useRef
    Preserve State Across Renders: useRef can hold a mutable object that doesn’t cause a re-render when updated. For example, you might use it to store a timeout ID or a previous state value.

    Accessing DOM Elements: You can use useRef to directly reference a DOM element, allowing you to manipulate it (e.g., focus, scroll, etc.) without relying on state.

    Mutable .current Property: The object returned by useRef will have a .current property that can be initialized to a value (e.g., null or an initial value) and updated later.

    Avoiding Unnecessary Re-Renders: Since updating a ref does not trigger a re-render, it's useful for performance optimization in scenarios where frequent updates to some value are needed but shouldn't cause re-renders.

    import React, { useState, useRef, useEffect } from 'react';

    function MyComponent() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();

    useEffect(() => {
        prevCountRef.current = count;
    }, [count]);

    return (
        <div>
        <p>Current count: {count}</p>
        <p>Previous count: {prevCountRef.current}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
    }

    export default MyComponent;


In this example, prevCountRef stores the previous value of count, and it doesn't cause a re-render when updated.

When Not to Use useRef
For State Management: Don’t use useRef to manage state that should trigger UI updates. For such cases, use useState or useReducer.
For Side Effects: useRef should not replace useEffect for dealing with side effects like data fetching or subscriptions.


Conclusion
    useRef is a versatile hook that provides a way to interact with the DOM, store mutable values, and improve performance by avoiding unnecessary re-renders. It should be used in cases where you need to persist data across renders without triggering a re-render or when directly interacting with the DOM.

*/
    