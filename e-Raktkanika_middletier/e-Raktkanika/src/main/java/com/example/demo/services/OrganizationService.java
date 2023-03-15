package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entities.Login;
import com.example.demo.entities.Organization;
import com.example.demo.entities.OrganizationReg;
import com.example.demo.repositories.OrganizationRepository;

@Service
public class OrganizationService {
	
	@Autowired
	OrganizationRepository orgrepo;
	
	public Organization Save(Organization org)
	{
		return orgrepo.save(org);		
	}
	
	
	
	public Organization getOrganization(Login l)
	{
		return orgrepo.getOrganization(l);
	}
	
	public Organization getOrgById(int org_id)
	{
		return orgrepo.findById(org_id).get();
	}
	
	public int updateProfile(String email,String contactno,int login_id)
	{
		return  orgrepo.updateProfile(email,contactno,login_id);
	}
	
	
}
