import React, { useEffect,useState } from "react";
import "./Recommendation.scss"
import Food from "./Food";

function Recommendation({list}) {
  const [user_no, setUserNo] = useState();
  const UserInfo = sessionStorage.getItem('info');
  useEffect(() => {
    if(UserInfo){
      setUserNo(JSON.parse(UserInfo)[0].user_no);
    }
    else
      console.log('fail');
  },[UserInfo]);
  
  return (
    <article className="recommendation">
      <h1>이런 음식 어때요?</h1>
      {list.map(imageSrc => {
        return (
          <Food key={imageSrc} imageSrc={imageSrc} num = {user_no}/>
        );
      })}
    </article>
  );
}

export default Recommendation;