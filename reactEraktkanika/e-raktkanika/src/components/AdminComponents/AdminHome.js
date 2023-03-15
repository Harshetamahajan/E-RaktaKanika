import {Link, Route, Routes} from 'react-router-dom';


export default function AdminHome()
{
   
    return(
        <div className="App">
        <h1 className="bg-danger text-white">E-Raktkanika   </h1>
        <h3>Welcome  Admin</h3>
        <nav className="navbar navbar-expand-sm bg-light mb-3">
       
        <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link to="/unapprovedHp" className="nav-link px-3">Approve Hospital</Link>
          </li>
          <li className="nav-item">
          <Link to="/unapprovedBB" className="nav-link px-3">Approve BloodBank</Link>
          </li>
          
          <li className="nav-item">
          <Link to="/deactivateUser" className="nav-link px-3">Deactivate User</Link>
          </li>
          <li className="nav-item">
         
          <li className="nav-item">
          <Link  className="nav-link px-3"></Link>
          </li>
          <li className="nav-item">
          <Link  className="nav-link px-3"></Link>
          </li>
          </li>
          <li className="nav-item">
          <Link to="/logout" className="nav-link px-3">Logout</Link>
         
          </li>
         
        </ul>
      </div>
    </nav>
    </div>   
    )}

