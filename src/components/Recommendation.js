import React from "react";
import "./Recommendation.scss"
import Food from "./Food";

function Recommendation({foodImageList}) {
  return (
    <article className="recommendation">
      <h1>이런 음식 어때요?</h1>
      {foodImageList.map(imageSrc => {
        return (
          <Food key={imageSrc} imageSrc={imageSrc}/>
        );
      })}
    </article>
  );
}

export default Recommendation;