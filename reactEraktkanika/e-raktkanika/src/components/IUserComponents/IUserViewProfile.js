import { useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';








export default function IUserViewProfile()
{
    const navigate = useNavigate();
    const[IUser,setIUser]=useState(null);
    const loginid=JSON.parse(localStorage.getItem("loggedUser")).login_id;
 
    useEffect(()=>{
     
 
     fetch('http://localhost:8080/getiuser?login_id='+loginid)
     .then((res)=>res.json())
     .then(obj=>{
       localStorage.setItem("logged_I_User",JSON.stringify(obj))
       setIUser(obj);
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
         <Link to="#" className="nav-link px-3"><h3>Welcome {IUser && IUser.uname}</h3></Link>
         </li>
         <li className="nav-item">
         {/* <button onClick={() => this.setState({showForm: true}) }>Search</button> */}
         <Link to="/search_iuser" className="nav-link px-3">Search</Link>
         </li>
         <li className="nav-item">
         <Link to="/iuserviewprofile" className="nav-link px-3">View Profile</Link>
         </li>
         <li className="nav-item">
         <Link to="/trackstatus_iuser" className="nav-link px-3">Track Status</Link>
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
                        <h4 className="text-center mb-4">User Profile</h4>
                            <div className="table-wrap">
                                <table className="table">
                                <thead className="thead-primary">
                                <tr>
                                    <th>User Id</th>
                                    <td> {IUser && IUser.uid}</td>                      
                                    </tr>
                                    <tr>
                                    <th>User Name</th>
                                    <td> {IUser && IUser.uname}</td>                      
                                    </tr>
                                    <tr>
                                    <th>User Aadhar Number</th>
                                    <td> {IUser && IUser.adharno}</td>                      
                                    </tr>
                                    <tr>
                                    <th>User Email</th>
                                    <td> {IUser && IUser.login_id.email}</td>                      
                                   </tr>
                                   <tr>
                                    <th>User contactno</th>
                                    <td> {IUser && IUser.login_id.contactno}</td>                      
                                   </tr>
                                   <tr>
                                    <th>User Area</th>
                                    <td> {IUser && IUser.address_id.area}</td>                      
                                   </tr>
                                   <tr>
                                    <th>City</th>
                                    <td> {IUser && IUser.address_id.city}</td>                      
                                   </tr>
                                   <tr>
                                    <th>Pincode</th>
                                    <td> {IUser && IUser.address_id.pincode}</td>                      
                                   </tr>                          
                                </thead>
                                </table>
                                <Link className="btn btn-info"to={`/iuser_updateprofile`}>Update</Link>
                               &nbsp;&nbsp;&nbsp;
                                <button type="submit" className="btn btn-danger"onClick={()=>{deleteprofile(IUser.login_id.login_id)}}>Delete</button>
                                </div>
                                </div>
</div>
      </div>
    )
   
}









































