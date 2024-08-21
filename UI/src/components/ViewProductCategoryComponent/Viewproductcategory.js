import './Viewproductcategory.css'
import { useState , useEffect } from 'react';
import { _categoryapiurl } from '../../api.url';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Viewproductcategory() {

    const  [ cDetails , setCategoryDetails ] = useState([]);

    useEffect(()=>{
        axios.get(_categoryapiurl+"fetch").then((response)=>{
            setCategoryDetails(response.data);
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
<h1>View  Category List </h1>
<center>
<div id='category_main'>
    {
        
        cDetails.map((row)=>(
            <div class='category_part'>
                <Link to={`/viewpsc/${row.catnm}`}>
                 <img src={`./assets/uploads/caticons/${row.caticonnm}`} height="100" width="150"/>
                 <br/>
                 <b>{row.catnm}</b>
                 </Link>
            </div>
        ))
       
    }


</div>
</center>
                    </div>
                </div>
            </div>
        </div>
        {/* About End */}
        </>
    );
}

export default Viewproductcategory;