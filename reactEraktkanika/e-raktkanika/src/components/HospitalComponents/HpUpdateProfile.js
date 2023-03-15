import { useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
export default function HpUpdateProfile()
{
    const loginid=JSON.parse(localStorage.getItem("loggedHospital")).login_id.login_id;
      console.log(loginid)
    const [email,setEmail] =useState([]);
    console.log(email)
    const [contactno,setContactno] =useState([]);
    console.log(contactno)
  const  navigate = useNavigate();




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




    const updatepro=(e)=>{
        e.preventDefault()
        fetch(`http://localhost:8080/updateprofile/${email}/${contactno}/${loginid}`)
        .then(resp=>resp.json())
        .then(obj=>
            {console.log(obj);
            alert("Profile Updated");
            navigate("/hpviewprofile")
            }
        )
       
    }
 
    return(
        <div>
         <div>
         <nav className="navbar navbar-expand-sm bg-light mb-3">
       
       <div className="container-fluid">
       <ul className="navbar-nav">
         <li className="nav-item">
         <Link to="/hpviewprofile" className="nav-link px-3">Go Back</Link>
         </li>
       </ul>
       </div>
       </nav>
         </div>
         <div className="row">
                       <div className="col-md-12">
                           <h4 className="text-center mb-4">Hospital Profile</h4>
                               <div className="table-wrap">
                                   <table className="table">
                                   <thead className="thead-primary">
                                   <tr>
                                    <th>Hospital Id</th>
                                    <td> {hospital && hospital.hp_id}</td>                      
                                    </tr>
                                    <tr>
                                    <th>Hospital Name</th>
                                    <td> {hospital && hospital.hp_name}</td>                      
                                    </tr>
                                    <tr>
                                    <th>Hospital Register Number</th>
                                    <td> {hospital && hospital.hp_regno}</td>                      
                                    </tr>
                                    <tr>
                                       <th>Hospital Email</th>
                                       <td>
                                        <div className="form-group mt-3">
                                            <input type="text"className="form-control mt-1"placeholder="Enter Hospital Email"
                                            onChange={(e)=>setEmail(e.target.value)}/>
                                        </div>
                                        </td>                      
                                        </tr>
                                        <tr>
                                       <th>Hospital contactno</th>
                                       <td>   <div className="form-group mt-3">
                                            <input type="text"className="form-control mt-1"placeholder="Enter Hospital contactno"
                                            onChange={(e)=>setContactno(e.target.value)}/>
                                        </div></td>                      
                                      </tr>
                                      <tr>
                                    <th>Hospital Area</th>
                                    <td> {hospital && hospital.address_id.area}</td>                      
                                   </tr>
                                   <tr>
                                    <th>City</th>
                                    <td> {hospital && hospital.address_id.city}</td>                      
                                   </tr>
                                   <tr>
                                    <th>Pincode</th>
                                    <td> {hospital && hospital.address_id.pincode}</td>                      
                                   </tr>                          
                                   </thead>
                                   </table>
                                   <Link className="btn btn-info"to={`/hpupdateprofile`}  onClick={(e)=>{updatepro(e)}} >Update</Link>
                                   </div>
                                   </div>
   </div>
         </div>
       )
       
}






