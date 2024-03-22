import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


export const Signup = (props) => {
    const [credential, setcredential] = useState({name:"",email:"",password:"",cpassword:""});
    const Navigate=useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name,email,password}=credential;
        const response = await fetch("http://localhost:4000/api/auth/createuser", {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({ name,email,password}),


        });
        const json = await response.json();
        console.log(json)
        if(json.success){
            //save the authtoken and redirect
            localStorage.setItem("token",json.authtoken);
            Navigate("/")
            props.ssalert("account created","success")

        }
        else{
            props.ssalert("invalid credential","danger")
        }

    }
    const onChange = (e) => {
        setcredential({ ...credential, [e.target.name]: e.target.value })
    }
    return (
        <div className='conatianer'><h1 className='mt-5'>create tour account</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="name" className="form-control" id="name" name='name' onChange={onChange} aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange}/>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
