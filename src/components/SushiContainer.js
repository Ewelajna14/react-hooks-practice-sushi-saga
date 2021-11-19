import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, eatSushi, onMoreClick, handlePay}) {

const sushisList=sushis.map((sushi)=>{
return (
  <Sushi  key={sushi.id} sushi={sushi} eatSushi={eatSushi} onClickPay={handlePay}/>
)
})

  return (
    <div className="belt">
      {sushisList}
      <MoreButton sushis={sushis} onMoreClick={onMoreClick}/>
    </div>
  );
}

export default SushiContainer;
