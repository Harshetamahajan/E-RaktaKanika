package com.example.demo.services;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entities.Admin;
import com.example.demo.entities.BloodBank;
import com.example.demo.entities.Camp;
import com.example.demo.entities.Hospital;
import com.example.demo.entities.Login;

import com.example.demo.repositories.AdminRepository;


@Service
public class AdminService {
	
	@Autowired
	AdminRepository arepository;	
	
	public List<BloodBank> unapprovedBB()
	{
		return arepository.unapprovedBB();
	}
	
	
	public List<Hospital> unapprovedHp() 
	{
		return arepository.unapprovedHp();	
	}
	
	
	

	
	public List<Login> list_to_deactivate()
	{
		return arepository.list_to_deactivate();
	}

	public int approveBB( int login_id) 
	{
		
		return arepository.approveBB(login_id);
		
	}
	


	public int approveHp(int login_id) 
	{
		
		return arepository.approveHp(login_id);
		
	}


	
	
	
	public int deactivateUser(int loginid)
	{
		return arepository.deactivateUser(loginid);
	}


	public Admin saveAdmin(Admin ad)
	{
		return arepository.save(ad);
	}



}


