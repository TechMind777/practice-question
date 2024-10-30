/*
What is JSX?

    JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. JSX makes it easier to create and visualize the structure of a React component.

Why is JSX used in React?

    JSX is used because it provides a more intuitive way to describe the UI structure. Instead of using React.createElement() for each element, JSX allows you to write HTML tags directly in your JavaScript code, which makes the code more readable and easier to manage.

How does JSX work?

    Under the hood, JSX is transformed into regular JavaScript by tools like Babel. For example, the following JSX:

const element = <h1>Hello, world!</h1>;
Is compiled into:

    const element = React.createElement('h1', null, 'Hello, world!');


This means that every JSX element is converted into a React.createElement call, which returns a JavaScript object called a React element. These React elements are what React uses to construct and update the DOM.

Key Points About JSX:

Embedding Expressions:

    JSX allows you to embed JavaScript expressions within curly braces {}. For example:
        const name = 'Alice';
        const element = <h1>Hello, {name}!</h1>;
        This would render as "Hello, Alice!" in the browser.

Attributes and Props:

    You can pass attributes to elements in JSX just like you would in HTML, but with camelCase naming for attributes (e.g., className instead of class, onClick instead of onclick).
        const element = <button className="btn" onClick={handleClick}>Click Me</button>;

Children:

    JSX can include child elements, text content, or even JavaScript expressions as children.
        const element = (
        <div>
            <h1>Hello, world!</h1>
            <p>This is a paragraph.</p>
        </div>
        );

Self-Closing Tags:

    In JSX, tags that don’t have children must be self-closed, similar to XML:

        const imgElement = <img src="image.jpg" alt="description" />;

JSX is Type-Safe:

    -Since JSX is compiled into JavaScript, it’s type-safe, meaning errors will be caught at compile-time rather than runtime.

Common Misconceptions:

    -JSX is not HTML: While it looks like HTML, JSX is just syntactic sugar for JavaScript functions and objects. It is tightly integrated with React but not valid HTML.
    -JSX is Optional: You don’t have to use JSX with React, but it makes your code more declarative and easier to reason about.

    */
