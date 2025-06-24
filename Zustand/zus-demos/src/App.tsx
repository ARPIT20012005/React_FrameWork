import OtherComponent from "./OtherComponent"
import { useCounter } from "./store"


const App = () => {

 // const count = useCounter((state) => state.count);
 // const {count, increment, decrement} = useCounter();
    const { count } = useCounter()
  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
        <h1>Count:{count}</h1>
        <OtherComponent />
      {/* <button onClick={increment} >Increment</button>
      <button onClick={decrement} >Decrement</button> */}
    </div>
  )
}

export default App