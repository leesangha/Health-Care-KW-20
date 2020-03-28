import React, { useEffect, useState } from "react";
import "./Recommendation.scss"
import Food from "./Food";
import {PacmanLoader} from "react-spinners";

function getFoodImage(foodList) {
  if(foodList === null || foodList === undefined)
    return;

  let imgSrcList = [];
  for(let i = 0; i < 6; ++i) {
    const imgSrc = `http://localhost:4002/images/${foodList[i]}.png`;
    imgSrcList.push(imgSrc);
  }
  console.log(imgSrcList);

  return imgSrcList.map(src => {
    return <Food key={src} imageSrc={src} />
  });
}

function Recommendation() {
  const [foodList, setFoodList] = useState(null);

  useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem('info'));
    const userNumber = userInfo[0].user_no;

    fetch('/userData/preference', {
        method: "POST",
        body: JSON.stringify({userNumber: userNumber}),
        headers: {
          "Content-Type":"application/json",
          "Accept":"application/json"
        }
      }
    )
      .then(req => req.json())
      .then(data => {
        let predictedFoodList = [];
        console.log(data.pref)
        data.pref.forEach(obj => predictedFoodList.push(obj.food_no));
        setFoodList(predictedFoodList);
      });
  }, []);


  return foodList === null || foodList === undefined
    ? (
      <div className="loader">
        <PacmanLoader
          size={20}
          color={'#646464'}
        />
      </div>
    ) : (
      <article className="recommendation">
        <h1>이런 음식 어때요? </h1>
        {getFoodImage(foodList)}
      </article>
    );
}

export default Recommendation;