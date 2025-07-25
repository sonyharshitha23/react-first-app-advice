import { useEffect, useState } from "react";
export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }
  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Some Advice!</button>
      <p>
        You got {count} {count > 1 ? "advices" : "advice"}
      </p>
      <Message count={count} />
    </div>
  );
}
function Message(props) {
  return (
    <p>
      You have read {props.count} {props.count > 1 ? "pieces" : "piece"} of
      Advice
    </p>
  );
}
