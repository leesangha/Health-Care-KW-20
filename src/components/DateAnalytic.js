import React, { useEffect } from "react";
import './DateAnalytic.scss';

// 사용자의 영양 권장량을 가져오는 함수
function getNutritionRecommended() {
  return [2600, 390.0, 97.5, 72.2, 520, 200, 300, 15, 2];
}

// 사용자의 일일 영양 섭취량을 가져오는 함수
function getNutritionIntake() {
  return [3000, 200, 97.5, 70, 600, 100, 160, 15, 1.23];
}

function DateAnalytic() {
  const recommended = getNutritionRecommended();
  const intake = getNutritionIntake();
  const ratio = recommended.map((arg, index) =>
    arg !== 0 ? intake[index] / arg : 0
  );
  const nutritionList = [
    'calorie', 'carbohydrate', 'protein', 'fat', 'sugar', 'salt', 'cholesterol',
    'saturated-fat', 'trans-fat'
  ];

  useEffect(() => {
    const getElementsStyle = (nutritionArray) => {
      return nutritionArray.map(nutrition => document.getElementById(nutrition).style);
    };
    const elementsStyle = getElementsStyle(nutritionList);
    for(let i = 0; i < elementsStyle.length; ++i) {
      elementsStyle[i].width = (75 * ratio[i]).toString() + '%';
    }
  }, [nutritionList, ratio]);

  return (
    <article className="analytic">
      {/*<h2>일일 섭취량</h2>*/}

      <ul className="nutrition">
        <li>열량</li>
        <li>탄수화물</li>
        <li>단백질</li>
        <li>지방</li>
        <li>당류</li>
        <li>나트륨</li>
        <li>콜레스테롤</li>
        <li>포화지방산</li>
        <li>트랜스지방산</li>
      </ul>

      <ul className="nutrition-graph">
        <li><div id="calorie" />{intake[0]}kcal</li>
        <li><div id="carbohydrate" />{intake[1]}g</li>
        <li><div id="protein" />{intake[2]}g</li>
        <li><div id="fat" />{intake[3]}g</li>
        <li><div id="sugar" />{intake[4]}g</li>
        <li><div id="salt" />{intake[5]}mg</li>
        <li><div id="cholesterol" />{intake[6]}mg</li>
        <li><div id="saturated-fat" />{intake[7]}g</li>
        <li><div id="trans-fat" />{intake[8]}g</li>
        <div className="recommended-amount" />
      </ul>
    </article>
  );
}

export default DateAnalytic;