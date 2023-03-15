import { useEffect, useState } from 'react';
import {Link, Navigate} from 'react-router-dom';


export default function OrgViewProfile()
{
    const [org,setOrg] = useState(null);
    const loginid = JSON.parse(localStorage.getItem("loggedUser")).login_id;
 useEffect(() => {

    const orgid = JSON.parse(localStorage.getItem("loggedOrganization"));
    console.log(orgid)
    setOrg(orgid);

    }, []);

    const deleteprofile=(e)=>{
     
        fetch('http://localhost:8080/deleteprofile?login_id='+e)
        .then(resp=>resp.json())
     
        alert("successfully Deleted")
        Navigate('/login')
      }
  


    return (
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

    <div class="row">
                    <div class="col-md-12">
                        <h4 class="text-center mb-4"> My Profile</h4>
                        
                            <div class="table-wrap">
                                <table class="table">
                                <thead class="thead-primary">
                                    <tr>
                                    <th>Organization Name</th>
                                    <td> {org && org.org_name}</td>                  
                                    </tr>
                                
                                    <tr>
                                    <th>Organization Email</th>
                                    <td> {org && org.login_id.email}</td>                      
                                   </tr>
                                   <tr>
                                    <th>Organization Contact no</th>
                                    <td> {org && org.login_id.contactno}</td>                      
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
                                <Link className="btn btn-info"to={'/orgupdateprofile'}>Update</Link>
                               &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                <button type="submit" class="btn btn-danger"onClick={()=>{deleteprofile(org.login_id.login_id)}}>Delete</button>

                                </div>

        </div>
        </div>
        </div>
    )
}