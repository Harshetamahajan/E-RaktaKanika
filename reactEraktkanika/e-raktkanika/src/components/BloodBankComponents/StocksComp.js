import { useEffect, useState } from 'react';
//import { Await, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function StocksComp()
{
    // const [update,setupdate]=useState(null);
    const [bloodbank ,setBloodBank]=useState(null);
    useEffect(()=>{
    const loginid=JSON.parse(localStorage.getItem("loggedUser")).login_id;
    fetch('http://localhost:8080/getbloodbank?login_id='+loginid)
    .then((res)=>res.json())
    .then(obj=>{
    localStorage.setItem("loggedbloodbank",JSON.stringify(obj))
    setBloodBank(obj);
    })
 
 
     },[]);




    const[stock,setStock]=useState([]);
    useEffect(()=>{
    const bbid=JSON.parse(localStorage.getItem("loggedbloodbank")).bb_id;
    // const qantity=JSON.parse(localStorage.getItem("loggedbloodbank")).quantity;
    console.log(bbid);




    const getStock=async()=>{
    const res=await fetch('http://localhost:8080/getstock?bb_id='+bbid)
    const getdata= await res.json();
    setStock(getdata);
    console.log(getdata);
    }
    getStock();
   },[]);


   const handleDecrement =(stock_id)=>
   {
    setStock(stock =>
    stock.map((gets)=>
    stock_id===gets.stock_id ?{...gets,quantity:gets.quantity -(gets.quantity>=1 ? 1:0) }:gets
    )
    );
   }


   const handleIncrement =(stock_id)=>
   {
    setStock(stock =>
    stock.map((gets)=>
    stock_id===gets.stock_id ?{...gets,quantity:parseInt(gets.quantity )+1 }:gets
    )
    )
   }


    const update=(stock_id)=>{


        const element = stock.filter(s=>s.stock_id === stock_id)
        alert(element[0].quantity)
        console.log(element[0].quantity)




        fetch(`http://localhost:8080/updatequantity?stock_id=${stock_id}&quantity=${element[0].quantity}`)
        .then(resp=>resp.json())
        .then(obj=>
           
            {console.log(obj);
            alert("Quantity Updated");
            }
        )
       
    }
   
////////////////
// var UpdateStock = ()=>{
       
       
//     const nav = useNavigate();
//     const update = (stock_id) =>{
//         console.log(stock_id)
//         fetch("http://localhost:8080/updatestock?stock_id="+stock_id)
//      .then(resp => resp.json())
//      .then(info => { console.log(JSON.stringify(info))
//         if(info)
//         {
//             alert("Updation done")
//             nav("/BloodBankComponents/StocksComp'")
//             window.location.reload();
//         }
//         else
//             alert("Updation failed")
   
//    })
   
///////////////////
   
    return (
        <div>
        <div>
        <h1 className="bg-danger text-white">E-Raktkanika   </h1>
        <nav className="navbar navbar-expand-sm bg-light mb-3">  
    <div className="container-fluid">
    <ul className="navbar-nav">
        <li className="nav-item">
    <Link to="#" className="nav-link px-3"><h3>Welcome {bloodbank && bloodbank.bb_name}</h3></Link>
        </li>
        <li className="nav-item">
         <Link to="/stock" className="nav-link px-3">Manage Stock</Link>
        </li>
        <li className="nav-item">
    <Link to="/bbprofile" className="nav-link px-3"> View Profile</Link>
        </li>
        <li className="nav-item">
    <Link to="/request" className="nav-link px-3">Approve Request</Link>
        </li>
        <li className="nav-item">
       <Link to="/unapprovedCamps" className="nav-link px-3">Approve Camps</Link>
       </li>
        <li className="nav-item">
    <Link to="/logout" className="nav-link px-3">Logout</Link>
         </li>
    </ul>
     </div>
     </nav>
     </div>
            <div class="row">
                    <div class="col-md-12">
                        <h4 class="text-center mb-4">Manage Stock</h4>
                            <div class="table-wrap">
                                <table class="table">
                                <thead class="thead-primary">
                                    <tr>
                                    <th>Stock_id</th>
                                    <th>BloodGroup</th>
                                    <th>Quantity</th>                          
                                    </tr>  
                                </thead>
                       <tbody>
                       {
                        stock.map((gets)=>(
                            <tr>
                                <td>{gets.stock_id}</td>
                                <td>  {gets.blood_grp}</td>
                                <td width="15%">
                                    <div className="input-group">
                                        <button type='button'onClick={()=>handleDecrement(gets.stock_id)} className='input-group-text'>-</button>  
                                        <div className='form-control text-center'>{gets.quantity}</div>
                                        <button type='button' onClick={()=>handleIncrement(gets.stock_id)} className='input-group-text'>+</button>
                                    </div>
                                 </td>
                                 {/* {<td>{JSON.stringify(gets)}</td> } */}
                                 <td>
                                 <button type='submit' className='input-group-text' onClick={(e)=>{update(gets.stock_id)}}>Update</button>
                                 </td>
                            </tr>
                        )
                        )
                        }
                       </tbody>
                        </table>
                        </div>
                        </div>
                    </div>
</div>            
        )
                    }


