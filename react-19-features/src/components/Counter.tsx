import { useActionState } from "react"


async function increment (previousState, formData) {
    console.log(formData.get("name"));
    return previousState + 1;

}
const Counter = () => {

    const [state, formAction] = useActionState(increment, 0);

  return (
    <form>
        <h1 className="text-3xl">{state}</h1>
        <button className="bg-teal-300 p-2" formAction={formAction}>Increment</button>
      <br/>

      <input type="text" placeholder="please enter your name" className="border-2" name="name"/>

    </form>
  )
}

export default Counter