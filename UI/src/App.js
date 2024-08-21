
import './App.css';
import { Routes , Route } from 'react-router-dom';



import Header from './components/headerComponent/header';
import Banner from './components/BannerComponent/Banner';

import Home from './components/HomeComponent/Home';
import Footer from './components/footerComponent/footer';
import About from './components/AboutComponent/About';
import Contact from './components/ContactComponent/Contact';
import Service from './components/ServiceComponent/Service';
import Register from './components/RegisterComponent/Register';
import Login from './components/LoginComponent/Login';
import Adminhome from './components/AdminHomeComponent/AdminHome';
import Userhome from './components/UserHomeComponent/UserHome';
import Logout from './components/LogoutComponent/Logout';
import Manageusers from './components/ManageusersComponent/Manageusers';
import EPAdmin from './components/EditProfileAdminComponent/EPAdmin';
import CPAdmin from './components/CPAdminComponent/CPAdmin';
import Addcategory from './components/AddCategoryComponent/Addcategory.';
import Addsubcategory from './components/AddSubCategoryComponent/Addsubcategory';
import CPUser from './components/CPUserComponent/CPUser';
import EPUser from './components/EditProfileUserComponent/EPUser';
import Viewproductcategory from './components/ViewProductCategoryComponent/Viewproductcategory';
import Viewproductsubcategory from './components/ViewProductSubCategoryComponent/Viewproductsubcategory';
import Addproduct from './components/AddProductComponent/Addproduct';
import Viewproduct from './components/ViewProductComponent/Viewproduct';
import Bidproduct from './components/BidproductComponent/Bidproduct';
import Viewbid from './components/ViewBidComponent/Viewbid';
import Viewbidproduct from './components/ViewBidProductComponent/Viewbidproduct.';
import Vpadmin from './components/AdminViewBidProductComponent/vpadmin';
//import Bidhistory from './components/BidhistoryComponent/Bidhistory';

function App() {

  return (
    <>
      <Header />

       <Banner />

       <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/admin' element={<Adminhome />}></Route>
        <Route path='/epadmin' element={<EPAdmin />}></Route>
        <Route path='/cpadmin' element={<CPAdmin />}></Route>
        <Route path='/user' element={<Userhome />}></Route> 
        <Route path='/cpuser' element={<CPUser/>}></Route> 
        <Route path='/epuser' element={<EPUser/>}></Route> 
        <Route path='/logout' element={<Logout />}></Route> 
        <Route path='/Manageusers' element={<Manageusers/>}></Route>
        <Route path='/Addcategory' element={<Addcategory/>}></Route>
        <Route path='/Addsubcategory' element={<Addsubcategory/>}></Route>
        <Route path='/addproduct' element={<Addproduct/>}></Route>
        <Route path='/bidp/:_id' element={<Bidproduct/>}></Route>
        <Route path='/viewpc' element={<Viewproductcategory/>}></Route>
        <Route path='/viewpsc/:catnm' element={<Viewproductsubcategory/>}></Route>
        <Route path='/viewp/:subcatnm' element={<Viewproduct/>}></Route>
        <Route path='/viewbid/:p_id' element={<Viewbid/>}></Route>
        <Route path='/viewbidp' element={<Viewbidproduct/>}></Route>
        <Route path='/vpadmin' element={<Vpadmin/>}></Route>
        
        
       
       </Routes>
    
       <Footer />

    </>
  ); 
}
//<Route path='/bidhistory' element={<Bidhistory/>}></Route>

export default App;
