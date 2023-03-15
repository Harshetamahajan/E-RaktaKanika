import { useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
export default function BbUpdateProfile()
{
    const loginid=JSON.parse(localStorage.getItem("loggedbloodbank")).login_id.login_id;
      console.log(loginid)
    const [email,setEmail] =useState([]);
    console.log(email)
    const [contactno,setContactno] =useState([]);
    console.log(contactno)
  const  navigate = useNavigate();


    const [bloodbank ,setBloodBank]=useState(null);
    useEffect(()=>{
     


      fetch('http://localhost:8080/getbloodbank?login_id='+loginid)
      .then((res)=>res.json())
      .then(obj=>{
        localStorage.setItem("loggedbloodbank",JSON.stringify(obj))
        setBloodBank(obj);
      })
    },[]);


    const updatepro=(e)=>{
        e.preventDefault()
        fetch(`http://localhost:8080/bbupdateprofile/${email}/${contactno}/${loginid}`)
        .then(resp=>resp.json())
        .then(obj=>
            {console.log(obj);
            alert("Profile Updated");
            navigate("/bbprofile")
            }
        )
       
    }
 
    return(
        <div>
         <div>
         <h1 className="bg-danger text-white">E-Raktkanika   </h1>
           <nav className="navbar navbar-expand-sm bg-light mb-3">
           <div className="container-fluid">
           <ul className="navbar-nav">
             <li className="nav-item">
             <Link to="#" className="nav-link px-3"><h3> {bloodbank && bloodbank.bb_name}</h3></Link>
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
             <Link to="/logout" className="nav-link px-3">Logout</Link>
             </li>
         </ul>
         </div>
         </nav>
         </div>
         <div className="row">
                       <div className="col-md-12">
                           <h4 className="text-center mb-4">Blood Bank Profile</h4>
                               <div className="table-wrap">
                                   <table className="table">
                                   <thead className="thead-primary">
                                   <tr>
                                       <th>Blood Bank Id</th>
                                       <td> {bloodbank && bloodbank.bb_id}</td>                      
                                       </tr>
                                       <tr>
                                       <th>Blood Bank Name</th>
                                       <td> {bloodbank && bloodbank.bb_name}</td>                      
                                       </tr>
                                       <tr>
                                       <th>Blood Bank Register Number</th>
                                       <td> {bloodbank && bloodbank.bb_regno}</td>                      
                                       </tr>
                                       <tr>
                                       <th>Blood Bank Email</th>
                                       <td>
                                        <div className="form-group mt-3">
                                            <input type="text"className="form-control mt-1"placeholder="Enter BloodBank Email"
                                            onChange={(e)=>setEmail(e.target.value)}/>
                                        </div>
                                        </td>                      
                                        </tr>
                                        <tr>
                                       <th>Blood Bank contactno</th>
                                       <td>   <div className="form-group mt-3">
                                            <input type="text"className="form-control mt-1"placeholder="Enter BloodBank contactno"
                                            onChange={(e)=>setContactno(e.target.value)}/>
                                        </div></td>                      
                                      </tr>
                                      <tr>
                                       <th>Blood Bank Area</th>
                                       <td> {bloodbank && bloodbank.address_id.area}</td>                      
                                      </tr>
                                      <tr>
                                       <th>City</th>
                                       <td> {bloodbank && bloodbank.address_id.city}</td>                      
                                      </tr>
                                      <tr>
                                       <th>Pincode</th>
                                       <td> {bloodbank && bloodbank.address_id.pincode}</td>                      
                                      </tr>                          
                                   </thead>
                                   </table>
                                   <Link className="btn btn-info"to={`/updateprofile`}  onClick={(e)=>{updatepro(e)}} >Update</Link>
                                   </div>
                                   </div>
   </div>
         </div>
       )
       
}


