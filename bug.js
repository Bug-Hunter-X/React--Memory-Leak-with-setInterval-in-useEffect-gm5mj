```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval - missing cleanup function
    setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```