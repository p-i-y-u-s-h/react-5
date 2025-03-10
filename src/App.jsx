import { useEffect ,useState } from "react"

function App(){

  const [count , setCount ] = useState(0);

  function increaseCount (){
    setCount(count+1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return <div>
    <div style={{ display: "flex", alignItems: "center" }}>
  <div
    style={{
      background: "red",
      color: "white",
      borderRadius: "50%",
      minWidth: 20,
      height: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12,
      fontWeight: "bold",
    }}
  >
    {count}
  </div>
</div>

      <img style={{cursor:"pointer"}}
      src="https://cdn-icons-png.flaticon.com/512/472/472371.png"
       width={20}/>
</div>
}

export default App