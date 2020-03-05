import React, {useEffect} from "react";
import './DateAnalytic.scss';

// 열량 : calorie
// 탄수화물 : carbohydrate
// 단백질 : protein
// 지방 : fat
// 당류 : sugar
// 나트륨 : salt
// 콜레스테롤 : cholesterol
// 포화지방산 : saturated fat
// 트랜스지방산 : trans fat

// 사용자의 영양 권장량을 가져오는 함수
function getNutritionRecommended() {

}

// 사용자의
function getNutritionIntake() {

}

function DateAnalytic() {
  return (
    <article className="analytic">
      <h2>일일 통계</h2>

      <ul>
        <li>
          <dfn>열량</dfn>
          <div className="a" />
          <p>100</p>
          <p>kcal</p>
        </li>
        <li>
          <dfn>탄수화물</dfn>
          <div className="b" />
          <p>200</p>
          <p>g</p>
        </li>
        <li>
          <dfn>단백질</dfn>
          <div className="c" />
          <p>200</p>
          <p>g</p>
        </li>
        <li>
          <dfn>지방</dfn>
          <div className="d" />
          <p>200</p>
          <p>g</p>
        </li>
        <li>
          <dfn>당류</dfn>
          <div className="e" />
          <p>200</p>
          <p>g</p>
        </li>
        <li>
          <dfn>나트륨</dfn>
          <div className="f" />
          <p>200</p>
          <p>mg</p>
        </li>
        <li>
          <dfn>콜레스테롤</dfn>
          <div className="g" />
          <p>200</p>
          <p>mg</p>
        </li>
        <li>
          <dfn>포화지방산</dfn>
          <div className="h" />
          <p>200</p>
          <p>g</p>
        </li>
        <li>
          <dfn>트랜스지방산</dfn>
          <div className="i" />
          <p>200</p>
          <p>g</p>
        </li>
      </ul>
      <div className="recommended-amount" />
    </article>
  );
}

export default DateAnalytic;