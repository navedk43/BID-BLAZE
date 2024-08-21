import './Viewproduct.css'
import { useState , useEffect } from 'react';
import { _productapiurl } from '../../api.url';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Viewproduct() {
    
    const params = useParams();
    const  [ pDetails , setProductDetails ] = useState([]);

    useEffect(()=>{
        axios.get(_productapiurl+"fetch?subcatnm="+params.subcatnm).then((response)=>{

// code for display bid now button if the item is upload in less than 48hour and vice versa
            const fetchProductDetails=response.data;
            var p = fetchProductDetails.map(product=>{
                const now = new Date();
                const initialtime = new Date(product.info);
                const timedifference = Math.abs((now - initialtime)/(1000*60*60));
                return{
                    ...product,
                    timedifference:timedifference
                }


            });
            setProductDetails(p);
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
<h1>View product &gt; &gt; {params.subcatnm} </h1>
{
        
        pDetails.map((row)=>(
<center>
   
<table id='ptable' border="1">
    <tr>
        <td rowSpan="3">
            <center>
            <img src={`../assets/uploads/picons/${row.piconnm}`} height="100" widht="150"  />
            </center>
        </td>
        <td><b>Title : {row.title}</b></td>
    </tr>
    <tr>
        <td><b>Description : {row.description}</b></td>
    </tr>
    <tr>
        <td><b>Base Price : {row.baseprice} </b>
    <br/>
    <br/>
            {row.timedifference > 48? <button className='bid-btn-closed'>Bid Closed</button> :  <Link to={`/bidp/${row._id}`}><button className='bid-btn-run'>Bid now</button></Link>}
        </td>
    </tr>
</table>
<br/>
</center>
 ))
       
}
                    </div>
                </div>
            </div>
        </div>
        {/* About End */}
        </>
    );
}

export default Viewproduct;