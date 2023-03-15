import { useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
export default function TrackStatusIUser()
{
       


   
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


   
  const navigate = useNavigate();
   const[approved,setApproved] =useState([]);
   
   const loginid=JSON.parse(localStorage.getItem("loggedUser")).login_id;
    useEffect(()=>
    {
        fetch(`http://localhost:8080/getapprovedrequest/${loginid}`)
        .then((res)=>res.json())
        .then(obj=>{
          localStorage.setItem("approvedrequest",JSON.stringify(obj))
            setApproved(obj)
         
        })




       },[]);




    const sendData = (s) =>
     {
       localStorage.setItem("bid",s)
       console.log("bbid in track status : "+s);




   
   
   
        // fetch('http://localhost:8080/getbbdetails?bb_id='+s)
        // .then((res)=>res.json())
        // .then(obj=>{
        //   localStorage.setItem("bb_details",JSON.stringify(obj))
         
        // })
       
        navigate('/contactdetails_iuser')
     
     }












    //  const sendData = (s) =>
    //   {
    //     s.preventDefault();
    //     fetch('http://localhost:8080/getbbdetails?bb_id='+s)
    //       .then((res) => {
    //         console.log(res);
    //         if(res.ok)
    //         {
    //           return res.json();
    //         }
    //         else
    //         {
    //           throw new Error("server Error")
    //         }
    //       })
    //       .then(obj => {
    //         console.log(JSON.stringify(obj));
    //         localStorage.setItem("bb_details",JSON.stringify(obj))
    //         navigate('/contactdetails')
    //       })
    //       .catch((Error) =>
    //           console.log(Error)
    //         // alert("server problem ! sever is down")
    //       );
    //   }
     








    return(
        <div>
           




           <h1 className="bg-danger text-white">E-Raktkanika</h1>
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
   
 








    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Approved Blood Banks</h3>
            <div>
                <table className="table">
                         
                         <tbody>
                              {approved.map((e) =>
                              {
                                  return(
                                    <tr>
                                        <td>
                                           <b> {e.bb_id.bb_name} : </b>  
                                           
                                            <button type="submit" className="btn btn-primary" onClick={() => { sendData(e.bb_id.bb_id) }} >Get Details</button>
                                        </td>
                                    </tr>
                                     )
                             })}
                        </tbody>
                </table>
            </div>
           
            <div>
            </div>
        </div>
      </form>
    </div>
    {/* <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Pending Blood Bank</h3>
            <div>
            <table className="table">
                         
                         <tbody>
                             {pending.map((e) =>
                             {
                                 return(
                                    <tr>
                                        <td>
                                            {e.bb_id.bb_name}
                                        </td>
                                    </tr> )
                            })}
                        </tbody>
                    </table>
           
            </div>
        </div>
      </form>
    </div> */}




        </div>
    )
}









