package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.BloodBank;
import com.example.demo.entities.Login;
import com.example.demo.entities.Request;
import com.example.demo.services.BloodBankService;
import com.example.demo.services.HospitalService;
import com.example.demo.services.LoginService;
import com.example.demo.services.RequestService;
import com.example.demo.services.RoleService;



@CrossOrigin(origins="http://localhost:3000")
@RestController
public class RequestController {

	
	
	@Autowired
	RequestService rservice;
	
	@Autowired
	LoginService lservice;
	
	@Autowired
	HospitalService hservice;
	

	
	@Autowired
	BloodBankService bservice;
	
	@GetMapping("/getrequest")
	public List<Request> getAll()

	{
	
		return rservice.getAll();
	}
	
	@GetMapping("/approvereq")
	public int approveReq(@RequestParam("req_id") int req_id) 
	{	
		return rservice.approveReq(req_id);	
	}
	
	@PostMapping("/saverequest/{bb_id}/{login_id}/{blood_grp}/{qty_req}")
	public Request saveRequest(@PathVariable int bb_id,@PathVariable int login_id,@PathVariable String blood_grp,@PathVariable int qty_req)
	{
		BloodBank b_obj=bservice.getById(bb_id);
		Login l_obj=lservice.getById(login_id);
		Login l_saved=lservice.save(l_obj);
		BloodBank b_saved=bservice.Save(b_obj);
		Request req=new Request(blood_grp,qty_req,b_saved,l_saved);
		return rservice.Save(req);
	}
	
	@GetMapping("/getapprovedrequest/{login_id}")
    public List<Request> getAprovedRequest(@PathVariable int login_id)
    {
		Login l_obj=lservice.getById(login_id);
		Login l_saved=lservice.save(l_obj);
		
    	return rservice.getAprovedRequest(l_saved);
    }
	
//	@GetMapping("/getpendingrequest/{bb_id}")
//    public List<Request> getPendingRequest(@PathVariable int bb_id)
//    {
//		BloodBank b_obj=bservice.getById(bb_id);
//		BloodBank b_saved=bservice.Save(b_obj);
//	
//    	return rservice.getPendingRequest(b_saved);
//    }
//	




	
	

}


