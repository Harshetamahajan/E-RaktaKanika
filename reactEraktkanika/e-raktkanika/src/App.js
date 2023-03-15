
import {Link, Route, Routes} from 'react-router-dom';
import './App.css';
import LoginComp from './components/LoginComp';
import AdminHome from './components/AdminComponents/AdminHome';
import HospitalHome from './components/HospitalComponents/HospitalHome';
import BloodBankHome from './components/BloodBankComponents/BloodBankHome';
import OrganizationHome from './components/OrganizationComponents/OrganizationHome';
import OrgRegistration from './components/OrganizationComponents/OrgRegistration';
import { useSelector } from 'react-redux';
import LogoutComp from './components/LogoutComp';
import OrganizeCamp from './components/OrganizationComponents/OrganizeCamp';
import HomeComp from './HomeComp';

import BloodbankRegistration from './components/BloodBankComponents/BloodbankRegistration';
import StocksComp from './components/BloodBankComponents/StocksComp';
import BbViewProfile from './components/BloodBankComponents/BbViewProfile';
import HospitalRegistration from './components/HospitalComponents/HospitalRegistration';
import SearchBBForHospital from './components/HospitalComponents/SearchBBHospital';
import ShowBloodBank from './components/HospitalComponents/ShowBloodBank';
import UnapprovedBB from './components/AdminComponents/UnapprovedBB';
import MyCamps from './components/OrganizationComponents/MyCamps';
import OrgViewProfile from './components/OrganizationComponents/OrgViewProfile';
import RemoveUser from './components/AdminComponents/RemoveUser';
import UnapprovedHp from './components/AdminComponents/UnapprovedHp';
import UnapprovedCamps from './components/BloodBankComponents/UnapprovedCamp';
import UploadAd from './components/OrganizationComponents/UploadAd';
import OrgUpdateProfile from './components/OrganizationComponents/OrgUpdateProfile';
import BbUpdateProfile from './components/BloodBankComponents/BbUpdateProfile';
import ApproveRequest from './components/BloodBankComponents/ApproveRequest';
import ContactDetails from './components/HospitalComponents/ContactDetails';
import HpViewProfile from './components/HospitalComponents/HpViewProfile';
import HpRequest from './components/HospitalComponents/HpRequest';
import TrackStatus from './components/HospitalComponents/TrackStatus';
import HpUpdateProfile from './components/HospitalComponents/HpUpdateProfile';
import IUserHome from './components/IUserComponents/IUserHome';
import IUserRegistration from './components/IUserComponents/IUserRegistration';
import IUserUpdateProfile from './components/IUserComponents/IUserUpdateProfile';
import IUserViewProfile from './components/IUserComponents/IUserViewProfile';
import TrackStatusIUser from './components/IUserComponents/TrackStatusIUser';
import ShowBloodBankIUser from './components/IUserComponents/ShowBloodBankIuser';
import SearchBBForIUser from './components/IUserComponents/SearchBBIUser';
import IUserRequest from './components/IUserComponents/IUserRequest';
import ContactDetailsIUser from './components/IUserComponents/ContactDetailsIUser';
import AboutUs from './components/AboutUs';


function App() {

  const mystate = useSelector((state) => state.logged);


  return (
  <div className="App">
      <div style ={{display: mystate.loggedIn?"none":"block"}}>
      <h1 className="bg-danger text-white">Welcome To E-Raktkanika</h1>
      <nav className="navbar navbar-expand-sm bg-light mb-3">
      
      <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/" className="nav-link px-3">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/login" className="nav-link px-3">Login</Link>
        </li>
        <li className="nav-item">
        <Link to="/org_reg" className="nav-link px-3"> Register Organization </Link>
        </li>
        <li className="nav-item">
        <Link to="/bloodbank_reg" className="nav-link px-3">Register BloodBank </Link>
        </li>
        <li className="nav-item">
        <Link to="/hospital_reg" className="nav-link px-3">Register Hospital </Link>
        </li>
        <li className="nav-item">
        <Link to="/user" className="nav-link px-3">Register User </Link>
        </li>
        <li className="nav-item">
        <Link to="/aboutus" className="nav-link px-3">About us</Link>
        </li>
      </ul> 
      
    </div>
    
  </nav>
  
  </div>
    <Routes>
    <Route path ="/" element={<HomeComp/>}/>
      <Route path ="/login" element={<LoginComp/>}/>
      <Route path ="/logout" element={<LogoutComp/>}/>
      <Route path ="/admin_home" element={<AdminHome/>}/>
      <Route path ="/hospital_home" element={<HospitalHome/>}></Route>
      <Route path ="/iuser_home" element={<IUserHome/>}></Route>
      <Route path ="/bloodbank_home" element={<BloodBankHome/>}></Route>
      <Route path ="/organization_home" element={<OrganizationHome/>}></Route>
      <Route path ="/org_reg" element={<OrgRegistration/>}/>
      <Route path ="/hospital_reg" element={<HospitalRegistration/>}/>
      <Route path ="/bloodbank_reg" element={<BloodbankRegistration/>}/>
      <Route path ="/organizecamp" element={<OrganizeCamp/>}/>
      <Route path ="/stock" element={<StocksComp/>}/>
      <Route path ="/bbprofile" element={<BbViewProfile/>}/>
      <Route path ="/search" element={<SearchBBForHospital/>}/>
      <Route path ="/showbloodbanks" element={<ShowBloodBank/>}/>
      <Route path ="/unapprovedbb" element={<UnapprovedBB/>}/>
      <Route path ="/mycamps" element={<MyCamps/>}/>
      <Route path ="/orgprofile" element={<OrgViewProfile/>}/>
      <Route path ="/removeUsers" element={<RemoveUser/>}/>
      <Route path ="/unapprovedHp" element={<UnapprovedHp/>}/>
      <Route path ="/unapprovedCamps" element={<UnapprovedCamps/>}/>
      <Route path ="/uploadad" element={<UploadAd/>}/>
      <Route path ="/orgupdateprofile" element={<OrgUpdateProfile/>}/>
      <Route path ="/bbupdateprofile" element={<BbUpdateProfile/>}/>
      <Route path ="/request" element={<ApproveRequest/>}/>
      <Route path ="/contactdetails" element={<ContactDetails/>}/>
      <Route path ="/hpviewprofile" element={<HpViewProfile/>}/>
      <Route path ="/hprequest" element={<HpRequest/>}/>
      <Route path ="/trackstatus" element={<TrackStatus/>}/>
      <Route path ="/hpupdateprofile" element={<HpUpdateProfile/>}/>
      <Route path ="/user" element={<IUserRegistration/>}/>
      <Route path ="/iuser_updateprofile" element={<IUserUpdateProfile/>}/>
      <Route path ="/iuserviewprofile" element={<IUserViewProfile/>}/>
      <Route path ="/trackstatus_iuser" element={<TrackStatusIUser/>}/>
      <Route path ="/showbloodbanks_iuser" element={<ShowBloodBankIUser/>}/>
      <Route path ="/search_iuser" element={<SearchBBForIUser/>}/>
      <Route path ="/iuserviewprofile" element={<IUserViewProfile/>}/>
      <Route path ="/hprequest_iuser" element={<IUserRequest/>}/>
      <Route path ="/contactdetails_iuser" element={<ContactDetailsIUser/>}/>
      <Route path ="/aboutus" element={<AboutUs/>}/>




    </Routes>
  
    </div>
    
  );
}

export default App;
