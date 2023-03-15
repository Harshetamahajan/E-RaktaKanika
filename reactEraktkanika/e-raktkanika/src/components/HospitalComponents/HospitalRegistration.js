import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function HospitalRegistration()
{


  const init = {
    hp_name: {value :"",touched:false,valid:false,error:""},
    hp_regno: {value :"",touched:false,valid:false,error:""},
    email: {value :"",touched:false,valid:false,error:""},
    password: {value :"",touched:false,valid:false,error:""},
    contactno: {value :"",touched:false,valid:false,error:""},
    area: {value :"",touched:false,valid:false,error:""},
    city: {value :"",touched:false,valid:false,error:""},
    pincode: {value :"",touched:false,valid:false,error:""}
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
         
          hp_name:info.hp_name.value,
          hp_regno:info.hp_regno.value,
          email:info.email.value,
          password:info.password.value,
          contactno:info.contactno.value,                       
          area:info.area.value,
          city:info.city.value,
          pincode:info.pincode.value,                        
                                 
         })
      }
      fetch("http://localhost:8080/reghospital", reqOptions)
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
                           
                          alert("Registration is successfull");
                            navigate('/')
                           
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
       
          <h3 className="Auth-form-title">Registration</h3>
          <div className="form-group mt-3">
            <label>Hospital Name</label>
            <input
              type="text"
              id="hp_name"
              name="hp_name"
              className="form-control mt-1"
              placeholder="Enter Hospital Name"
              value={info.hp_name.value}
              onChange={(e)=>dispatch({type: 'update', data: {name:"hp_name",value:e.target.value,touched: true, valid:true, error:"",formvalid:true} })}  
              />
          </div>
          <div className="form-group mt-3">
            <label>Hospital Registeration number</label>
            <input
              type="text"
              id="hp_regno"
              name="hp_regno"
              className="form-control mt-1"
              placeholder="Enter Hospital regno"
              value={info.hp_regno.value}
              onChange={(e)=>dispatch({type: 'update', data: {name:"hp_regno",value:e.target.value,touched: true, valid:true, error:"",formvalid:true} })}
              />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control mt-1"
              placeholder="Enter Email"
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
              placeholder="Password Should Start With Capital letter, min 5 Characters"
              value={info.password.value}
              onChange={(e) => { handleChange("password",e.target.value) }}
            />
            <div className="error-msg"> {info.contactno.error} </div>
          </div>

          <div className="form-group mt-3">
            <label>Contact No</label>
            <input
              type="number"
              id="contactno"
              name="contactno"
              className="form-control mt-1"
              placeholder="Enter Mobile No"
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
              placeholder="Enter Area"
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
              placeholder="Enter City"
              value={info.city.value}
              onChange={(e)=>dispatch({type: 'update', data: {name:"city",value:e.target.value,touched: true, valid:true, error:"",formvalid:true} })}  
            />
          </div>

          <div className="form-group mt-3">
            <label>Pincode</label>
            <input
              type="number"
              id="pincode"
              name="pincode"
              className="form-control mt-1"
              placeholder="Enter Pincode"
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








