package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "address")
public class Address 
{
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int address_id;
	
	@Column
	private String area;
	@Column
	private String city;
	@Column
	private String pincode;
	public Address() {
		super();
	}
	public Address(int address_id, String area, String city, String pincode) {
		super();
		this.address_id = address_id;
		this.area = area;
		this.city = city;
		this.pincode = pincode;
	}
	public Address( String area, String city, String pincode) {
		super();
		
		this.area = area;
		this.city = city;
		this.pincode = pincode;
	}
	public int getAddress_id() {
		return address_id;
	}
	public void setAddress_id(int address_id) {
		this.address_id = address_id;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	@Override
	public String toString() {
		return "Address [address_id=" + address_id + ", area=" + area + ", city=" + city + ", pincode=" + pincode + "]";
	}
	
	
}
