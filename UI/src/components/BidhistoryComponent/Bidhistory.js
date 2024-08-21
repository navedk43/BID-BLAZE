import './Bidhistory.css'
import { useState , useEffect } from 'react';
import {  _productapiurl , _bidapiurl} from '../../api.url';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Bidhistory() {

    const params = useParams();
    const  [ pDetails , setProductDetails ] = useState([]);
    const [highestBids, setHighestBids] = useState({});

    useEffect(()=>{
        axios.get(_productapiurl+"fetch?uid="+localStorage.getItem("email")).then((response)=>{
            setProductDetails(response.data);
        }).catch((error)=>{
            console.log(error);
        });
    },[]);

    // useEffect(() => {
    //     const fetchHighestBids = async () => {
    //       const requests = pDetails.map((product) => {
    //         return axios.get(_bidapiurl + "highest-bid/" + product._id);
    //       });
    //       const results = await axios.all(requests);
    //       const highestBidsObj = {};
    //       results.forEach((result, index) => {
    //         highestBidsObj[pDetails[index]._id] = result.data;
    //       });
    //       setHighestBids(highestBidsObj);
    //     };
    //     if (pDetails.length > 0) {
    //       fetchHighestBids();
    //     }
    //   }, [pDetails]);

    useEffect(()=>{
        
        axios.get(_productapiurl+"fetch?_id="+params._id).then((response)=>{
           setProductDetails(response.data[0]); 
           });

        axios.get(_bidapiurl+"fetch?p_id="+params._id).then((response1)=>{
            var min_bidprice=response1.data[0];

         setHighestBids(min_bidprice);
           })
    },[]);

    console.log("pDetails----->", pDetails);
    console.log("highestBids------>", highestBids);
    
    
   
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
                                <th>Title</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Base Price</th>
                                <th>product Icon</th>
                                <th>Info</th>
                                <th>Bid Amount</th>
                                <th>Status</th>
                            
                            </tr>

                            {
                                pDetails.map((row)=>(
                                    <tr>
                                        <td>{row._id}</td>
                                        <td>{row.title}</td>
                                        <td>{row.subcatnm}</td>
                                        <td>{row.description}</td>
                                        <td>{row.baseprice}</td>
                                        <td>{row.piconnm}</td>
                                        <td>{row.bidprice}</td>
                                        <td>{row.info}</td>
                                        <td>
                        {
                          highestBids[row._id] && highestBids[row._id].uploadUserId === localStorage.getItem("email")?
                            <button>Make Payment</button> :
                            <span>No payment required</span>
                        }
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

export default Bidhistory;