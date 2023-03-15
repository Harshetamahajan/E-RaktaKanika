import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export default function BloodBankHome()
{
  const [bloodbank ,setBloodBank]=useState(null);
  useEffect(()=>{
    const loginid=JSON.parse(localStorage.getItem("loggedUser")).login_id;
    fetch('http://localhost:8080/getbloodbank?login_id='+loginid)
    .then((res)=>res.json())
    .then(obj=>{
      localStorage.setItem("loggedbloodbank",JSON.stringify(obj))
      setBloodBank(obj);
    })
  },[]);
    return(
     <div>
      <div>
      <h1 className="bg-danger text-white">E-Raktkanika   </h1>
            <nav className="navbar navbar-expand-sm bg-light mb-3">
       
     <div className="container-fluid">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link to="#" className="nav-link px-3"><h3>Welcome {bloodbank && bloodbank.bb_name}</h3></Link>
          </li>
        <li className="nav-item">
          <Link to="/stock" className="nav-link px-3">Manage Stock</Link>
        </li>
        <li className="nav-item">
          <Link to="/bbprofile" className="nav-link px-3"> View Profile</Link>
        </li>
        <li className="nav-item">
          <Link to="/request" className="nav-link px-3">Approve Request</Link>
        </li>
        <li className="nav-item">
        <Link to="/unapprovedCamps" className="nav-link px-3">Approve Camps</Link>
        </li>
        <li className="nav-item">
          <Link to="/logout" className="nav-link px-3">Logout</Link>
          </li>
      </ul>
      </div>
      </nav>
      </div>
       




    </div>




     
    )
}








