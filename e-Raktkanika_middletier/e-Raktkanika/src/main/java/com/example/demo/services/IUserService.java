package com.example.demo.services;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entities.Hospital;
import com.example.demo.entities.IUser;
import com.example.demo.entities.Login;
import com.example.demo.entities.Stocks;
import com.example.demo.repositories.IUserRepository;


@Service
public class IUserService 
{
	@Autowired
	IUserRepository irepo;
	
	public IUser Save(IUser u)
	{
		return irepo.save(u);
	}
//	
	public IUser getIUser(Login l)
	{
		return irepo.getIUser(l);
	}
//	
//	
//	public List<Stocks> getStock(String blood_grp, String area)
//	{
//		return irepo.getStock(blood_grp,area);
//		
//	}
	


	 public int updateProfile(String email,String contactno,int login_id)
		{
			return  irepo.updateProfile(email,contactno,login_id);
		}


}





