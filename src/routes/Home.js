import React, {useEffect} from "react";
import "./Home.scss"
import Recommendation from "../components/Recommendation";
import DateAnalytic from "../components/DateAnalytic";
import Header from "../components/Header";
import AddButton from "../components/AddButton";

// 추천 모델을 통해서 추천될 음식들의 리스트를 가져옴. - sorting된 음식 번호가 담긴 배열.
// 서버에 저장되어 있는 음식 사진을 가져옴.
// 해당 음식의 사진을 반환함.
// 사진에는 좋아요와 싫어요 버튼이 있어야됨.
function getFoodImage(foodArray) {
  // 서버에서 이미지를 가져오는 부분
  let list = [
    '/images/bob.jpeg', "/images/dubumuchim.jpg", "/images/gaeranmali.jpg", "/images/kimchi.jpg",
    '/images/mulchi.jpg', "/images/musangchae.jpg", '/images/sigmchi.jpg'
  ];
  return list;
}

function Home({isLogin, history}) {
  useEffect(() => {
    if(!isLogin) {
      history.push('/Login');
    }
  });

  return (
    <>
      <Header />
      <AddButton />
      <section>
        <DateAnalytic />
        <Recommendation foodImageList={getFoodImage()} />
      </section>
    </>
  );
}

export default Home;