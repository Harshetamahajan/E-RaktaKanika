import { useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
export default function IUserUpdateProfile()
{
    const loginid=JSON.parse(localStorage.getItem("logged_I_User")).login_id.login_id;
      console.log(loginid)
    const [email,setEmail] =useState([]);
    console.log(email)
    const [contactno,setContactno] =useState([]);
    console.log(contactno)
  const  navigate = useNavigate();




  const[IUser,setIUser]=useState(null);
  useEffect(()=>{
   const loginid=JSON.parse(localStorage.getItem("loggedUser")).login_id;








   fetch('http://localhost:8080/getiuser?login_id='+loginid)
   .then((res)=>res.json())
   .then(obj=>{
     localStorage.setItem("logged_I_User",JSON.stringify(obj))
     setIUser(obj);
   })
  },[]);








    const updatepro=(e)=>{
        e.preventDefault()
        fetch(`http://localhost:8080/iuserupdateprofile/${email}/${contactno}/${loginid}`)
        .then(resp=>resp.json())
        .then(obj=>
            {console.log(obj);
            alert("Profile Updated");
            navigate("/iuserviewprofile")
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
         <Link to="/iuserviewprofile" className="nav-link px-3">Go Back</Link>
         </li>
       </ul>
       </div>
       </nav>
      
         </div>
         <div className="row">
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
                                    <td> {IUser && IUser.uname}</td>                      
                                    </tr>
                                 <tr>
                                       <th>User Email</th>
                                       <td>
                                        <div className="form-group mt-3">
                                            <input type="text"className="form-control mt-1"placeholder="Enter User Email"
                                            onChange={(e)=>setEmail(e.target.value)}/>
                                        </div>
                                        </td>                      
                                        </tr>
                                        <tr>
                                       <th>User contactno</th>
                                       <td>   <div className="form-group mt-3">
                                            <input type="text"className="form-control mt-1"placeholder="Enter User contactno"
                                            onChange={(e)=>setContactno(e.target.value)}/>
                                        </div></td>                      
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
                                   <Link className="btn btn-info"to={`/iuser_updateprofile`}  onClick={(e)=>{updatepro(e)}} >Update</Link>
                                   </div>
                                   </div>
   </div>
         </div>
       )
       
}

















