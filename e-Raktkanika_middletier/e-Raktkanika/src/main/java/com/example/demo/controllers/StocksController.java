package com.example.demo.controllers;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entities.BloodBank;
import com.example.demo.entities.Stocks;
import com.example.demo.services.BloodBankService;
import com.example.demo.services.StocksService;


@CrossOrigin(origins="http://localhost:3000")
@RestController
public class StocksController {


	


	@Autowired
	BloodBankService bbservice;
	
	
	@Autowired
	StocksService sservice;
	
	
	
//	@PostMapping("/stocks")
//	public Stocks regBloodBank(@RequestBody StocksDummy ss )
//	{
//		BloodBank b1 =new BloodBank(ss.getBb_name(),ss.getBb_regno());
//		BloodBank Savedd=bbservice.Save(b1);
//		
//		
//	}
	


	@GetMapping("/getstock")
	public List<Stocks> getStocks(@RequestParam("bb_id") int bb_id)
	{
		BloodBank b =bbservice.getById(bb_id);
		return sservice.getStocks(b);
	}
	
//	@PutMapping("update_quantity/{quantity}")
//	public Stocks UpdateQuantity(@PathVariable("quantity")int quantity ,@PathVariable("stock_id")int stock_id)
//	{
//		sservice.UpdateQuantity(quantity,stock_id);
//	}
//	
	@GetMapping("/updatequantity")
	public int updateQuantity(@RequestParam ("quantity")int quantity,@RequestParam ("stock_id") int stock_id)
	{
		return  sservice.updateQuantity(quantity,stock_id);
	}

	
}






