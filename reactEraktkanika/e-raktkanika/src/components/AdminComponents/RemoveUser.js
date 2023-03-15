import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function RemoveUser()
{
  
  const navigate = useNavigate();

  const[du,setdu]=useState([]);
  useEffect(()=>{
    const getdu=async()=>{
      const res=await fetch('http://localhost:8080/list_to_deactivate')
      const getdata=await res.json();
      setdu(getdata);
      console.log(getdata);
    }
    getdu();
  },[]);


const deactivate=(e)=>{
  fetch('http://localhost:8080/deactivateUser?loginid='+e)
  .then(resp=>resp.json())
  navigate('/RemoveUser')
  alert("User deactivated")
  


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
          <Link to="/removeUsers" className="nav-link px-3">Remove User</Link>
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
      <th scope="col">Login ID</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Contact No.</th>
      <th scope="col">Role Name</th>
    </tr>
  </thead>
     
<tbody>
    {
     
      du.map((gets)=>(
      <tr>
        <td>{gets.login_id}</td>
        <td>{gets.email}</td>
        <td>{gets.password}</td>
        <td>{gets.contactno}</td>
        <td>{gets.role_id.arearole_name}</td>
        <td><button type="submit" className="btn btn-primary" onClick={() => {deactivate(gets.login_id) }}>
              
            Deactivate</button></td>
       
       
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

