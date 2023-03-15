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
import com.example.demo.entities.Hospital;
import com.example.demo.entities.HospitalReg;
import com.example.demo.entities.Login;
import com.example.demo.entities.PassBasedEnc;
import com.example.demo.entities.Role;
import com.example.demo.entities.SaltValue;
import com.example.demo.entities.Stocks;
import com.example.demo.services.AddressService;
import com.example.demo.services.HospitalService;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;


@CrossOrigin(origins="http://localhost:3000")
@RestController
public class HospitalController 
{
	@Autowired
	LoginService lservice;
	
	@Autowired
	AddressService aservice;
	
	@Autowired
	RoleService rservice;
	
	@Autowired
	HospitalService hservice;
	
	@Autowired
	SaltValue saltValue;
	
	@PostMapping("/reghospital")
	public Hospital regHospital(@RequestBody HospitalReg hp)
	{
		Role r=rservice.getRole(2);
		
		String encrypted=PassBasedEnc.generateSecurePassword(hp.getPassword(),saltValue.getSalt());
		
		Login l=new Login(encrypted,hp.getEmail(),hp.getContactno(),r);
		Address a1=new Address(hp.getArea(),hp.getCity(),hp.getPincode());
		Login saved=lservice.save(l);
		Address saved1=aservice.saveAddress(a1);
		Hospital h=new Hospital(hp.getHp_name(),hp.getHp_regno(),a1,l);
		return hservice.Save(h);
		
	}
	
	@GetMapping("/gethospital")
	public Hospital getHospital(@RequestParam("login_id") int login_id)
	{
		Login l=lservice.getById(login_id);
		return hservice.getHospital(l);
	}
	
	@GetMapping("/searchbbforhosp/{blood_grp}/{area}")
    public List<Stocks> getStock(@PathVariable String blood_grp,@PathVariable String area)
    {
		System.out.println(blood_grp+" "+area);
    	return hservice.getStock(blood_grp,area);
    }
	
	@GetMapping("/updateprofile/{email}/{contactno}/{login_id}")
	public int updateProfile(@PathVariable String email,@PathVariable String contactno,@PathVariable  int login_id)
	{
		System.out.println("printed"+email+""+contactno +""+login_id);
		return  hservice.updateProfile(email,contactno,login_id);
	}


	
	
}






