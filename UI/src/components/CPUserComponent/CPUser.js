import './CPUser.css'
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../api.url';
import { useNavigate } from 'react-router-dom';


function CPUser() {
    const navigate = useNavigate();

    const [ output , setOutput] = useState();
    const [ opass , setOldPassword] = useState();
    const [ npass , setNewPassword] = useState();
    const [ cnpass , setConfirmNewPassword] = useState();

  

    const handleSubmit=()=>{
        axios.get(_userapiurl+"fetch?email="+localStorage.getItem("email")+"&password="+opass).then((response)=>{
            if(npass==cnpass){
                let updateDetails={ "condition_obj" : {"email":localStorage.getItem("email")}, "content_obj":{"password":cnpass}};
             axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
                setOutput("Password change Successfully...");
                setOldPassword("");
                setNewPassword("");
                setConfirmNewPassword("");
        });
            }
            else
            {
                setOutput("New and Confirm New Password mismatch");
             
                setNewPassword(""); 
                setConfirmNewPassword("");
            }
        }).catch((error)=>{
             setOutput("Invalid Old Password");
          
            setOldPassword("");
        });
       /*  */
    };

    return (

        <>
           {/* About Start */}
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
<div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
<h1 class="mb-4">Change Password Here !</h1>
{output && <p style={{ color: 'green' }}>{output}</p>}
<form >

  <div class="form-group">
    <label for="opass">Old Password:</label>
    <input type="password" class="form-control" value={opass} onChange={ e => setOldPassword(e.target.value) } />
  </div>
  <br></br>
  <div class="form-group">
    <label for="npass">New Password:</label>
    <input type="password" class="form-control" value={npass} onChange={ e => setNewPassword(e.target.value) } />
  </div>
  <br></br>
  <div class="form-group">
    <label for="cnpass">Confirm New Password:</label>
    <input type="password" class="form-control" value={cnpass} onChange={ e => setConfirmNewPassword(e.target.value) } />
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

export default CPUser;