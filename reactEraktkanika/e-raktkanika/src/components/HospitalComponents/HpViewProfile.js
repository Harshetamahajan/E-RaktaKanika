import { useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';




export default function HpViewProfile()
{
  const navigate =useNavigate();
  const loginid=JSON.parse(localStorage.getItem("loggedUser")).login_id;
    console.log(loginid);
  const[hospital,setHospital]=useState(null);
  useEffect(()=>{
  



   fetch('http://localhost:8080/gethospital?login_id='+loginid)
   .then((res)=>res.json())
   .then(obj=>{
     localStorage.setItem("loggedHospital",JSON.stringify(obj))
     setHospital(obj);
   })
  },[]);


    const deleteprofile=(e)=>{
     
      fetch('http://localhost:8080/deleteprofile?login_id='+e)
      .then(resp=>resp.json())
   
      alert("successfully Deleted")
      navigate('/login')
    }




    return(
      <div>
      <div>
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
      <div class="row">
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
                                    <td> {hospital && hospital.login_id.email}</td>                      
                                   </tr>
                                   <tr>
                                    <th>Hospital contactno</th>
                                    <td> {hospital && hospital.login_id.contactno}</td>                      
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
                                <Link className="btn btn-info"to={`/hpupdateprofile`}>Update</Link>
                               &nbsp;&nbsp;&nbsp;
                                <button type="submit" className="btn btn-danger"onClick={()=>{deleteprofile(hospital.login_id.login_id)}}>Delete</button>
                                </div>
                                </div>
</div>
      </div>
    )
   
}


















