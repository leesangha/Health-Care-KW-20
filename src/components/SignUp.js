import React,{useState,useCallback} from 'react';

function SignUp(){
    const [inputs,setInputs] = useState({
        name:'',
        address:'',
        password:'',
        age: '',
    });
    const {name, address,password,age} = inputs;

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
        name:'',
        address:'',
        password:'',
        age: '',
        })
    }

    const onClick = ()=>{
        fetch('/addUser',{method: 'POST',body:JSON.stringify(inputs),
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        }})
        .then(res => res.json())
        .then(data => {
            console.log(data.text);
            if(data.text !== 'success')
            isSuccess();
        });
    }
    return (
        <div>
            <p>회원가입 페이지 입니다.</p>
            <p>
                서식 
                <ul>
                    <li>이름</li>
                    <input name = "name"
                    placeholder = "name"
                    onChange = {onChange}
                    value = {name}
                    />
                    <br/>
                    <li>ID</li>
                    <input name = "address"
                    placeholder = "address"
                    onChange = {onChange}
                    value = {address}
                    />
                    <br/>
                    <li>PASSWORD</li>
                     <input name = "password"
                    placeholder = "password"
                    onChange = {onChange}
                    value = {password}
                    />
                    <br/>
                    <li>AGE</li>
                    <input name = "age"
                    placeholder = "age"
                    onChange = {onChange}
                    value = {age}
                    />
                </ul>
            </p>
            <button onClick = {onClick} > 제출</button>
        </div>
    )
}
export default SignUp;