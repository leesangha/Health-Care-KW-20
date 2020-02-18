import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
    return <div>
        <h1>MAIN</h1>
        <p>THIS iS UNCHANGE PAGE</p>
        <p><b>식단 추천  Welcome to Maet</b></p>
        <Link to ="/login">LOG IN  </Link>
        <br/>
        <br/>
        <Link to ="/SignUp">SIGN UP </Link>

    </div>
}
export default Home;