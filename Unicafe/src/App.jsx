import { useState } from "react";

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick=()=>{
    const updateGood = good + 1
    setGood(updateGood)
  }

  return (
    <div>
      <Display text={"code here"} />
      <Button handleClick={handleGoodClick} text={'good'}/>
      <Button handleClick={()=>setNeutral(neutral + 1)} text={'neutral'}/>
      <Button handleClick={()=>setBad(bad + 1)} text={'bad'}/>
      <Display text={"statistics"} />
      <Label text={'good'} quantity={good}/>
      <Label text={'neutral'} quantity={neutral}/>
      <Label text={'bad'} quantity={bad}/>
    </div>
  );
};

const Display = ({ text}) =>(
  <div>
    <h1>{text}</h1>
  </div>
);

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Label = ({text, quantity })=>(
  <div>{text}:{quantity}</div>
)

export default App;
