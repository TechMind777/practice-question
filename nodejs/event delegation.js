/*
Event Delegation is a technique in JavaScript where a single event listener is attached to a parent element, and events from child elements are handled by propagating them up the DOM tree.

Benefits:

1. Reduced memory usage: Fewer event listeners are needed.
2. Improved performance: Less overhead from event listener management.
3. Simplified code: Easier to manage and maintain.

How it works:

1. Attach an event listener to a parent element (e.g., document, container).
2. Events from child elements bubble up the DOM tree.
3. Parent element's event listener catches and handles the event.
4. Use event.target to identify the original element that triggered the event.

Example:

// Attach event listener to parent element
document.addEventListener('click', function(event) {
  // Identify the target element
  var target = event.target;
  
  // Handle the event based on the target element
  if (target.matches('button')) {
    console.log('Button clicked!');
  } else if (target.matches('a')) {
    console.log('Link clicked!');
  }
});

Advantages:

1. Efficient: Reduces the number of event listeners.
2. Flexible: Handles dynamic content and changing DOM structures.
3. Easy to implement: Simplifies event handling logic.

Common use cases:

1. Handling clicks on multiple elements (e.g., buttons, links).
2. Managing dynamic content (e.g., added/removed elements).
3. Creating responsive interfaces (e.g., touch events).

Best practices:

1. Use a single event listener per event type.
2. Attach listeners to parent elements instead of individual child elements.
3. Use event.target to identify the original element.
4. Optimize event handling logic for performance.

By using Event Delegation, you can write more efficient, scalable, and maintainable code.