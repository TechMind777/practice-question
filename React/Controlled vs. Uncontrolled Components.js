/*
Controlled Components
What is a Controlled Component?

    A controlled component is a component where the form data is handled by the React component itself. The value of the form elements (like <input>, <textarea>, or <select>) is controlled by the React state, and any changes to the form input trigger an event that updates the state.

How It Works:

    -The input's value is set by the state, and any change in the input updates the state using an event handler like onChange.
    -This approach gives you full control over the input value and makes it easier to perform validation, formatting, or other operations on the input data.

    Example:

    javascript
    
        import React, { useState } from 'react';

        function ControlledForm() {
            const [name, setName] = useState('');

            const handleChange = (event) => {
                setName(event.target.value);
            };

            const handleSubmit = (event) => {
                event.preventDefault();
                alert(`Submitted name: ${name}`);
            };

            return (
                <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
                </form>
            );
        }

    export default ControlledForm;
Key Points:

    -State-Driven: The input value is controlled by the component's state (value={name}).
    -Event Handling: Any change in the input triggers an onChange event that updates the state (onChange={handleChange}).
    -Predictability: Since React state is the single source of truth, it’s easy to understand the current value of the input at any point in time.



Uncontrolled Components
What is an Uncontrolled Component?

    An uncontrolled component is a component where the form data is handled by the DOM itself rather than by React. The component doesn’t manage the form input values directly; instead, it uses references (refs) to access the form values when needed.

How It Works:

    -The input's value is managed by the DOM, and you access the current value using a ref when you need it, such as during form submission.
    -This approach is more similar to traditional HTML form handling.
Example:

javascript
        import React, { useRef } from 'react';

        function UncontrolledForm() {
        const nameInputRef = useRef(null);

        const handleSubmit = (event) => {
            event.preventDefault();
            alert(`Submitted name: ${nameInputRef.current.value}`);
        };

        return (
            <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" ref={nameInputRef} />
            </label>
            <button type="submit">Submit</button>
            </form>
        );
        }

        export default UncontrolledForm;

Key Points:

    -DOM-Driven: The input value is controlled by the DOM, not by the component's state.
    -Refs for Access: You use a ref to access the input's value (ref={nameInputRef}) rather than relying on state.
    -Simplicity: This can be simpler for certain use cases, especially when you don’t need to manage or validate input data as it changes.

Controlled vs. Uncontrolled Components
Aspect	            Controlled Components	                        Uncontrolled Components
State Management	Managed by React component state	            Managed by the DOM
Input Value Access	Via state (e.g., value={name})	                Via refs (e.g., ref={nameInputRef})
Event Handling	    onChange events update state	                ref.current.value is accessed when needed
Use Case	        Complex forms with validation, dynamic input	Simple forms, when direct access to the DOM is sufficient
Predictability	    More predictable and easier to debug	        Less predictable, as the value is not tied to state

When to Use Which:
    -Controlled Components: Best when you need to perform real-time validation, dynamic changes, or manage the form inputs closely within your React component.
    -Uncontrolled Components: Best when you want a simpler approach or need to integrate with non-React code, where you don’t need to manage or validate the input values during the input process.


    */