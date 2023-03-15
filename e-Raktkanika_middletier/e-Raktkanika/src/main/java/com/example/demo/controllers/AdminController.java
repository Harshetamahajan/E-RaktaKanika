
package com.example.demo.controllers;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Address;
import com.example.demo.entities.Admin;
import com.example.demo.entities.AdminReg;
import com.example.demo.entities.BloodBank;
import com.example.demo.entities.Camp;
import com.example.demo.entities.Hospital;
import com.example.demo.entities.Login;
import com.example.demo.entities.PassBasedEnc;
import com.example.demo.entities.Role;
import com.example.demo.entities.SaltValue;

import com.example.demo.services.AddressService;
import com.example.demo.services.AdminService;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;


@CrossOrigin(origins="http://localhost:3000")
@RestController
public class AdminController {
	
		@Autowired
		AdminService aservice;
		
		@Autowired
		LoginService lservice;
		
		@Autowired
		AddressService adservice;
		
	@Autowired
	SaltValue saltValue;
	
	@Autowired
	RoleService rservice;
		
		@GetMapping("/unapprovedBB")
		public List<BloodBank> unapprovedBB()
		{
			return  aservice.unapprovedBB();
		}
		
		
		@GetMapping("/unapprovedHp")
		public List<Hospital> unapprovedHp() 
		{
			
			return aservice.unapprovedHp();	
		}
		
		
		
		@GetMapping("/list_to_deactivate")
		public List<Login> list_to_deactivate()
		{
			return aservice.list_to_deactivate();
		}

		
		@GetMapping("/approveBB")
		public int approveBB(@RequestParam("login_id") int login_id) 
		{	
			return aservice.approveBB(login_id);
		}
		
		@GetMapping("/approveHp")
		public int approveHp(@RequestParam("login_id") int login_id) 
		{
			
			return aservice.approveHp(login_id);	
		}
		
		
	
		
		
		@GetMapping("/deactivateUser")
		public int deactivateUser(@RequestParam("loginid")int loginid)
		{
			return aservice.deactivateUser(loginid);
		}
		
		@PostMapping("/regadmin")
		public Admin saveAdmin(@RequestBody AdminReg ad)
		{
			Role r =rservice.getRole(1);
			//System.out.println("Contact,prev:"+bb.getContactno());
			
			String encrypted=PassBasedEnc.generateSecurePassword(ad.getPassword(),saltValue.getSalt());
			
			Login l=new Login(encrypted,ad.getEmail(),ad.getContactno(),r);
			//Address a = new Address(ad.getArea(),ad.getCity(),ad.getPincode());
			
			//Address saved1 = adservice.saveAddress(a);
			Login saved = lservice.save(l);
			
			Admin a = new Admin(ad.getAdmin_name(),l);
			
			//System.out.println("Contact,next:"+bb.getContactno());
			
			return aservice.saveAdmin(a);
		}
}





