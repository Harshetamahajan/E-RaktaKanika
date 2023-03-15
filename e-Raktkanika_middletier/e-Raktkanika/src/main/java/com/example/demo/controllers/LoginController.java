package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.LoginCheck;
import com.example.demo.entities.PassBasedEnc;
import com.example.demo.entities.SaltValue;
import com.example.demo.services.LoginService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController {
	
	@Autowired
	LoginService lservice;
	
	@Autowired
	SaltValue saltValue;
	
	@PostMapping("/checklogin")
	public Login checkLogin(@RequestBody LoginCheck lcheck)
	{
		System.out.println(saltValue.getSalt());
		String encrypted=PassBasedEnc.generateSecurePassword(lcheck.getPassword(),saltValue.getSalt());
		System.out.println(encrypted);
		
		return lservice.getLogin(lcheck.getEmail(),encrypted);
		
	}
	
	@GetMapping("/deleteprofile")
	public int deleteProfile(@RequestParam("login_id") int login_id) 
	{
		
		return lservice.deleteProfile(login_id);
		
	}


}
