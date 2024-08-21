import './Viewproductsubcategory.css'
import { useState , useEffect } from 'react';
import { _subcategoryapiurl } from '../../api.url';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Viewproductsubcategory() {
    
    const params = useParams();
    const  [ scDetails , setSubCategoryDetails ] = useState([]);

    useEffect(()=>{
        axios.get(_subcategoryapiurl+"fetch?catnm="+params.catnm).then((response)=>{
            setSubCategoryDetails(response.data);
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
<h1>View Sub Category List &gt; &gt; {params.catnm} </h1>
<center>
<div id='category_main'>
    {
        
        scDetails.map((row)=>(
            <div class='category_part'>
                <Link to={`/viewp/${row.subcatnm}`}>
                 <img src={`../assets/uploads/subcaticons/${row.subcaticonnm}`} height="100" width="150"/>
                 <br/>
                 <b>{row.subcatnm}</b>
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

export default Viewproductsubcategory;