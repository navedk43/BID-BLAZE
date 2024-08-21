import './vpadmin.css'
import { useState , useEffect } from 'react';
import {  _productapiurl} from '../../api.url';
import axios from 'axios';


function Vpadmin() {

    const  [ pDetails , setProductDetails ] = useState([]);

    useEffect(()=>{
        axios.get(_productapiurl+"fetch").then((response)=>{
            setProductDetails(response.data);
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
                                <th>Product ID</th>
                                <th>User ID</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Base Price</th>
                                <th>product Icon</th>
                                <th>Info</th>
                            </tr>

                            {
                                pDetails.map((row)=>(
                                    <tr>
                                        <td>{row._id}</td>
                                        <td>{row.uid}</td>
                                        <td>{row.title}</td>
                                        <td>{row.subcatnm}</td>
                                        <td>{row.description}</td>
                                        <td>{row.baseprice}</td>
                                        <td>{row.piconnm}</td>
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

export default Vpadmin;