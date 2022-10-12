import { useState } from "react";
import "./App.css";

function App() {
  let [fruits, setFruits] = useState([
    "banana",
    "banana",
    "pineapple",
    "strawberry",
    "banana",
    "pineapple",
    "apple",
    "pear",
    "strawberry",
    "banana",
    "tomato",
    "pineapple",
    "strawberry",
    "pineapple",
  ]);

  function updateFruitArray(currentFruit) {
    fruits.splice(fruits.indexOf(currentFruit), 1);
    // console.log(fruits);
    // const newFruits = fruits.map((fruit) => fruit);
    setFruits([...fruits]);

  }
  // let arr = [1,2,3,4]
  // ..arr => 1,2,3,4

  // function someFunc(first, second, ...arr) { // rest - takes the REST of the arguments and puts in an array
  //   console.log(arr)
  // }
  // someFunc(1,2,3,4)

  return (
    <div className="App">
      {fruits.map((fruit, i) => (
        <div key={fruit - i}>
          <p>{fruit}</p>
          <button onClick={() => updateFruitArray(fruit)}>Buy {fruit}</button>
        </div>
      ))}
    </div>
  );

  //   let [fruits, setFruits] = useState({
  //     banana: 4,
  //     pineapple: 4,
  //     strawberry: 3,
  //     apple: 1,
  //     pear: 1,
  //     tomato: 1,
  //   });

  //   function updateFruitArray(currentFruit) {
  //     fruits[currentFruit]--;
  //     if (!fruits[currentFruit]) fruits[currentFruit] = "Out of Stock";
  //     setFruits({ fruits });
  //   }

  //   return (
  //     <div className="App">
  //       {Object.keys(fruits).map((fruit, i) => (
  //         <div key={`${fruit}-${i}`}>
  //           <p>
  //             {fruit}: {fruits[fruit]}
  //           </p>
  //           <button onClick={() => updateFruitArray(fruit)}>Buy {fruit}</button>
  //         </div>
  //       ))}
  //     </div>
  //   );
}

export default App;
