import React from "react";
import "./Recommendation.scss"
import Food from "./Food";

function Recommendation({foodImageList}) {
  console.log(foodImageList);
  return (
    <article className="recommendation">
      <h1>이런 음식 어때요?</h1>
      {foodImageList.map(imageSrc => {
        console.log(imageSrc);
        return (
          <Food key={imageSrc} imageSrc={imageSrc}/>
        );
      })}
    </article>
  );
}

export default Recommendation;