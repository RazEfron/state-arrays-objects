import { useState } from "react";
import "./App.css";

const studentsList = [
  "Angie Diaz",
  "Bo Latt",
  "Brandon Bennett",
  "Carlos Mendoza",
  "Carlos Suero",
  "Daniel Solaque",
  "David Mendoza",
  "Isaac Guerrero",
  "James Scott",
  "Jean Nappoleon",
  "Karyn Huston",
  // "Kat Pelle",
  // "Monique Correa",
  "Hector Zhong",
  "Rodica Chavez",
  // "Sahleem Butler",
  "Sharukh Velupillai",
  "Tobe Obi",
  "Tony Taylor",
  "Victor Rey",
  "Wisdom Wright-Martin",
  "Youssef Mohamed Farouk",
  "Zay Lors",
];

function App() {
  let [students, setStundets] = useState(
    JSON.parse(localStorage.getItem("students")) || studentsList
  );

  let [nextUp, setNextUp] = useState(null);
  let [safe, setSafe] = useState(
    JSON.parse(localStorage.getItem("safe")) || []
  );

  function clickHandler() {
    let currStudent = students.splice(
      Math.floor(Math.random() * students.length),
      1
    )[0];
    // students.splice(students.indexOf(currStudent), 1);
    safe.push(currStudent);
    setStundets([...students]);
    setNextUp(currStudent);
    setSafe([...safe]);
    localStorage.setItem("students", JSON.stringify(students));
    localStorage.setItem("safe", JSON.stringify(safe));
    if (!students.length) resetApp();
  }

  function resetApp() {
    localStorage.removeItem("students");
    localStorage.removeItem("safe");
    setStundets(studentsList);
    setSafe([]);
    setNextUp(null);
  }

  return (
    <div className="App">
      <h1>Cold Calling App</h1>

      <div className="main-area">
        <div className="student-list">
          <h2>Fellows</h2>
          {students.map((student) => (
            <h3>{student}</h3>
          ))}
        </div>
        <div className="next-up">
          <h2>Next up...</h2>
          <h3>{nextUp}</h3>
          <button onClick={clickHandler}>Click to choose next fellow</button>
        </div>
        <div className="student-list safe">
          <h2>Safe</h2>
          {safe.map((student) => (
            <h3>{student}</h3>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
