import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function IUserRegistration()
{
  const init = {
    uname:"",
    adharno:"",
    email:"",
    password:"",
    contactno:"",
    area:"",
    city:"",
    pincode:""
  }
















  const reducer = (state, action) => {
    switch (action.type)
    {
      case 'update':
        return { ...state, [action.fld]: action.val }
      case 'reset':
        return init;
    }}
















    const [info, dispatch] = useReducer(reducer, init);
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();








 
    const sendData = (e) => {
      e.preventDefault();
      const reqOptions = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(info)
      }
   
      fetch("http://localhost:8080/iuser", reqOptions)
      .then(resp => {
                        if(resp.ok)
                        {
                          return resp.text();
                        }
                        else{
                          throw new Error("Server Error");
                        }
                    })
                    .then(text => text.length ? JSON.parse(text) : {})
                    .then(obj => {
                        if (Object.keys(obj).length === 0) {
                            setMsg("please insert all fields")
                        }
                        else {
                           {
                            alert("Registration is successfull");
                            navigate('/')
                            }
                         }
                        })
     
  }
 
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
      <br/>
     
     
     
          <h3 className="Auth-form-title">Registration</h3>
          <div className="form-group mt-3">
            <label>User Name</label>
            <input
              type="text"
              id="uname"
              name="uname"
              className="form-control mt-1"
              placeholder="Enter User Name"
              value={info.uname}
              onChange={(e) => { dispatch({ type: 'update', fld: 'uname', val: e.target.value }) }}
              />
          </div>
          <div className="form-group mt-3">
            <label>User Adhar number</label>
            <input
              type="text"
              id="adharno"
              name="adharno"
              className="form-control mt-1"
              placeholder="Enter adhar number"
              value={info.adharno}
              onChange={(e) => { dispatch({ type: 'update', fld: 'adharno', val: e.target.value }) }}
              />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={info.email}
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
          <div className="form-group mt-3">
            <label>Contact</label>
            <input
              type="text"
              id="contactno"
              name="contactno"
              className="form-control mt-1"
              placeholder="Enter User contact number"
              value={info.contactno}
              onChange={(e) => { dispatch({ type: 'update', fld: 'contactno', val: e.target.value }) }}
              />
          </div>
          <div className="form-group mt-3">
            <label>Area</label>
            <input
              type="text"
              id="area"
              name="area"
              className="form-control mt-1"
              placeholder="Enter area"
              value={info.area}
              onChange={(e) => { dispatch({ type: 'update', fld: 'area', val: e.target.value }) }}
              />
          </div>
          <div className="form-group mt-3">
            <label>City</label>
            <input
              type="text"
              id="city"
              name="city"
              className="form-control mt-1"
              placeholder="Enter city"
              value={info.city}
              onChange={(e) => { dispatch({ type: 'update', fld: 'city', val: e.target.value }) }}
              />
          </div>
          <div className="form-group mt-3">
            <label>pincode</label>
            <input
              type="number"
              id="pincode"
              name="pincode"
              className="form-control mt-1"
              placeholder="Enter  pincode"
              value={info.pincode}
              onChange={(e) => { dispatch({ type: 'update', fld: 'pincode', val: e.target.value }) }}
              />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={(e) => { sendData(e) }} >
              Register
            </button>
            <button type="reset" className="btn btn-primary" onClick={() => { dispatch({ type: 'reset' }) }} >
              Clear
            </button>
          </div>
          <p>{JSON.stringify(info)}</p>
          <p>{msg}</p>
         </div>
      </form>
     
    </div>
  )
}

























































