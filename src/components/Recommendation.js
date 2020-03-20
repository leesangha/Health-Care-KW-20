import React, { useEffect,useState } from "react";
import "./Recommendation.scss"
import Food from "./Food";

function getFoodImage(foodArray) {
  // 서버에서 이미지를 가져오는 부분
  let list = [
    '/images/0.jpeg', "/images/1.jpg", "/images/2.jpg", "/images/3.jpg",
    '/images/4.jpg', "/images/5.jpg", '/images/6.jpg'
  ];
  return list;
}

function Recommendation() {
  const UserInfo = sessionStorage.getItem('info');
  const foodImageList = getFoodImage();

  const [user_no, setUser_no] = useState();
  const [foodList, setFoodList] = useState(null);

  useEffect(() => {
      setUser_no(JSON.parse(UserInfo)[0].user_no)
    }
  , [UserInfo]);

  useEffect(() => {
    fetch('/getUserPreference', {method: "POST"})
      .then(req => req.json())
      .then(data => setFoodList(data));
  }, []);

  return (
    <article className="recommendation">
      <h1>이런 음식 어때요?</h1>
      {foodImageList.map(imageSrc => (
        <Food key={imageSrc} imageSrc={imageSrc} num={user_no}/>
      ))}
    </article>
  );
}

export default Recommendation;