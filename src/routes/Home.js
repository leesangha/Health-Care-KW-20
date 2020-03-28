import React, {useState,useEffect} from "react";
import "./Home.scss"
import Recommendation from "../components/Recommendation";
import DateAnalytic from "../components/DateAnalytic";
import Header from "../components/Header";
import AddButton from "../components/AddButton";

function Home({isLogin, history}) {
  const [list, setList] = useState([]);
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
    setList(data);
  });
  console.log(list);
  },[]);
 

  return (
    <>
      <Header />
      <AddButton />
      <section>
        <DateAnalytic />
        <Recommendation list = {list} />
      </section>
    </>
  );
}

export default Home;