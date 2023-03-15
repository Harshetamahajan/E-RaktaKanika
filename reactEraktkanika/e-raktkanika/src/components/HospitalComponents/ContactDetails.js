import { useEffect, useState } from 'react';
import {Link, Navigate, Route, Routes} from 'react-router-dom';
export default function ContactDetails()
{
 




    const bid=JSON.parse(localStorage.getItem("bid"));
    console.log("in contact : "+bid);


    const[bbDetails,setBbDetails]=useState(null);
  useEffect(()=>{
   
   fetch('http://localhost:8080/getbbdetails?bb_id='+bid)
   .then((res)=>res.json())
   .then(obj=>{
     localStorage.setItem("bb_details",JSON.stringify(obj))
     setBbDetails(obj);
   })
  },[]);


   return(
    <div>
        <div className="App">
        <h1 className="bg-danger text-white">E-Raktkanika</h1>
        <nav className="navbar navbar-expand-sm bg-light mb-3">
       
        <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link to="/trackstatus" className="nav-link px-3">Go Back</Link>
          </li>
        </ul>
        </div>
        </nav>
        </div>
       
         {/* <table className="table">
                         <thead>
                             <tr>
                                <th scope="co1">Blood Bank</th>
                                 <th scope="co1">Area</th>
                                 <th scope="co1">City</th>
                                 <th scope="co1">Email</th>
                                 <th scope="co1">Contact</th>
                             </tr>
                         </thead>
                         <tbody>
                             {approve.map((e) =>
                             {
                                 return(
                                    <tr>
                                        <td>{e.bb_id.bb_name}</td>
                                        <td>{e.bb_id.address_id.area}</td>
                                        <td>{e.bb_id.address_id.city}</td>
                                        <td>{e.bb_id.login_id.email}</td>
                                        <td>{e.bb_id.login_id.contactno}</td>
                                    </tr> )
                            })}
                        </tbody>
                    </table>  */}
        {/* <p>{JSON.stringify(approve)}</p> */}
         <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Blood Bank Contact Details</h3>
         
            <label>Blood Bank Name :
                  <b> {bbDetails && bbDetails.bb_name}</b>
                </label>
          <br/>
          <br/>
            <label>Blood Bank Area :
            <b>  {bbDetails && bbDetails.address_id.area}</b>
            </label>
         
            <br/><br/>
         
            <label>Blood Bank City :
            <b>  {bbDetails && bbDetails.address_id.city}</b>
            </label>
         
            <br/><br/>
            <label>Pincode :
            <b>  {bbDetails && bbDetails.address_id.pincode}</b>
            </label>
         
            <br/><br/>
         
         
            <label>Blood Bank Email :
            <b>  {bbDetails && bbDetails.login_id.email}</b>
            </label>
         
            <br/><br/>
         
            <label>Blood Bank Contact :
            <b>  {bbDetails && bbDetails.login_id.contactno}</b>
            </label>
            <br/><br/>
         
         
        </div>
      </form>
     
    </div>
 






{/* <div class="row">
                    <div className="col-md-12">
                        <h4 className="text-center mb-4">Blood Bank Details</h4>
                            <div className="table-wrap">
                                <table className="table">
                                <thead className="thead-primary">
                                <tr>
                                    <th>Blood Bank Name</th>
                                    <td> {bbDetails && bbDetails.bb_name}</td>                      
                                    </tr>
                                    <tr>
                                    <th>Email</th>
                                    <td> {bbDetails && bbDetails.login_id.email}</td>                      
                                    </tr>
                                    <tr>
                                    <th>Contact</th>
                                    <td> {bbDetails && bbDetails.login_id.contactno}</td>                      
                                    </tr>
                                    <tr>
                                    <th>Area</th>
                                    <td> {bbDetails && bbDetails.address_id.area}</td>                      
                                   </tr>
                                   <tr>
                                    <th>City</th>
                                    <td> {bbDetails && bbDetails.address_id.city}</td>                      
                                   </tr>
                                   <tr>
                                    <th>Pincode</th>
                                    <td> {bbDetails && bbDetails.address_id.pincode}</td>                      
                                   </tr>
                                                             
                                </thead>
                                </table>
                                </div>
                                </div>
</div> */}
     
    </div>
   
   )
}


