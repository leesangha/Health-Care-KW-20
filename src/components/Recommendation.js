import React, { useEffect,useState } from "react";
import "./Recommendation.scss"
import Food from "./Food";

function getFoodImage(foodArray) {
  // 서버에서 이미지를 가져오는 부분
  let list = [
    '/images/0.jpeg', "/images/1.jpg", "/images/2.jpg", "/images/3.jpg",
    '/images/4.jpg', "/images/5.jpg", '/images/6.jpg'
  ];
  //서버로 요청 
  fetch('/getImageList',{method: 'POST', body:JSON.stringify({}),
  headers:{
    "Content-Type":"application/json",
    "Accept":"application/json"
  }})
  .then(res => res.json())
  .then(data => {
   
  })

  return list;
}

function Recommendation() {
  const foodImageList = getFoodImage();
  const [user_no, setUserNo] = useState();
  const UserInfo = sessionStorage.getItem('info');
  useEffect(() => {
    if(UserInfo){
      setUserNo(JSON.parse(UserInfo)[0].user_no);
    }
    else
      console.log('fail');
  },[user_no]);

  return (
    <article className="recommendation">
      <h1>이런 음식 어때요?</h1>
      {foodImageList.map(imageSrc => {
        return (
          <Food key={imageSrc} imageSrc={imageSrc} num = {user_no}/>
        );
      })}
    </article>
  );
}

export default Recommendation;