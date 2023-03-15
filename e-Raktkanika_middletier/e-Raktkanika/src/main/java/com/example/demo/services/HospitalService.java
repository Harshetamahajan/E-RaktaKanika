package com.example.demo.services;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Hospital;
import com.example.demo.entities.Login;
import com.example.demo.entities.Stocks;
import com.example.demo.repositories.HospitalRepository;


@Service
public class HospitalService 
{
	@Autowired
	HospitalRepository hrepo;
	
	public Hospital Save(Hospital h)
	{
		return hrepo.save(h);
	}
	
	public Hospital getHospital(Login l)
	{
		return hrepo.getHospital(l);
	}
	
	public List<Stocks> getStock(String blood_grp, String area)
	{
		return hrepo.getStock(blood_grp,area);
		
	}
	 
	 public int updateProfile(String email,String contactno,int login_id)
		{
			return  hrepo.updateProfile(email,contactno,login_id);
		}





	
}






