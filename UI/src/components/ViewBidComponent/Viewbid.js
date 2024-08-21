import './Viewbid.css'
import { useState , useEffect } from 'react';
import {  _bidapiurl } from '../../api.url';
import axios from 'axios';
import {  useParams } from 'react-router-dom';

function Viewbid() {

    const params = useParams();
    const  [ bidDetails , setBidDetails ] = useState([]);

    useEffect(()=>{
        axios.get(_bidapiurl+"fetch?p_id="+params.p_id).then((response)=>{
            setBidDetails(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    });

    

    return (

        <>
           {/* About Start */}
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                        <h1 class="mb-4">View Bidding Details</h1>

                        <table class="table table-bordered">
                            <tr>
                                <th>Bidding ID</th>
                                <th>Product ID</th>
                                <th>User ID</th>
                                <th>Bidding Price</th>
                                <th>Info</th>
                            </tr>

                            {
                                bidDetails.map((row)=>(
                                    <tr>
                                        <td>{row._id}</td>
                                        <td>{row.p_id}</td>
                                        <td>{row.u_id}</td>
                                        <td>{row.bidprice}</td>
                                        <td>{row.info}</td>
                                        
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

export default Viewbid;