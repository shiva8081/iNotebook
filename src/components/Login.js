import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = (props) => {
    const [credential, setcredential] = useState({email:"",password:""});
    let Navigate = useNavigate();
    // const [password, setPassword] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/api/auth/login", {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({ email:credential.email,password:credential.password}),


        });
        const json = await response.json();
        console.log(json)
        if(json.success){
            //save the authtoken and redirect
            localStorage.setItem("token",json.authtoken);
            Navigate("/")
            props.ssalert("succesfully login","success")

        }
        else{
            props.ssalert("password incorrect","danger")
        }

    }
    const onChange = (e) => {
        setcredential({ ...credential, [e.target.name]: e.target.value })
    }
    return (
        <div >
            <h1 className='mt-5'>LOG-IN PAGE</h1>
            <form onSubmit={handleSubmit} className='mt-5'>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credential.email} id="email" onChange={onChange} name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credential.password} onChange={onChange} name="password" id="password" />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}
