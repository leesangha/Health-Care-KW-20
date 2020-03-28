import React, {useState, useEffect} from "react";
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
  });
 

  return (
    <>
      <Header />
      <AddButton />
      <section>
        <DateAnalytic />
        <Recommendation list = {list}/>
      </section>
    </>
  );
}

export default Home;