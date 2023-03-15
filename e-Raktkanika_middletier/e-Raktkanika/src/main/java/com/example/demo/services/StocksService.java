package com.example.demo.services;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entities.BloodBank;

import com.example.demo.entities.Stocks;
import com.example.demo.repositories.StocksRepository;


@Service
public class StocksService {
	@Autowired
	StocksRepository srepo;
	
	public Stocks Save(Stocks s)
	{
		return srepo.save(s);
	}


	public List<Stocks> getStocks(BloodBank v)
	{
		return srepo.getStocks(v);
	}


	public int updateQuantity(int quantity,int stock_id)
	{
		return  srepo.updateQuantity(quantity,stock_id);
	}


	
	
	
}






