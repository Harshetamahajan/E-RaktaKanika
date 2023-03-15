import { useEffect, useState } from 'react';
import {Link, Route, Routes} from 'react-router-dom';


export default function OrganizationHome()
{
  const [org,setOrg] = useState(null);
   
 useEffect(() => {

  const loginid = JSON.parse(localStorage.getItem("loggedUser")).login_id;
     console.log(loginid)
      fetch("http://localhost:8080/getorg?login_id="+loginid)
        .then(resp=> {if(resp.ok)
         {
          return resp.text();
         }
         else
         {
          throw new Error("server error")
         }
        })
        .then(text => text.length ? JSON.parse(text):{})
      //.then(resp => resp.json())
      .then(obj => {
        localStorage.setItem("loggedOrganization",JSON.stringify(obj))
        setOrg(obj);
      });

    }, []);



    return(
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

        
    )
}