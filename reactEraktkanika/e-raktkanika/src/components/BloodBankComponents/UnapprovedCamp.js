import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function UnapprovedCamps()
{

  const navigate = useNavigate();
  const [bloodbank ,setBloodBank]=useState(null);

  const[c,setC]=useState([]);
  useEffect(()=>{

    const loginid=JSON.parse(localStorage.getItem("loggedUser")).login_id;
    fetch('http://localhost:8080/getbloodbank?login_id='+loginid)
    .then((res)=>res.json())
    .then(obj=>{
      localStorage.setItem("loggedbloodbank",JSON.stringify(obj))
      setBloodBank(obj);
  })

    const getc=async()=>{
      const res=await fetch('http://localhost:8080/unapprovedcamps')
      const getdata=await res.json();
      setC(getdata);
      console.log(getdata);
    }
    getc();
  },[]);


const approve=(e)=>{
  fetch('http://localhost:8080/approveCamps?cid='+e)
  .then(resp=>resp.json())
  alert("Camp Approved")
  navigate('/unapprovedcamps')
  


}


    return (
        <div>
        
        <div>
           
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
      
<div>
    <table class="table">
    <thead>
    <tr>
      <th scope="col">Camp ID</th>
      <th scope="col">Camp Name</th>
    
    </tr>
  </thead>
     
<tbody>
    {
     
      c.map((gets)=>(
      <tr>
        <td>{gets.cid}</td>
        <td>{gets.cname}</td>
        
        <td><button type="submit" className="btn btn-primary" onClick={() => {approve(gets.cid) }}>
              
            Approve</button></td>
       
       
      </tr>
      )
      )
    }
    </tbody>
    </table>
    </div>
</div>

    )
}