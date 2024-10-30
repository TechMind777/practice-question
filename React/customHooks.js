/*
In React, custom hooks are JavaScript functions that allow you to encapsulate reusable logic using React's hooks (like useState, useEffect, useContext, etc.). They allow you to abstract away complex logic and share it between components without repeating code.

-----useFetch.js
import { useState, useEffect } from 'react';

// Custom Hook: useFetch
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;






---------------
import React from 'react';
import useFetch from './useFetch';

const MyComponent = () => {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default MyComponent;

*/