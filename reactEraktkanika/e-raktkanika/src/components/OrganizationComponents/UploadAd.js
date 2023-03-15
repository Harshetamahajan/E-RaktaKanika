import { useEffect,useReducer,useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function UploadAd()
{

    const [org,setOrg] = useState();
    const [camp,setCamp] = useState();
    const [file,setFile]= useState();
    const navigate = useNavigate();
    const [adid,setAdid] = useState();

    useEffect(() => {

        const orgid = JSON.parse(localStorage.getItem("loggedOrganization")).org_id;
        console.log(orgid)
        setOrg(orgid);

        const ccid = JSON.parse(localStorage.getItem("cid"));
       // const cid = JSON.parse(localStorage.getItem("allcamps")).cid;
        console.log(ccid)
        setCamp(ccid);

    },[])

    // const init ={
       
    //    org_id:org,
    //    cid:camp
    // }

    // const reducer =(state,action)=>{
    //     switch(action.type)
    //     {
    //         case 'update':
    //             return{...state, [action.fld]:action.val}
    //         case 'reset':
    //             return init;
    //     }
    // }

    const sendData = (e) => {
      e.preventDefault();
      const reqOptions = {
        method: 'POST',
        headers: { 'content-type': 'application/json' }
       
      }
      fetch("http://localhost:8080/savead?cid="+camp, reqOptions)
      .then(resp =>{
          if(resp.ok)
          {
              return resp.text();

          }
          else{
              throw new Error("Server Error");
            }}).then(text => text.length ? JSON.parse(text) : {})
            .then(obj => {
              console.log(obj);

              const fd = new FormData();
              fd.append("file",file);
              const reqOptions1 = {
                  method : 'POST',
                  mode: 'no-cors',
                  //headers : {'content-type':'multipart/form-data'},
                  body : fd
              }
              fetch("http://localhost:8080/uploadimg/"+obj.ad_id, reqOptions1)
              .then(resp => resp.json())
              .then(data => console.log(JSON.stringify(data)))
              
             alert("image uploaded successful");
                             navigate('/organization_home');            
                      
                  
           
                   
          })
              
        }
  




   // const [info, dispatch]=useReducer(reducer, init);
    // const sendData = (e) => {
    //     e.preventDefault();
    //     const reqOptions = {
    //       mode: 'no-cors',
    //       method: 'GET'
    //       //headers: { 'content-type': 'application/json' },
          
    //     }
    //     fetch("http://localhost:8080/savead?cid="+camp,reqOptions)
        // .then(res => console.log(res.json()))
        // .then((res) => console.log(res.text))
        // .then((restext )=>{alert(restext)} )
        // .catch((error)=> {console.error(error); }
        // );

        
        // .then(obj1 => {
        //         localStorage.setItem("advertisementid",JSON.stringify(obj1))
        //          setAdid(obj1);
        //         console.log(obj1);
                
                // const fd = new FormData();
                // fd.append("file",file);
                // const reqOptions1 = {
                //     method : 'POST',
                //     headers : {'content-type':'multipart/form-data'},
                //     body : fd
                // }
                // fetch("http://localhost:8080/uploadimg/"+adid,reqOptions1)
                // .then(resp => resp.json())
                // .then(obj => {
                //     if(obj)
                //     {
                //         alert("Advertisement Uploaded");
                //         navigate('/mycamps');
                //     }
                //     else
                //     {
                //         alert("Advertisemet Upload Failed");
                //         navigate('/mycamps');
                //     }
                // })
  
                // })
    // }

    

    return(
        <div>
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
          <Link to="/logout" className="nav-link px-3">Logout</Link>
          
          </li>
          
        </ul> 
      </div>
    </nav>
    </div>
            
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
    
            <h3 className="Auth-form-title">Upload Advertisement</h3>
           
          <div className="form-group mt-3">
          
            <input
              type="file"
              id="img"
              name="img"
              className="form-control mt-1"
              placeholder="Upload Image"
              onChange={(e) => { setFile(e.target.files[0]) }} 
             
              
            />
           <button type="submit" className="btn btn-primary" onClick={(e) => { sendData(e) }}>
              Upload
            </button>
            </div>
            </div>
            </form>
            </div>
        </div>
        </div>
        
    )

}