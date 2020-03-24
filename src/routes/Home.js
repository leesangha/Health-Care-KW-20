import React, {useState, useEffect} from "react";
import "./Home.scss"
import Recommendation from "../components/Recommendation";
import DateAnalytic from "../components/DateAnalytic";
import Header from "../components/Header";
import AddButton from "../components/AddButton";

function Home({isLogin, history}) {
  useEffect(() => {
    if(!isLogin) {
      history.push('/Login');
    }
     //배열 요청 
  fetch('/getImageList',{method: 'POST', body:JSON.stringify({}),
  headers:{
    "Content-Type":"application/json",
    "Accept":"application/json"
  }})
  .then(res => res.json())
  .then(data => {
   console.log(data);
  })
  });
 

  return (
    <>
      <Header />
      <AddButton />
      <section>
        <DateAnalytic />
        <Recommendation />
      </section>
    </>
  );
}

export default Home;