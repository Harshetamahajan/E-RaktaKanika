import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function UnapprovedHp()
{
  
  const navigate = useNavigate();

  const[hp,sethp]=useState([]);
  useEffect(()=>{
    const gethp=async()=>{
      const res=await fetch('http://localhost:8080/unapprovedHp')
      const getdata=await res.json();
      sethp(getdata);
      console.log(getdata);
    }
    gethp();
  },[]);


const approve=(e)=>{
  fetch('http://localhost:8080/approveHp?login_id='+e)
  .then(resp=>resp.json())
  navigate('/unapprovedHp')
  alert("Hospital approved")
  


}


  return (
<div>
    <div className="App">
        <h1 className="bg-danger text-white">E-Raktkanika   </h1>
        <h3>Welcome  Admin</h3>
        <nav className="navbar navbar-expand-sm bg-light mb-3">
       
        <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link to="/unapprovedHp" className="nav-link px-3">Approve Hospital</Link>
          </li>
          <li className="nav-item">
          <Link to="/unapprovedBB" className="nav-link px-3">Approve BloodBank</Link>
          </li>
          
          <li className="nav-item">
          <Link to="/removeUsers" className="nav-link px-3">Remove profile</Link>
          </li>
          <li className="nav-item">
         
          <li className="nav-item">
          <Link  className="nav-link px-3"></Link>
          </li>
          <li className="nav-item">
          <Link  className="nav-link px-3"></Link>
          </li>
          </li>
          <li className="nav-item">
          <Link to="/logout" className="nav-link px-3">Logout</Link>
         
          </li>
         
        </ul>
      </div>
    </nav>
    </div>   



    <div>
    <table class="table">
    <thead>
    <tr>
      <th scope="col">Hospital ID</th>
      <th scope="col">Hospital Name</th>
      <th scope="col">Hospital Regno</th>
      <th scope="col">Contact No.</th>
      <th scope="col">Area</th>
      <th scope="col">City</th>
      <th scope="col">Pincode</th>
    </tr>
  </thead>
     
<tbody>
    {
     
      hp.map((gets)=>(
      <tr>
        <td>{gets.hp_id}</td>
        <td>{gets.hp_name}</td>
        <td>{gets.hp_regno}</td>
        <td>{gets.login_id.contactno}</td>
        <td>{gets.address_id.area}</td>
        <td>{gets.address_id.city}</td>
        <td>{gets.address_id.city}</td>
        <td><button type="submit" className="btn btn-primary" onClick={() => {approve(gets.login_id.login_id) }}>
              
            Approve</button></td>
       
       
      </tr>
      )
      )
    }
    </tbody>
    </table>
    </div>
    </div>
  );
}

