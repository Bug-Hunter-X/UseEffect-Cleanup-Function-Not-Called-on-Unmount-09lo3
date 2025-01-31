```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const cleanupRef = useRef(null);

  useEffect(() => {
    cleanupRef.current = () => {
      console.log('Cleanup');
    };
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, []);

  useEffect(() => {
    console.log('Count:', count);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```