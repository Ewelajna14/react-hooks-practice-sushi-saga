import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

const[sushis, setSushis]=useState([])
const[position, setPosition]=useState(0)
const[eatenSushi, setEatenSushi]=useState([])
const[money, setMoney]=useState(70)

const sushiNumber = 4


useEffect(()=>{
  fetch(API)
  .then(r=>r.json())
  .then(sushis=>setSushis(sushis))
}, [])

function handleEatSushi(piece){ 

  const remainingMoney = money-piece.price

  if(!piece.eaten && remainingMoney >=0) {
  setMoney(remainingMoney)
  console.log(piece.eaten)

setSushis(sushis.map((sushi)=>sushi.id === piece.id? {...sushi, eaten:true} : sushi))

  if(!eatenSushi.includes(piece.id)){
    let newEat=[...eatenSushi, piece.id]
    setEatenSushi(newEat)  
  }}
}


function handleChangePosition(){
  setPosition(position+4)
}


  return (
    <div className="app">
      <SushiContainer  eatSushi={handleEatSushi} sushis={sushis.slice(position, position+sushiNumber)} onMoreClick={handleChangePosition}/>
      <Table sushis={sushis} plates={eatenSushi} money={money}/>
    </div>
  );
}

export default App;
