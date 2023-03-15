import {Link, Navigate, Route, Routes} from 'react-router-dom';
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function IUserRequest()
{
   const navigate = useNavigate();
    const [qty_req, setQuantity ]= useState('');




   
    const sendReqData = (e) => {
      e.preventDefault();
      const reqOptions = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },




      }




      const bbid=localStorage.getItem("bb_id")
   // console.log("bbid:"+bbid);
 
    const blood_grp=localStorage.getItem("blood_grp")
    //console.log("blood_grp:"+blood_grp);




    const loginid=JSON.parse(localStorage.getItem("loggedUser")).login_id;
    //console.log("loginid:"+loginid);
      fetch(`http://localhost:8080/saverequest/${bbid}/${loginid}/${blood_grp}/${qty_req}`, reqOptions)
      .then(resp => {
                        if(resp.ok)
                        {
                          return resp.text();
                        }
                        else{
                          throw new Error("Server Error");
                        }
                    })
                    .then(text => text.length ? JSON.parse(text) : {})
                    .then(obj => {
                      //localStorage.setItem("requestObject",JSON.stringify(obj))
                      localStorage.setItem("bb_id",obj.bb_id.bb_id)
                          alert("Request send succesfully...!!!");
                         navigate('/iuser_home')
                           
                         
                        })
     
  }
   return(




      <div>
      <div className="App">
        <h1 className="bg-danger text-white">E-Raktkanika</h1>
        <nav className="navbar navbar-expand-sm bg-light mb-3">
       
        <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link to="/showbloodbanks_iuser" className="nav-link px-3">Go Back</Link>
          </li>
        </ul>
        </div>
        </nav>
        </div>




    <div className="Auth-form-container">
         
         <div>
           <form className="Auth-form">
             <div className="Auth-form-content">
               {/* <h3 className="Auth-form-title">Enter Quantity</h3> */}
                 <div className="form-group mt-3">
                 <label>Enter Quantity</label>
                 <input
                   type="number"
                   id="qty_req"
                   name="qty_req"
                   className="form-control mt-1"
                   placeholder="Enter quantity of blood (eg.2 bags)"
                   onChange={(e) => setQuantity(e.target.value)}
                    />
                 </div>
                 <div className="d-grid gap-2 mt-3">
                 <button type="submit" className="btn btn-primary" onClick={(e) => { sendReqData(e) }} >
                   Make Request
                 </button>
               
               </div>
             
             </div>
           </form>
         </div>
         </div>
       
    </div>
   )
}









