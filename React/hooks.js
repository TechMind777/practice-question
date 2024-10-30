/*
Newer Hooks (React 16.8+)

useContext: Handles side effects in function components, similar to lifecycle methods (componentDidMount, componentDidUpdate, and componentWillUnmount).
useState : Allows you to add state to a functional component.
useReducer: A more powerful alternative to useState when dealing with complex state logic.
useRef: Provides a way to access and manipulate DOM elements directly.
 

    1. useEffect(): Replaces componentDidMount, componentDidUpdate, and componentWillUnmount.
    2. useLayoutEffect(): Similar to useEffect, but fires after layout changes.
    3. useMemo(): Memoizes values to avoid unnecessary recalculations.
    4. useCallback(): Memoizes functions to avoid unnecessary re-renders.

    Remember to use the newer hooks (useEffect, useLayoutEffect, useMemo, useCallback) for new projects, as they provide more flexibility and better performance.

    //-------useEffect

    Summary of When useEffect Runs:
        - After every render (if no dependencies are provided).
        - Once after the initial render (if an empty dependency array is provided).
        - When specific dependencies change (if a dependency array is provided).
        - On unmount or before re-running the effect (cleanup phase).

    useEffect(() => {
    // Simulate a data fetch
    const fetchData = async () => {
      const result = await fetch('https://api.example.com/data');
      const json = await result.json();
      setData(json);
    };
    fetchData();
  }, []); // Empty dependency array ensures this runs only once


    //----useLayoutEffect
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        setHeight(divRef.current.offsetHeight); // Measure the height before rendering
    }, []);

      //-----------useMemo
      import { useMemo } from 'react';

       const memoizedData = useMemo(() => {
        // Expensive calculation
        return data.map(item => item * 2);
      }, [data]);

      //------------useCallback
      import { useCallback } from 'react';

      function MyComponent({ data }) {
      
        const memoizedCallback = useCallback(() => {
          // Expensive calculation
          return data.map(item => item * 2);
        }, [data]);

        return (
          <div>
            <ChildComponent callback={memoizedCallback} />
          </div>
        );
      }
--------useEfect
import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []); // Empty array means run only once

  return <p>Timer: {count}</p>;
}

    */