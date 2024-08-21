import './Addproduct.css'
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _categoryapiurl , _subcategoryapiurl , _productapiurl } from '../../api.url';

function Addproduct() {

    const [file, setFile] = useState();
    const [title, setTitle] = useState();
    const [catName, setCatName] = useState();
    const [subCatName, setSubCatName] = useState();
    const [description, setDescription] = useState();
    const [baseprice, setBasePrice] = useState();
    const [output , setOutput] = useState();
    const  [ scDetails , setSubCategoryDetails ] = useState([]);
    const  [ cDetails , setCategoryDetails ] = useState([]);

    useEffect(()=>{
        axios.get(_categoryapiurl+"fetch").then((response)=>{
            setCategoryDetails(response.data);
        }).catch((error)=>{
            console.log(error);
        });
    });

    const fetchSubCat=(catnm)=>{
        setCatName(catnm);
        axios.get(_subcategoryapiurl+"fetch?catnm="+catnm).then((response)=>{
            setSubCategoryDetails(response.data);
        }).catch((error)=>{
            setSubCategoryDetails([]);
        });
    }

    const handleChange=(event)=>{
        setFile(event.target.files[0])
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
         var formData = new FormData();
        formData.append('title', title);
        formData.append('catnm', catName);
        formData.append('subcatnm', subCatName);
        formData.append('description', description);
        formData.append('baseprice', baseprice);
        formData.append('uid', localStorage.getItem("email"));
        formData.append('picon', file);
        const config = {
            'content-type': 'multipart/form-data'
        };
         axios.post(_productapiurl+"save", formData, config).then((response)=>{
         setTitle("");
         setCatName("");
         setSubCatName("");
         setDescription("");
         setBasePrice("");
         setOutput(" Product Added Successfully....");
        }); 
    }

    return (

        <>
           {/* About Start */}
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
  <h1 class="mb-4">Add Product here !!!</h1>
  <font style={{"color":"blue"}}>{output}</font>
  <form>
  <div class="form-group">
        <label for="ptitle">Title:</label>
        <input type="text" class="form-control" value={title} onChange={e => setTitle(e.target.value)} />
    </div>
    <br/>
  <div class="form-group">
        <label for="catnm">Category Name:</label>
        <select class="form-control" value={catName} onChange={e => fetchSubCat(e.target.value)} >
            <option>Select Category</option>
            {
              cDetails.map((row)=>(
                <option>{row.catnm}</option>
              ))
            }
        </select>
    </div>
    <br/>
  <div class="form-group">
        <label for="catnm">Sub Category Name:</label>
        <select class="form-control" value={subCatName} onChange={e => setSubCatName(e.target.value)} >
            <option>Select Sub Category</option>
            {
              scDetails.map((row)=>(
                <option>{row.subcatnm}</option>
              ))
            }
        </select>
    </div>
    <br/>
    <div class="form-group">
        <label for="description"> Description:</label>
        <input type="text" class="form-control" value={description} onChange={e => setDescription(e.target.value)} ></input>
    </div>
    <br/>
    <div class="form-group">
        <label for="baseprice"> Base Price:</label>
        <input type="text" class="form-control" value={baseprice} onChange={e => setBasePrice(e.target.value)} ></input>
    </div>
    <br/>
    <div class="form-group">
        <label for="picon">Product Icon:</label>
        <input type="file" class="form-control"  onChange={handleChange} />
    </div>
    <br/>
    <button onClick={handleSubmit} type="button" class="btn btn-danger" >Add Product</button>
    <br></br>
  </form>
                    </div>
                </div>
            </div>
        </div>
        {/* About End */}
        </>
    );
}

export default Addproduct;