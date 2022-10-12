// 1. How do we use useState

// 1a. What's the first step?
import { useState } from "react";

// 2b. What's the right syntax to use useState ?
const [state, setState] = useState();

// 2. Why do we use an array on the left side in the above answer ?
// useState returns an array to us and we destructure it on the left side.

// 3. How do you change the state?
const [state, setState] = useState();
const [number, setNumber] = useState();
// We use setState to change our state

// 4. Why do we have to use the given "setState" and not change the state directly

let [state, setState] = useState();
state = "something";
// setState is the only way we can let react know that the state has changed and cause a re-render. State should never be mutated directly.

// 5. Would using the "useState" always cause a component to re-render the html it returns?

// useState will only cause a re-render if the previous state is different than the new state

// 6. How do you set a default value for state
const [fruits, setFruits] = useState(["Banana", "Apple"]);

// 7. Why can we use const and not let even though we re-assign the state?
// let/const [number, setNumber]
// It rerenders every time we need to make a change

function App() {
  const [counter, setCounter] = useState(0);

  function changeCounter() {
    setCounter(counter + 1); // => counter = counter + 1
  }

  return <div>{counter}</div>;
}

// 8. When would using const not work?

// 9. When would we need to wrap our named callback function with an empty callback

function SomeComponent() {
  function clickHandler(e, fruit) {}

  return <div onClick={(e) => clickHandler(e, "apple")}>Click me!</div>;
}
//  When our named function takes arguments we will wrap it with an empty fat arrow function
