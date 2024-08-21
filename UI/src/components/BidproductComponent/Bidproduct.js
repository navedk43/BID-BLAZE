import './Bidproduct.css'
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _categoryapiurl, _productapiurl , _bidapiurl} from '../../api.url';
import { useParams , useNavigate } from 'react-router-dom';


function Bidproduct() {

    const params = useParams();
    const navigate = useNavigate();
    const [output , setOutput] = useState();
    const [pDetails , setProductDetails ] = useState([]);
    const [cPrice , setCurrentPrice ] = useState([]);
    const [BidPrice , setBidPrice] = useState();

    useEffect(()=>{
        
        axios.get(_productapiurl+"fetch?_id="+params._id).then((response)=>{
           setProductDetails(response.data[0]); 
           });

        axios.get(_bidapiurl+"fetch?p_id="+params._id).then((response1)=>{
            var min_bidprice=response1.data[0].bidprice;

         for(let row of response1.data){
            if(min_bidprice<row.bidprice)
            {
                min_bidprice=row.bidprice;
            }
         }
         setCurrentPrice(min_bidprice);
           }).catch((error)=>{
            setCurrentPrice(pDetails.baseprice);
           });
 
    });


    const handleSubmit=(e)=>{
        e.preventDefault();
        var bidDetails={"p_id":params._id, "u_id":localStorage.getItem("email"), "bidprice":parseInt(BidPrice)};
        axios.post(_bidapiurl+"save",bidDetails).then((response)=>{
            setOutput("Bid Implemented Successfully...");
            setBidPrice("");
            navigate("/bidp/"+params._id);
        }).catch((error)=>{
            setOutput("unable to bid , please try again...");
            setBidPrice("")
        });
    }

    


    return (

        <>
           {/* About Start */}
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
 <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
  <h1 class="mb-4">Bid Product here !!!</h1>
  <font style={{"color":"blue"}}>{output}</font>

<table>
    <tr>
        <td>Product ID : </td>
        <td>{pDetails._id}</td>
    </tr>
    <tr>
        <td> Base Price : </td>
        <td>&#8377;{pDetails.baseprice}</td>
    </tr>
    <tr>
        <td> Auction Current Price  : </td>
        <td>{cPrice}</td>
    </tr>
    <tr>
        <td> Enter Your Bid Price : </td>
        <td>
        <form>
        <input type="text" class="form-control" value={BidPrice} onChange={e => setBidPrice(e.target.value)} ></input>
        <br/>
        <button onClick={handleSubmit} type="button" class="btn btn-danger" >Bid Product</button>
        </form>
        </td>
    </tr>
    
</table>

 
 
                    </div>
                </div>
            </div>
        </div>
        {/* About End */}
        </>
    );
}

export default Bidproduct;