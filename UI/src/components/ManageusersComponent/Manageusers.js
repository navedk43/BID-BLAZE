import './Manageusers.css'
import { useState , useEffect } from 'react';
import { _userapiurl } from '../../api.url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Manageusers() {

    const navigate = useNavigate();
    const  [ userDetails , setUserDetails ] = useState([]);

    useEffect(()=>{
        axios.get(_userapiurl+"fetch?role=user").then((response)=>{
            setUserDetails(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    });

    const changeStatus =(s,_id)=> {
        if(s=="block")
        {
            let updateDetails={ "condition_obj" : {"_id":_id}, "content_obj":{"status":0}};
            axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
                alert("user Blocked....");
                navigate("/manageusers");
            });
        }
        else if(s=="verify")
            {
                let updateDetails={ "condition_obj" : {"_id":_id}, "content_obj":{"status":1}};
                axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
                    alert("user Verified....");
                    navigate("/manageusers");
                });
            }
            else
            {
                let deleteDetails={ "data" : {"_id":_id}};
                axios.delete(_userapiurl+"delete",deleteDetails).then((response)=>{
                    alert("user Delete.....");
                    navigate("/manageusers");
                });
            }
    };

    return (

        <>
           {/* About Start */}
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                        <h1 class="mb-4">View & Manage Users Details</h1>

                        <table class="table table-bordered">
                            <tr>
                                <th>User ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>mobile</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>Gender</th>
                                <th>Info</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>

                            {
                                userDetails.map((row)=>(
                                    <tr>
                                        <td>{row._id}</td>
                                        <td>{row.name}</td>
                                        <td>{row.email}</td>
                                        <td>{row.mobile}</td>
                                        <td>{row.address}</td>
                                        <td>{row.city}</td>
                                        <td>{row.gender}</td>
                                        <td>{row.info}</td>
                                        <td>
                                            {row.status==1 && <font color="green">Verified</font>}
                                            {row.status==0 && <font color="Orange">Blocked</font>}
                                        </td>
                                        <td>
                                            {row.status==1 && <font onClick={()=>{changeStatus('block', row._id)}} color="blue">ChangeStatus</font>}
                                            {row.status==0 && <font onClick={()=>{changeStatus('verify', row._id)}} color="blue">ChangeStatus</font>}
                                            <br/>
                                            <font onClick={()=>{changeStatus('delete', row._id)}} color="red">Delete</font>
                                        </td>
                                    </tr> 
                                ))
                            }

                        </table>

                       
                    </div>
                </div>
            </div>
        </div>
        {/* About End */}
        </>
    );
}

export default Manageusers;