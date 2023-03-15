import { useEffect, useState } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import { useNavigate } from "react-router-dom";




export default function SearchBBForHospital()
{
    const [blood_grp, setBlood_grp ]= useState('');
    const [area, setArea ]= useState('');


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




    const navigate = useNavigate();
     
      const sendData = (e) =>
      {
        e.preventDefault();
        fetch(`http://localhost:8080/searchbbforhosp/${blood_grp}/${area}`)
          .then((res) => {
            console.log(res);
            if(res.ok)
            {
              return res.json();
            }
            else
            {
              throw new Error("server Error")
            }
          })
          .then(obj => {
            console.log(JSON.stringify(obj));
            localStorage.setItem("b_banks",JSON.stringify(obj))
            navigate('/showbloodbanks')
          })
          .catch((Error) =>
              console.log(Error)
            // alert("server problem ! sever is down")
          );
      }
       
  return (
   <div>


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


   




    <div className="Auth-form-container">
         
    <div>
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Search For Blood Banks</h3>
          <div className="form-group mt-3">
            <label>Enter Blood Group</label>
            <select
              type="text"
              id="blood_grp"
              name="blood_grp"
              className="form-control mt-1"
              placeholder="Enter Blood Group"
              onChange={(e) => setBlood_grp(e.target.value)}
              >
                <option>select</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            </div>
            <div className="form-group mt-3">
            <label>Enter Area</label>
            <input
              type="text"
              id="area"
              name="area"
              className="form-control mt-1"
              placeholder="Enter area"
              onChange={(e) => setArea(e.target.value)}
               />
            </div>
            <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={(e) => { sendData(e) }} >
              Search
            </button>
           
          </div>
         
        </div>
      </form>
    </div>
    </div>
    </div>
  )
  }
















