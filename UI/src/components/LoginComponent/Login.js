import './Login.css'
import { useState } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../api.url';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
    const [ email , setEmail] = useState();
    const [ password , setPassword] = useState();
    const [ output , setOutput] = useState();

    const handleSubmit=()=>{
        const userDetails = { "email":email, "password":password};
        
         axios.post(_userapiurl+"login",userDetails).then((response)=>{
          var users = response.data.userDetails;
          localStorage.setItem("token",response.data.token);
          localStorage.setItem("name",users.name);
          localStorage.setItem("_id",users._id);
          localStorage.setItem("email",users.email);
          localStorage.setItem("address",users.address);
          localStorage.setItem("mobile",users.mobile);
          localStorage.setItem("gender",users.gender);
          localStorage.setItem("city",users.city);
          localStorage.setItem("info",users.info);
          localStorage.setItem("role",users.role);
          users.role=="admin"?navigate("/admin"):navigate("/user");

          setOutput("Login Successfully....");
         // console.log(response);
        }).catch((error)=>{
          setOutput("Invalid  User or Verify Your Account");
          setEmail("");
          setPassword("");
        }) 
  
    }

    return (

        <>
             {/* About Start */}
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
<div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                        <h1 class="mb-4">Welcome to Bid Blaze </h1>
                        <h1 class="mb-4">  login Here !!</h1>
<font color="blue">{output}</font>
<form >

  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" value={email} onChange={ e => setEmail(e.target.value) }/>
  </div>
  <br></br>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" value={password} onChange={ e => setPassword(e.target.value) } />
  </div>
 
  <br></br>
  <button type="button" class="btn btn-success" onClick={handleSubmit}>Submit</button>
</form>
 </div>
                </div>
            </div>
        </div>
        {/* About End */}
        </>
    );
}

export default Login;