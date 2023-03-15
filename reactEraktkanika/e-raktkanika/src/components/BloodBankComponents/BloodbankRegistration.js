import { useReducer, useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Register()
{
  
  const init={
    bb_name:{value :"",touched:false,valid:false,error:""},
    bb_regno:{value :"",touched:false,valid:false,error:""},
    email:{value :"",touched:false,valid:false,error:""},
    password:{value :"",touched:false,valid:false,error:""},
    contactno:{value :"",touched:false,valid:false,error:""},
    area:{value :"",touched:false,valid:false,error:""},
    city:{value :"",touched:false,valid:false,error:""},
    pincode:{value :"",touched:false,valid:false,error:""}
    
}



const validateData = (name,value) => {

  let valid=false;
  let error="";
  switch(name)
  {
    case 'email' : var pattern = /^[A-Za-z0-9_.-]{3,}@gmail.com$/
                          if(pattern.test(value))
                          {
                            valid = true;
                            error = "";
                          }
                          else
                          {
                            valid = false;
                            error = "Email invalid"
                          }
                          break;

   
   case 'password':  var pattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])[A-Za-z0-9!@#$%^&*]{5,}$/
                             if(pattern.test(value))
                             {
                             valid = true;
                             error = "";
                             }
                             else
                             {
                             valid = false;
                             error = "Password invalid"
                             }
                           break;
  }
  return {valid,error};
}

const reducer=(state,action)=> {
  switch(action.type)
  {
      case 'update':
          const {name, value, touched, valid,error,formvalid} = action.data
          //console.log(formvalid)
          return {...state, [name]: {value, touched, valid, error}, formvalid }
          //return {...state,[action.fld]:action.val}
      case 'reset':
          return init;
  }
  
  }

  const handleChange = (name,value) => {
    const {valid,error} = validateData(name,value)
    let formvalid = true;
    /*if(state.firstName.valid === true && state.lastName.valid === true && state.email.valid === true && state.password.valid === true && state.confirmpassword.valid === true)
        formvalid = true;*/
    for(const key in info)
    {
        console.log(key+" : "+info[key].valid )
        if(info[key].valid === false)
        {
            formvalid = false;
            break;
        }
    }  
    console.log(formvalid)  
    dispatch({type: 'update', data: {name,value,touched: true, valid, error,formvalid} })
}

    const [info, dispatch] = useReducer(reducer, init);
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

 
    const sendData = (e) => {
      e.preventDefault();
      const reqOptions = {
        method: 'POST',
        mode :'cors',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({

          bb_name:info.bb_name.value,
          bb_regno:info.bb_regno.value,
          email:info.email.value,
          password:info.password.value,
          contactno:info.contactno.value,
          area:info.area.value,
          city:info.city.value,
          pincode:info.pincode.value,







        })
      }
   
      fetch("http://localhost:8080/regbloodbank", reqOptions)
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

    <div>






      <br/> <br/> <br/> <br/>
      <br/> <br/> <br/> <br/>
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
      <br/>
     
     
     
          <h3 className="Auth-form-title">Registration</h3>
          <div className="form-group mt-3">
            <label>Blood Bank Name</label>
            <input
              type="text"
              id="bb_name"
              name="bb_name"
              className="form-control mt-1"
              placeholder="Enter BloodBank Name"
              value={info.bb_name.value}
              onChange={(e)=>dispatch({type: 'update', data: {name:"bb_name",value:e.target.value,touched: true, valid:true, error:"",formvalid:true} })}            />
            
          </div>
          <div className="form-group mt-3">
            <label>BloodBank Registeration number</label>
            <input
              type="text"
              id="bb_regno"
              name="bb_regno"
              className="form-control mt-1"
              placeholder="Enter BloodBank regno"
              value={info.bb_regno.value}
              onChange={(e)=>dispatch({type: 'update', data: {name:"bb_regno",value:e.target.value,touched: true, valid:true, error:"",formvalid:true} })}            />
            
              </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={info.email.value}
              onChange={(e) => { handleChange("email",e.target.value) }}
            />
             <div className="error-msg"> {info.email.error} </div> 
          </div>
         
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={info.password.value}
              onChange={(e) => { handleChange("password",e.target.value) }}
              />
              <div className="error-msg"> {info.password.error} </div>
            </div>
          <div className="form-group mt-3">
            <label>Contact</label>
            <input
              type="text"
              id="contactno"
              name="contactno"
              className="form-control mt-1"
              placeholder="Enter BloodBank contact number"
              value={info.contactno.value}
              onChange={(e)=>dispatch({type: 'update', data: {name:"contactno",value:e.target.value,touched: true, valid:true, error:"",formvalid:true} })}  
              />
            </div>
          <div className="form-group mt-3">
            <label>Area</label>
            <input
              type="text"
              id="area"
              name="area"
              className="form-control mt-1"
              placeholder="Enter BloodBank area"
              value={info.area.value}
              onChange={(e)=>dispatch({type: 'update', data: {name:"area",value:e.target.value,touched: true, valid:true, error:"",formvalid:true} })}  
              />
            </div>
          <div className="form-group mt-3">
            <label>City</label>
            <input
              type="text"
              id="city"
              name="city"
              className="form-control mt-1"
              placeholder="Enter BloodBank city"
              value={info.city.value}
              onChange={(e)=>dispatch({type: 'update', data: {name:"city",value:e.target.value,touched: true, valid:true, error:"",formvalid:true} })}  
              />
            </div>
          <div className="form-group mt-3">
            <label>pincode</label>
            <input
              type="number"
              id="pincode"
              name="pincode"
              className="form-control mt-1"
              placeholder="Enter BloodBank city pincode"
              value={info.pincode.value}
              onChange={(e)=>dispatch({type: 'update', data: {name:"pincode",value:e.target.value,touched: true, valid:true, error:"",formvalid:true} })}  
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
    </div>
  )
}




