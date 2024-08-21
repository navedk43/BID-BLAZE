import './header.css';
import { Link } from 'react-router-dom';
import { useEffect , useState } from 'react';
import Auth from '../AuthComponent/Auth';

function Header(){
    const [ HeaderContent , setHeaderContent ] = useState();

    useEffect(()=>{
        if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="admin"){
            setHeaderContent(<>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                  <div class="navbar-nav mx-auto">
                      <a  class="nav-item nav-link active"><Link style={{"color":"#103741"}} to="/admin">Admin Home</Link></a>
                      <a  class="nav-item nav-link "><Link style={{"color":"#103741"}} to="/manageusers">Manage User</Link></a>
                      <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" >Settings</a>
                        <div class="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                            <a  class="dropdown-item"><Link style={{"color":"#103741"}} to="/cpadmin">Change Password</Link></a>
                            <a  class="dropdown-item"><Link style={{"color":"#103741"}} to="/epadmin">Edit Profile</Link></a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" >Manage Category</a>
                        <div class="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                            <a  class="dropdown-item"><Link style={{"color":"#103741"}} to="/addcategory">Add Category</Link></a>
                            <a  class="dropdown-item"><Link style={{"color":"#103741"}} to="/addsubcategory">Add SubCategory</Link></a>
                        </div>
                    </div>
                    <a  class="nav-item nav-link "><Link style={{"color":"#103741"}} to="/vpadmin">View Bid Products</Link></a>
        
                 </div>
                  <a   class="btn btn-primary rounded-pill px-3 d-none d-lg-block"><Link  to="/logout" style={{"color":"#fff"}}>Logout</Link><i class="fa fa-arrow-right ms-3"></i></a>
              </div>
              </>)
        }
        else if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="user"){
            setHeaderContent(<>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                  <div class="navbar-nav mx-auto">
                      <a  class="nav-item nav-link active"><Link style={{"color":"#103741"}} to="/user">User Home</Link></a>
                      <a  class="nav-item nav-link active"><Link style={{"color":"#103741"}} to="/viewpc">View Product</Link></a>
                      <a  class="nav-item nav-link active"><Link style={{"color":"#103741"}} to="/addproduct">Add Product</Link></a>
                      <a  class="nav-item nav-link active"><Link style={{"color":"#103741"}} to="/viewbidp">My Item Bids</Link></a>
                      <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" >Settings</a>
                        <div class="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                            <a  class="dropdown-item"><Link style={{"color":"#103741"}} to="/cpuser">Change Password</Link></a>
                            <a  class="dropdown-item"><Link style={{"color":"#103741"}} to="/epuser">Edit Profile</Link></a>
                        </div>
                        
                    </div>
                    <a  class="nav-item nav-link active"><Link style={{"color":"#103741"}} to="/bidhistory">Bid History</Link></a>
                    
                 </div>
                  <a   class="btn btn-primary rounded-pill px-3 d-none d-lg-block"><Link  to="/logout" style={{"color":"#fff"}}>Logout</Link><i class="fa fa-arrow-right ms-3"></i></a>
              </div>
              </>)
        }
        else {
            setHeaderContent(<>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav mx-auto">
                    <a  class="nav-item nav-link active"><Link style={{"color":"#103741"}} to="/">Home</Link></a>
                    <a  class="nav-item nav-link"><Link style={{"color":"#103741"}} to="/about">About </Link></a>
                    <a  class="nav-item nav-link"><Link style={{"color":"#103741"}} to="/contact">Contact</Link> </a>
                    <a  class="nav-item nav-link"><Link style={{"color":"#103741"}} to="/service">Service</Link></a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" >Pages</a>
                        <div class="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                            <a  class="dropdown-item">Blogs</a>
                            <a  class="dropdown-item">Testimonials</a>
                        </div>
                    </div>
                    <a  class="nav-item nav-link"><Link style={{"color":"#103741"}} to="/register">Register</Link></a>
                </div>
                <a   class="btn btn-primary rounded-pill px-3 d-none d-lg-block"><Link  to="/login" style={{"color":"#fff"}}>Login</Link><i class="fa fa-arrow-right ms-3"></i></a>
            </div>
            </>)
        }
    });

    return (
        <>

          < Auth />

          {/* Navbar Start */}
        <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
            <a href="index.html" class="navbar-brand">
                <h1 class="m-0"><i class="fa fa-book-reader me-3"></i>Bid Blaze</h1>
            </a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
           
         { HeaderContent }
        </nav>
        {/* Navbar End */}
        </>
    );
}

export default Header;