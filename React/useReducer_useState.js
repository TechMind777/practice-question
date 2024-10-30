/*

1. useState: Simple State Management
    useState is the most common way to manage local state in a functional component. It’s simple and works great for basic state management, such as toggling values or updating a small number of state variables.
 
    Example:
        import React, { useState } from 'react';

        const Counter = () => {
            const [count, setCount] = useState(0);

            return (
                <div>
                    <p>Count: {count}</p>
                    <button onClick={() => setCount(count + 1)}>Increment</button>
                </div>
            );
        };

        export default Counter;

    When to use useState:
        -When the state logic is simple.
        -When the state updates are straightforward, like toggles, counters, form fields, etc.

2. useReducer: Complex State Management
    useReducer is used when you have more complex state logic. It’s similar to how you would use reducers in Redux or other state management libraries. You define a reducer function that handles different state transitions based on the action dispatched.

    Syntax:
        const [state, dispatch] = useReducer(reducer, initialState);

        reducer: A function that receives the current state and an action, then returns the new state.
        initialState: The initial state of your component.

    Example:
    import React, { useReducer } from 'react';

    // Reducer function
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
            return { count: state.count + 1 };
            case 'decrement':
            return { count: state.count - 1 };
            default:
            return state;
        }
    };

    const Counter = () => {
        const initialState = { count: 0 };
        const [state, dispatch] = useReducer(reducer, initialState);

        return (
            <div>
                <p>Count: {state.count}</p>
                <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
                <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            </div>
        );
    };

    export default Counter;
When to use useReducer:
When the state logic is more complex, like when managing multiple state variables or when state transitions depend on specific actions.
When the next state depends on the previous state, especially in scenarios where the logic could become cumbersome with useState.
When you want a more predictable state structure, especially when there are multiple ways to update the state (e.g., many different actions).
Key Differences:
Feature	useState	useReducer
Complexity	Simple, straightforward state management	Useful for more complex state logic
When to use	Best for a small number of state updates	When you have multiple state transitions
State Structure	Single value or small set of states	Complex state objects with multiple fields
Updates	Directly set state using setState	Use dispatch to trigger actions
Logic Location	Update logic typically inside the component	Update logic centralized in a reducer function
Conclusion:
Use useState when your state is simple and local.
Use useReducer when your state logic is complex, involves multiple values, or has distinct transitions between different states.
*/