import { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
export default function OrgUpdateProfile()
{
    
    const [email,setEmail] =useState([]);
    console.log(email)
    const [contactno,setContactno] =useState([]);
    console.log(contactno)

    const loginid = JSON.parse(localStorage.getItem("loggedUser")).login_id;
    console.log(loginid)
    const [org ,setOrg]=useState(null);
    useEffect(()=>{
     
 
       
        
         fetch("http://localhost:8080/getorg?login_id="+loginid)
         .then((res)=>res.json())

         .then(obj => {
           localStorage.setItem("loggedOrganization",JSON.stringify(obj))
           setOrg(obj);
         
      })
    },[]);


    const updatepro=(e)=>{
        e.preventDefault()
        fetch(`http://localhost:8080/orgupdateprofile/${email}/${contactno}/${loginid}`)
        .then(resp=>resp.json())
        .then(obj=>
            {console.log(obj);
            alert("Profile Updated");
            }
        )
       
    }
 
    return(
        <div>
         <div>
         <div className="App">
        <h1 className="bg-danger text-white">E-Raktkanika   </h1>
        
        <nav className="navbar navbar-expand-sm bg-light mb-3">
        
        <div className="container-fluid">
        <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="#" className="nav-link px-3"><h3>Welcome {org && org.org_name}</h3></Link>
          </li>
          <li className="nav-item">
          <Link to="/organizecamp" className="nav-link px-3">Organize Camp</Link>
          </li>
          <li className="nav-item">
          <Link to="/orgprofile" className="nav-link px-3">View Profile</Link>
          </li>
          <li className="nav-item">
          <Link to="/mycamps" className="nav-link px-3">My Camps</Link>
          </li>
          
          <li className="nav-item">
          <Link to="/logout" className="nav-link px-3">Logout</Link>
          
          </li>
          
        </ul> 
      </div>
    </nav>

    
    </div>
         </div>
         <div className="row">
                       <div className="col-md-12">
                           <h4 className="text-center mb-4">My Profile</h4>
                               <div className="table-wrap">
                                   <table className="table">
                                   <thead className="thead-primary">
                                   <tr>
                                   <th>Organization Name</th>
                                    <td> {org && org.org_name}</td>                      
                                       </tr>
                                       <tr>
                                       <th>Organization Email</th>
                                       <div className="form-group mt-3">
                                            <input type="text"className="form-control mt-1"placeholder="Enter new Email"
                                            onChange={(e)=>setEmail(e.target.value)}/>
                                        </div>                     
                                       </tr>
                                       <tr>
                                       <th>Organization Contact no</th>
                                       <td>   <div className="form-group mt-3">
                                            <input type="text"className="form-control mt-1"placeholder="Enter new contactno"
                                            onChange={(e)=>setContactno(e.target.value)}/>
                                        </div></td>                             
                                       </tr>
                            
                                        
                                      <tr>
                                      <th>Organization Area</th>
                                    <td> {org && org.address_id.area}</td>                  
                                      </tr>
                                      <tr>
                                      <th>City</th>
                                    <td> {org && org.address_id.city}</td>                     
                                      </tr>
                                      <tr>
                                      <th>Pincode</th>
                                    <td> {org && org.address_id.pincode}</td>                      
                                      </tr>                          
                                   </thead>
                                   </table>
                                   <Link className="btn btn-info"to={'/orgupdateprofile'}  onClick={(e)=>{updatepro(e)}} >Update</Link>
                                   </div>
                                   </div>
   </div>
         </div>
       )
       
}
