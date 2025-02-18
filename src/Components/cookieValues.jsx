export default function Button() {
    const [cursorCount, setCursorCount] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        if (cursorCount !== 0) {
          console.log("Purchased!");
        } else {
          console.log("No cursor purchased");
        }
      }, 1000);
  
      return () => clearInterval(interval); // Cleanup to prevent multiple intervals
    }, [cursorCount]); // Dependency array to re-run only when cursorCount changes
    return (
      <>
        <button onClick={() => setCursorCount((prev) => prev + 1)}>Cursor</button>
        <p>Cursor = {cursorCount}</p>
      </>
    );
  }