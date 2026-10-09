import React, { useEffect, useState } from 'react';

function SampleUseEffect() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("counter =", counter);
  });

  function setcount() {
    setCounter(counter + 5);
  }

  return (
    <div>
      <h2 style={{ color: "blue" }}>SampleUseEffect</h2>

      <h1>Counter: {counter}</h1>

      <button onClick={setcount}>Increase Counter</button>

      <p>Check the browser console.</p>
    </div>
  );
}

export default SampleUseEffect;
