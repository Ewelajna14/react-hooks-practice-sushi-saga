import React from "react";

function Sushi({sushi, eatSushi}) {

  const { name, img_url, price, eaten} = sushi

  return (
    <div className="sushi">
      <div className="plate" onClick={()=>eatSushi(sushi)} >
        {eaten ? null : (
          <img
            src={img_url}
            alt={"Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
