import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./slice";
import './Login.css';

export default function LoginComp() {
  
  let reduxAction = useDispatch();
  const init = {

    email: "",
    password: ""
  }

 const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return { ...state, [action.fld]: action.val }
      case 'reset':
        return init;
    }
  }

  const [info, dispatch] = useReducer(reducer, init);
  const [msg, setMsg] = useState("");
 // const [isLoggedin, setIsLoggedin] = useState(false);
  
  const navigate = useNavigate();
  
  const sendData = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(info)
    }
    fetch("http://localhost:8080/checklogin", reqOptions)
      .then(resp => {
        if (resp.ok) {
         // console.log(resp.text())
          return resp.text();
        }

        else {
          throw new Error("Server Error");
        }
      })
      .then(text => text.length ? JSON.parse(text) : {})
      .then(obj => {

        if (Object.keys(obj).length === 0) {
          setMsg("wrong email/password")
        }
        else {
          reduxAction(login())

          localStorage.setItem("loggedUser",JSON.stringify(obj));
          if (obj.status === false) {
            alert("Registration has not been approved");
            navigate('/login')
          }
          else {


            if (obj.role_id.role_id === 1) {
              navigate("/admin_home");
            }
            else if (obj.role_id.role_id === 2) {
              navigate("/hospital_home");
            }
            else if (obj.role_id.role_id === 3) {
              navigate("/iuser_home");
            }
            else if (obj.role_id.role_id === 4) {
              navigate("/bloodbank_home");
            }
            else if (obj.role_id.role_id === 5) {
              navigate("/organization_home");
            }

            else if (obj.role_id.role_id === 6) {
              navigate("/bloodbank_reg");
            }
          }
        }

      })
      .catch((error) => alert(" oops !! Server down Please come back after some time "+error))




  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={info.email_id}
              onChange={(e) => { dispatch({ type: 'update', fld: 'email', val: e.target.value }) }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={info.password}
              onChange={(e) => { dispatch({ type: 'update', fld: 'password', val: e.target.value }) }}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={(e) => { sendData(e) }}>
              Submit
            </button>
            <button type="reset" className="btn btn-primary" onClick={() => { dispatch({ type: 'reset' }) }}>
              Clear
            </button>
          </div>
          {/* <div className="d-grid gap-2 mt-3">
          </div> */}
          
          <p>{JSON.stringify(info)}</p>
          <p>{msg}</p>
        </div>
      </form>
      
    </div>
  )
}
