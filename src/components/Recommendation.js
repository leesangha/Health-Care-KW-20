import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsDown} from "@fortawesome/free-regular-svg-icons";
import "./Recommendation.scss"

function Food({foodImageList, clickEvent}) {
  /* 미완성
  useEffect(() => {
    const foodContainers = document.getElementsByClassName("food");
    const foodContainer = foodContainers[0];

    for(let i = 0; i < foodContainers.length; i++) {
      const image = foodContainers[i].querySelector("img");
      // image.style.cssText += "width: " + foodContainer.offsetWidth + 'px';
    }
  });
  */

  const [inputs,setInputs] = useState({
    user_id:'1',
    food_id:'1'
  });

  const onClick = () =>{
    
    console.log('click event ');
    //DB 선호도 내리기 
    fetch('/hate',{method: 'POST',body:JSON.stringify(inputs),
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
    }})
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
  }

  return (
    foodImageList.map(imageSrc => (
        <div className="food-container">
          <div className="food">
            <img key={imageSrc} src={imageSrc} alt="foodImage"/>
            <button onClick={onClick}>
              <FontAwesomeIcon size="3x" icon={faThumbsDown}/>
            </button>
          </div>
        </div>
      )
    )
  );
}

export default Food;