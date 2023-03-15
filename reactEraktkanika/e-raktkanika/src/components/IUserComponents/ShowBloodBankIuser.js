import { useEffect, useState } from 'react';
import {Link, Navigate, Route, Routes} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
export default function ShowBloodBankIUser()
{
   
  const navigate = useNavigate();




     const b_banks=JSON.parse(localStorage.getItem("b_banks"))
     
     
     const sendData = (e) =>
     {
      localStorage.setItem("bb_id",e.bb_id.bb_id)
      localStorage.setItem("blood_grp",e.blood_grp)
        navigate('/hprequest_iuser')
     }




    return (
       
        <div >




        <div className="App">
        <h1 className="bg-danger text-white">E-Raktkanika</h1>
        <nav className="navbar navbar-expand-sm bg-light mb-3">
       
        <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link to="/search_iuser" className="nav-link px-3">Go Back</Link>
          </li>
        </ul>
        </div>
        </nav>
        </div>
         
             <div className="form-container">
   
    <div className="login-form">
      <div className="form">
      <h3><i>Available Blood Banks</i></h3>
        <form>
          <div className="input-container">
           
          <table className="table">
                         <thead>
                             <tr>
                                <th scope="co1">Blood Bank</th>
                                 <th scope="co1">Area</th>
                                 <th scope="co1">City</th>
                                 <th scope="co1">Pincode</th>
                                 <th scope="co1">Blood Group</th>
                                 <th scope="co1">Request For Blood</th>
                             </tr>
                         </thead>
                         <tbody>
                             {b_banks.map((e) =>
                             {
                                 return(
                                    <tr>
                                        <td>{e.bb_id.bb_name}</td>
                                        <td>{e.bb_id.address_id.area}</td>
                                        <td>{e.bb_id.address_id.city}</td>
                                        <td>{e.bb_id.address_id.pincode}</td>
                                        <td>{e.blood_grp}</td>
                                        <td><button type="submit" onClick={() => { sendData(e) }}>Request</button></td>
                                    </tr> )
                            })}
                        </tbody>
                    </table>
        </div>
        </form>
       
       
      </div>
      </div>
     
      </div>
     




     
      </div>








   )
}





