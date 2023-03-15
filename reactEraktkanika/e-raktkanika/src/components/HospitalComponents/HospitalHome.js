import { useEffect, useState } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
export default function HospitalHome()
{


   const[hospital,setHospital]=useState(null);
   useEffect(()=>{
    const loginid=JSON.parse(localStorage.getItem("loggedUser")).login_id;




    fetch('http://localhost:8080/gethospital?login_id='+loginid)
    .then((res)=>res.json())
    .then(obj=>{
      localStorage.setItem("loggedHospital",JSON.stringify(obj))
      setHospital(obj);
    })
   },[]);




 
    return(
        <div className="App">
            {/* <h1> Welcome {hospital && hospital.hp_name}</h1> */}
        <nav className="navbar navbar-expand-sm bg-light mb-3">
       
        <div className="container-fluid">
         
        <ul className="navbar-nav">
         <li className="nav-item">
          <Link to="#" className="nav-link px-3"><h3>Welcome {hospital && hospital.hp_name}</h3></Link>
          </li>
          <li className="nav-item">
          {/* <button onClick={() => this.setState({showForm: true}) }>Search</button> */}
          <Link to="/search" className="nav-link px-3">Search</Link>
          </li>
          <li className="nav-item">
          <Link to="/hpviewprofile" className="nav-link px-3">View Profile</Link>
          </li>
          <li className="nav-item">
          <Link to="/trackstatus" className="nav-link px-3">Track Status</Link>
          </li>
         
          <li className="nav-item">
          <Link to="/logout" className="nav-link px-3">Logout</Link>
         
          </li>
         
        </ul>
      </div>
    </nav>
   
    </div>
       
    )
}
















