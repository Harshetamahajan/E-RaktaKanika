import { Link, Navigate } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyCamps()
{
    const [org,setOrg] = useState(null);
    const [camp,setCamp] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
   
        const orgid = JSON.parse(localStorage.getItem("loggedOrganization")).org_id;
        console.log(orgid)
        
        fetch('http://localhost:8080/getcamps?org_id='+orgid)
        .then(resp=> {if(resp.ok)
         {
          console.log(resp);
          return resp.text();
         }
         else
         {
          throw new Error("server error")
         }
        })
        .then(text => text.length ? JSON.parse(text):{})
        .then(obj => {
            localStorage.setItem("allcamps",JSON.stringify(obj))
            console.log(obj);
            setCamp(obj);
            

          });
   
       }, []);
   
       const redirect=(id)=>{
        localStorage.setItem("cid",id)
            console.log(id);
        navigate("/uploadad")
        
      }
    


    return (
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

    <div class="row">
                    <div class="col-md-12">
                        <h4 class="text-center mb-4">My Camps</h4>
                            <div class="table-wrap">
                                <table class="table">
                                <thead class="thead-primary">
                                    <tr>
                                    <th>Camp Name</th>
                                    
                                    <th></th>                        
                                    </tr>  
                                </thead>
                       <tbody>
                       {
                        camp.map((c)=>(
                            <tr>
                            <td>{c.cname}</td>
                            <td><button type="button" class="btn btn-primary" onClick={() => {redirect(c.cid) }}>Upload Advertisement</button></td>
                            
                            </tr>
                        )
                        )
                        }
                       </tbody>
                    </table>
                 </div>
                 </div>
                 </div>


        </div>
    )
                    }