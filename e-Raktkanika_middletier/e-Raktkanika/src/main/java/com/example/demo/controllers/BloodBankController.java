package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entities.Address;
import com.example.demo.entities.BloodBank;
import com.example.demo.entities.BloodBankReg;
import com.example.demo.entities.Camp;
import com.example.demo.entities.Login;
import com.example.demo.entities.PassBasedEnc;
import com.example.demo.entities.Role;
import com.example.demo.entities.SaltValue;
import com.example.demo.entities.Stocks;
import com.example.demo.repositories.RequestRepository;
import com.example.demo.services.AddressService;
import com.example.demo.services.BloodBankService;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;
import com.example.demo.services.StocksService;


@CrossOrigin(origins="http://localhost:3000")
@RestController
public class BloodBankController {
	@Autowired
	LoginService lservice;
	
	@Autowired
	BloodBankService bbservice;
	
	@Autowired
	RoleService rservice;
	@Autowired
	AddressService aservice;
	
	@Autowired
	RequestRepository rrepo;
	
	@Autowired
	StocksService sservice;
	
	@Autowired
	SaltValue saltValue;
	
	@GetMapping("getbloodbank")
	public BloodBank getBloodBank(@RequestParam("login_id") int login_id)
	{
		Login l =lservice.getById(login_id);
		return bbservice.getBloodBank(l);
	}
	
	@PostMapping("/regbloodbank")
	public BloodBank regBloodBank(@RequestBody BloodBankReg bb)
	{
		
		Role r =rservice.getRole(4);
		System.out.println("Contact,prev:"+bb.getContactno());
		
		String encrypted=PassBasedEnc.generateSecurePassword(bb.getPassword(),saltValue.getSalt());
		
		Login l=new Login(encrypted,bb.getEmail(),bb.getContactno(),r);
		System.out.println("Contact,next:"+bb.getContactno());
		
		
		Address a1 =new Address(bb.getArea(),bb.getCity(),bb.getPincode());
		Login Saved = lservice.save(l);
		Address Saved1 =aservice.saveAddress(a1);
		BloodBank  b = new BloodBank(bb.getBb_name(),bb.getBb_regno(),l,a1);
		BloodBank b2=bbservice.Save(b);
		
		
		
		
		  Stocks s1=new Stocks("A+",0,b2); 
		  Stocks Ss1 = sservice.Save(s1);
		  
		  Stocks s2=new Stocks("A-",0,b2);
		  Stocks Ss2 = sservice.Save(s2);
		  
		  Stocks s3=new Stocks("B+",0,b2); 
		  Stocks Ss3 = sservice.Save(s3);
		  
		  Stocks s4=new Stocks("B-",0,b2);
		  Stocks Ss4= sservice.Save(s4);
		  
		  Stocks s5=new Stocks("AB+",0,b2); 
		  Stocks Ss5 = sservice.Save(s5);
		  
		  Stocks s6=new Stocks("AB-",0,b2);
		  Stocks Ss6 = sservice.Save(s6);
		  
		  Stocks s7=new Stocks("O+",0,b2);
		  Stocks Ss7 = sservice.Save(s7);
		  
		  Stocks s8=new Stocks("O-",0,b2); 
		  Stocks Ss8= sservice.Save(s8);
		  
		  
		 
		
		return bbservice.Save(b);
	}


	@GetMapping("/getallbb")
	public List<BloodBank> getAll()

	{
		return bbservice.getAll();
	}
	  
	@GetMapping("/bbupdateprofile/{email}/{contactno}/{login_id}")
	public int updateProfile(@PathVariable String email,@PathVariable String contactno,@PathVariable  int login_id)
	{
		System.out.println("printed"+email+""+contactno +""+login_id);
		return  bbservice.updateProfile(email,contactno,login_id);
	}
	
	@GetMapping("/getbbdetails")
	 public BloodBank getById(@RequestParam("bb_id") int bb_id)
	 {
		 return bbservice.getById(bb_id);
	 }


	@GetMapping("/unapprovedcamps")
	public List<Camp> unapprovedCamps()
	{
		return  bbservice.unapprovedCamps();
	}
	
	@GetMapping("/approveCamps")
	public int approveCamps(@RequestParam("cid") int cid) 
	{
		
		return bbservice.approveCamps(cid);	
	}
	

}


    



