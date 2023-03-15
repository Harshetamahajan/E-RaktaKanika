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
import com.example.demo.entities.IUser;
import com.example.demo.entities.IUserReg;
import com.example.demo.entities.Login;
import com.example.demo.entities.PassBasedEnc;
import com.example.demo.entities.Role;
import com.example.demo.entities.SaltValue;
import com.example.demo.entities.Stocks;
import com.example.demo.services.AddressService;
import com.example.demo.services.IUserService;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;


@CrossOrigin(origins="http://localhost:3000")
@RestController
public class IUserController 
{
	@Autowired
	LoginService lservice;
	
	@Autowired
	AddressService aservice;
	
	@Autowired
	RoleService rservice;
	
	@Autowired
	IUserService iservice;
	
	@Autowired
	SaltValue saltValue;
	
	@PostMapping("/iuser")
	public IUser regIUser(@RequestBody IUserReg bb)
	{
		Role r =rservice.getRole(3);
		
		String encrypted=PassBasedEnc.generateSecurePassword(bb.getPassword(),saltValue.getSalt());
		
		Login l=new Login(encrypted,bb.getEmail(),bb.getContactno(),r,bb.isStatus());
		Address a1 =new Address(bb.getArea(),bb.getCity(),bb.getPincode());
		Login Saved = lservice.save(l);
		Address Saved1 =aservice.saveAddress(a1);
		
		IUser  b = new IUser(bb.getUname(),bb.getAdharno(),a1,l);
		return iservice.Save(b);
	}


//	@GetMapping("/searchbbforiuser/{blood_grp}/{area}")
//    public List<Stocks> getStock(@PathVariable String blood_grp,@PathVariable String area)
//    {
//		System.out.println(blood_grp+" "+area);
//    	return iservice.getStock(blood_grp,area);
//    }
//	
	@GetMapping("/getiuser")
	public IUser getIUser(@RequestParam("login_id") int login_id)
	{
		Login l=lservice.getById(login_id);
		return iservice.getIUser(l);
	}
//	
	@GetMapping("/iuserupdateprofile/{email}/{contactno}/{login_id}")
	public int updateProfile(@PathVariable String email,@PathVariable String contactno,@PathVariable  int login_id)
	{
		System.out.println("printed"+email+""+contactno +""+login_id);
		return  iservice.updateProfile(email,contactno,login_id);
	}


	
}





