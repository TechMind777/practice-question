/*
Virtual DOM, real DOM, and Shadow DOM are all related to the Document Object Model (DOM), which is a programming interface for HTML and XML documents: 

Virtual DOM
    A tree representation of the real DOM that's used as a blueprint to update it. Virtual DOM is used to improve performance and optimize updates across an application. It's implemented by libraries and frameworks like React, Vue, and Angular. Virtual DOM creates a copy of the entire DOM in memory, which can consume memory and slow down the initial rendering process. 

Real DOM
    Represented as nodes and objects, the real DOM allows programming languages like JavaScript to interact with the page. 

Shadow DOM
    A web standard that allows you to encapsulate JavaScript, CSS, and templating into a standalone component that doesn't affect the rest of the code. Shadow DOM is used to create isolated and encapsulated components, making it a good solution for building reusable web components. It's implemented natively by web browsers and doesn't create a complete representation of the entire DOM. Instead, it inserts subtrees of DOM elements into the document. 

        */
