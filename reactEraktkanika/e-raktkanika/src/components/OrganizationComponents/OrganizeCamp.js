import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Multiselect from 'multiselect-react-dropdown'; 


export default function OrganizeCamp()
{
    // const init={
  
    //     cname:"",
    //     cdate:"",
    //     ctime:"",
    //     area:"",
    //     city:"",
    //     pincode:"",
    //     sel_bb:[],
    //     org_id:0
    // }

    const init={
      cname:{value :"",touched:false,hasError: false,error:""},
      cdate:{value :"",touched:false,hasError: true,error:""},
      ctime:{value :"",touched:false,hasError: true,error:""},
      area:{value :"",touched:false,hasError: false,error:""},
      city:{value :"",touched:false,hasError: false,error:""},
      pincode:{value :"",touched:false,hasError: false,error:""},
      bb_id:{value :"",touched:false,hasError: false,error:""},
      org_id:{value :0,touched:true,hasError: false,error:""},
      //{value :0,touched:false,hasError: false,error:""},
      isFormValid:false
      
  }
  
  const validateData = (name, value) => {
    let hasError = false, error = "";

    switch(name)
    {
      case 'ctime':
        var t=parseFloat(value) ;
        console.log(typeof(t))
        console.log(t)
        if(t<9 || t>12 )
        {
          hasError=true;
         error="Please Enter Time Between 9 to 12 am"
        }
                            break;

     
     case 'cdate':  
     var sdate=new Date(value)
     console.log(sdate)
    var todaysdate=new Date()
    console.log(todaysdate)
    todaysdate.setDate(todaysdate.getDate()+30)
    console.log(todaysdate)
    if(sdate<todaysdate)
    {
      hasError=true;
      error="Please Enter Date After 1 month from today"
    }
    console.log(hasError+" "+error)
     break;
    }
    return { hasError, error }

  }
  
  
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'update': {
            const { name, value, hasError, error, touched, isFormValid } = action.data;
            return {
                ...state,
                [name]: { ...state[name], value, hasError, error, touched },
                isFormValid
            }   //modifying and returning new object as state
        }
        case 'reset': {
            return init;
        }
    }
}





    const [info, dispatch]=useReducer(reducer, init);
    const onInputChange = (name, value, dispatch) => {
      //validation logic
      const { hasError, error } = validateData(name, value); //form field, latest value


      //which key to be modified - value, hasError, error, touched
      let isFormValid = true;
      for (const key in info) {
          let item = info[key];
          /*if(key === name && hasError)
          {
              isFormValid = false;
              break;
          }
          else if(key !== name && item.hasError)
          {
              isFormValid = false;
              break;
          }*/
          if (item.hasError) {
              isFormValid = false;
              break;
            }
          }
          //gethered one more value - isFormValid
          //dispatch({type:'update',data:{name,value,hasError,error,touched: true, isFormValid}})
  
  
          //sending action object
          dispatch({ type: 'update', data: { name, value, hasError, error, touched: true, isFormValid } })
  
  
      }
  
  
  
  const[msg,setMsg] = useState("");
  const navigate = useNavigate();
  const [allbb,setAllbb] =useState([]);
  const [org,setOrg] = useState(null);

  const loginid = JSON.parse(localStorage.getItem("loggedUser")).login_id;
  console.log(loginid)
  
  const orgid = JSON.parse(localStorage.getItem("loggedOrganization")).org_id;
    console.log("orgid:"+orgid)

    useEffect(()=> {

      
      fetch("http://localhost:8080/getorg?login_id="+loginid)
        .then(resp=> {if(resp.ok)
         {
          return resp.text();
         }
         else
         {
          throw new Error("server error")
         }
        })
        .then(text => text.length ? JSON.parse(text):{})
      //.then(resp => resp.json())
      .then(obj => {
        localStorage.setItem("loggedOrganization",JSON.stringify(obj))
        setOrg(obj);
        console.log("value of setorg:"+org)
      });
      
     
      
    
    setOrg(orgid)
     // dispatch({ type: 'update', fld: 'org_id', val:{orgid}} )

      fetch("http://localhost:8080/getallbb")
      .then((resp)=> resp.json())
      .then((objs)=>{
          setAllbb(objs)
          console.log(objs)
      });
  },[]);
  
    

    const sendData = (e) => {
        e.preventDefault();
        const reqOptions = {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            cname:info.cname.value,
            cdate: info.cdate.value,
            ctime:info.ctime.value,
            area:info.area.value,
            city:info.city.value,
            pincode:info.pincode.value,
            bb_id:info.bb_id.value,
           org_id:orgid
       
        })
          
        }
        console.log(info)
        console.log(reqOptions);
        fetch("http://localhost:8080/regcamp", reqOptions)
        .then(resp =>{
            if(resp.ok)
            {
              console.log("response"+resp);
              return resp.text();

            }
            else{
                throw new Error("Server Error");
              }})
        .then(text => text.length ? JSON.parse(text) : {})
        .then(obj => {
            alert("Camp Request is Sent successfully. Check My Camps For More Updates");
                navigate('/organization_home');   
        })
      }
         

            return(
              <div>
              <div className="App">
              <h1 className="bg-danger text-white">E-Raktkanika   </h1>
              
              <nav className="navbar navbar-expand-sm bg-light mb-3">
              
              <div className="container-fluid">
              <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="#" className="nav-link px-3"><h3>Welcome {org && org.org_name}</h3></Link>
                </li>
                <li className="nav-item">
                <Link to="/organizecamp" className="nav-link px-3">Organize Camp</Link>
                </li>
                <li className="nav-item">
                <Link to="/orgprofile" className="nav-link px-3">View Profile</Link>
                </li>
                <li className="nav-item">
      
                <Link to="/mycamps" className="nav-link px-3">My Camps</Link>
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
        




              
<br/> <br/> <br/> <br/>
<div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
             <br/> <br/>
            <h3 className="Auth-form-title">Fill Camp Details</h3>
           
          <div className="form-group mt-3">
            <label>Camp Name</label>
            <input
              type="text"
              id="cname"
              name="cname"
              className="form-control mt-1"
              placeholder="Enter Camp's Name"
              value={info.cname.value}
              onChange={(e) => { onInputChange("cname", e.target.value, dispatch) }} 
              //onChange={(e) => { dispatch({ type: 'update', fld: 'cname', val: e.target.value }) }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Date</label>
            <input
              type="text"
              id="cdate"
              name="cdate"
              className="form-control mt-1"
              placeholder="yyyy-mm-dd"
              value={info.cdate.value}
              onChange={(e) => { onInputChange("cdate", e.target.value, dispatch) }} 
               />
             <p style={{ display: info.cdate.touched && info.cdate.hasError ? "block" : "none", color: "red" }}> {info.cdate.error} </p>

          </div>

          <div className="form-group mt-3">
            <label> Start Time</label>
            <input
              type="text"
              id="ctime"
              name="ctime"
              className="form-control mt-1"
              placeholder=" 24 hrs format "
              value={info.ctime.value}
              onChange={(e) => { onInputChange("ctime", e.target.value, dispatch) }} 
              />
             <p style={{ display: info.ctime.touched && info.ctime.hasError ? "block" : "none", color: "red" }}> {info.ctime.error} </p>

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
              onChange={(e) => { onInputChange("area", e.target.value, dispatch) }} 

              //onChange={(e) => { dispatch({ type: 'update', fld: 'area', val: e.target.value }) }}
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
              onChange={(e) => { onInputChange("city", e.target.value, dispatch) }} 
              
              //onChange={(e) => { dispatch({ type: 'update', fld: 'city', val: e.target.value }) }}
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
              onChange={(e) => { onInputChange("pincode", e.target.value, dispatch) }} 
              
              //onChange={(e) => { dispatch({ type: 'update', fld: 'pincode', val: e.target.value }) }}
            />
          </div>


          {/* <div className="form-group mt-3">
            <label>Select Blood Bank</label>
            <input
              type="number"
              id="sel_bb"
              name="sel_bb"
              className="form-control mt-1"
              
              value={info.sel_bb.value}
              onChange={(e) => { dispatch({ type: 'update', fld: 'sel_bb', val: e.target.value }) }}
            />
          </div> */}


          <div className="form-group mt-3">
            <label>Select Blood Bank</label>
            <select 
           
            id="bb_id"
              name="bb_id"
              className="form-select"
              onChange={(e) => { onInputChange("bb_id", e.target.value, dispatch) }} 
              
              // onChange={(e)=>{
              //   dispatch({
              //     type: 'update',
              //     fld:'bb_id',
              //     val: e.target.value
              //    // val: Array.from(e.target.selectedOptions, option => option.value),
                  
              //   });
              // }}
                
             >
              <option key={0} value={0}>Select... </option>
              {
                allbb.map(bb => {
                  return <option value={bb.bb_id} key={bb.bb_id}>{bb.bb_name}</option>
                })
            
              }
              
            </select>

            {/* <select
              id="sel_bb"
              name="sel_bb"
              className="form-control mt-1"
              value={info.sel_bb}
              onChange={(e) => { dispatch({ type: 'update', fld: 'pincode', val: e.target.value }) }}
            >
              <option></option>
              </select> */}
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
    
    </div>
    
            )



}