import React,{useState,useCallback} from 'react';
function Login({history}){


    const [inputs,setInputs] = useState({
        id:'',
        password:''
    });
    const {id, password} = inputs;
    

    const onChange = useCallback(e=>{
        const {name,value} = e.target;
        setInputs({
            ...inputs,
            [name]:value
        });
    },[inputs]
    );

    const isSuccess = () =>{
        setInputs({
        id:'',
        password:''
        })
    }

    const onClick = ()=>{
        fetch('/process/login',{method: 'POST',body:JSON.stringify(inputs),
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        }})
        .then(res => res.json())
        .then(data => {
            //Login Fail
            if(data.err ==='error')
               {
                console.log('login fail');
                isSuccess();
               }
            else{
            localStorage.setItem('info',JSON.stringify(data));
            console.log(localStorage.getItem('info'));
            //Home
            history.push('/');
            }
            
        });
    }
    return (
        <div>
            <p>로그인 페이지 입니다.</p>
            <br/>
            <p>
                
                <ul>
                   
                    <li>ID</li>
                    <input name = "id"
                    placeholder = "id"
                    onChange = {onChange}
                    value = {id}
                    />
                    <br/>
                    <li>PASSWORD</li>
                     <input name = "password"
                    placeholder = "password"
                    onChange = {onChange}
                    value = {password}
                    />
                    <br/>
                </ul>
            </p>
            <button onClick = {onClick} > 제출</button>
        </div>
    )
}
export default Login;