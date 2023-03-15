import { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';


export default function ApproveRequest()
{
    const [bloodbank ,setBloodBank]=useState(null);
    const [approve ,setRequest]=useState(null);
   
    const loginid=JSON.parse(localStorage.getItem("loggedUser")).login_id;
  //  const req_id=JSON.parse(localStorage.getItem("loggedUser")).req_id;
  useEffect(()=>{
   


    fetch('http://localhost:8080/getbloodbank?login_id='+loginid)
    .then((res)=>res.json())
    .then(obj=>{
      localStorage.setItem("loggedbloodbank",JSON.stringify(obj))
      setBloodBank(obj);
    })
  },[]);
 
  useEffect(()=>{
  fetch('http://localhost:8080/getrequest')
    .then((res)=>res.json())
    .then(obj=>{
      localStorage.setItem("loggedrequest",JSON.stringify(obj))
      setRequest(obj);
      console.log(obj);
    })
  },[]);


  const approverequest=(e)=>{
     
    fetch('http://localhost:8080/approvereq?req_id='+e)
    .then(resp=>resp.json())
 
    alert("Request Approved")
    //Navigate('/LoginComp')
  }
 
 


    return(
       
        <div>
           
        <div>
        <h1 className="bg-danger text-white">E-Raktkanika   </h1>
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
            <div className="row">
                    <div className="col-md-12">
                        <h4 className="text-center mb-4">Approve Request</h4>
                            <div className="table-wrap">
                                <table className="table">
                                <thead className="thead-primary">
                                    <tr>
                                    <th>Request_Id</th>
                                    <th>Blood_group</th>
                                    <th>Quantity Request</th>                          
                                    </tr>  
                                </thead>
                      <tbody>
                        {
                               approve && approve.length>0 && approve.map( ap =>{
                                return (
                                    <tr>
                                    <td>{ap.req_id}</td>
                                    <td>{ap.blood_grp}</td>
                                    <td>{ap.qty_req}</td>
                                    <td>{ap.req_status}</td>
                                    <td><button type="submit" className="btn btn-primary" onClick={()=>{approverequest(ap.req_id)}}>Approve</button></td>                          
                                    </tr>
                                )
                            }
               
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
                   
   


