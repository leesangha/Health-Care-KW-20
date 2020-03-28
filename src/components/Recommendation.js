import React, { useEffect, useState } from "react";
import "./Recommendation.scss"
import Food from "./Food";
import {PacmanLoader} from "react-spinners";

function getFoodImage(foodArray) {
  // 서버에서 이미지를 가져오는 부분
  let list = [
    '/images/0.jpeg', "/images/1.jpg", "/images/2.jpg", "/images/3.jpg",
    '/images/4.jpg', "/images/5.jpg", '/images/6.jpg'
  ];
  return list;
}

function Recommendation() {
  const foodImageList = getFoodImage();
  const [foodList, setFoodList] = useState(null);

  useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem('info'));
    const userNumber = userInfo[0].user_no;
    console.log(userNumber);

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
        const predictedFoodList = data.pref.map(obj => obj.food_no);
        setFoodList(predictedFoodList);
      });
  }, []);


  return foodList === null ? (
    <div className="loader">
      <PacmanLoader
        size={20}
        color={'#646464'}
      />
    </div>
  ) : (
    <article className="recommendation">
      <h1>이런 음식 어때요? </h1>
      {foodImageList.map(imageSrc => (
        <Food key={imageSrc} imageSrc={imageSrc} />
      ))}
    </article>
  );
}

export default Recommendation;