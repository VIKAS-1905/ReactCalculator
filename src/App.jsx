import { useState } from "react";
import Container from "./Components/Container";
import MyButton from "./Components/MyButton";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const btnArray = [
    'C', '1', '2',
    '+', '3', '4',
    '-', '5', '6',
    '*', '7', '8',
    '/', '=', '9',
    '0', '.'
  ];

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input));
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <h2>Calculator</h2>

        <input
          type="text"
          value={input}
          readOnly
          style={{
            width: "220px",
            height: "40px",
            fontSize: "18px",
            marginBottom: "20px",
            textAlign: "right"
          }}
        />

       
        <MyButton btnArr={btnArray} onButtonClick={handleClick} />
      </div>
    </Container>
  );
}

export default App;