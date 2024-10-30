/*
 
npx create-react-app my-react-app


--- What is the difference between ReactDOM and React?
While React provides the tools and concepts to define component-based user interfaces, ReactDOM handles the task of rendering those interfaces in a web environment. Together, they form the foundation of React web applications.


--- Choosing between useReducer and useState in React
useState vs. useReducer. useState is a basic Hook for managing simple state transformation, and useReducer is an additional Hook for managing more complex state logic. However, it's worth noting that useState uses useReducer internally, implying that you could use useReducer for everything you can do with useState

Prefer useState if we have:

JavaScript primitives(string, boolean, number) as a state( eg. our first use case )
Simple business logic Different properties that don’t change in any correlated way and can be managed by multiple useState hooks Prefer useReducer if we have:


JavaScript objects or arrays as a state ( eg. our second use case )
Complicated business logic more suitable for a reducer function Different properties tied together that should be managed in one state object


---





