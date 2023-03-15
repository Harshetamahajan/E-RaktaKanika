package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.BloodBank;
import com.example.demo.entities.Login;
import com.example.demo.entities.Request;
import com.example.demo.repositories.BloodBankRepository;
import com.example.demo.repositories.RequestRepository;

@Service
public class RequestService {
	
	@Autowired
	RequestRepository rrepo;
	
	
	public Request Save(Request r)
	{
		return rrepo.save(r);
	}
	
	 public List<Request> getAll()
	 {
		 return rrepo.getAll();
	 }

	 public int approveReq( int req_id) 
		{
			
			return rrepo.approveReq(req_id);
			
		}
		
	 public List<Request> getAprovedRequest(Login login_id)
		{
			return rrepo.getAprovedRequest(login_id);
			
		}
		
//		public List<Request> getPendingRequest(BloodBank bb_id)
//		{
//			return rrepo.getPendingRequest(bb_id);
//			
//		}


	 


}


