package com.example.demo.entities;


public class HospitalReg 
{
	int hp_id;
	String hp_name,hp_regno,email,password,contactno,area,city,pincode;
	
	public HospitalReg() {
		super();
		// TODO Auto-generated constructor stub
	}


	public HospitalReg( String hp_name, String hp_regno, String email, String password, String contactno,
			String area, String city, String pincode) {
		super();
	
		this.hp_name = hp_name;
		this.hp_regno = hp_regno;
		this.email = email;
		this.password = password;
		this.contactno = contactno;
		this.area = area;
		this.city = city;
		this.pincode = pincode;
	}


	public int getHp_id() {
		return hp_id;
	}


	public void setHp_id(int hp_id) {
		this.hp_id = hp_id;
	}


	public String getHp_name() {
		return hp_name;
	}


	public void setHp_name(String hp_name) {
		this.hp_name = hp_name;
	}


	public String getHp_regno() {
		return hp_regno;
	}


	public void setHp_regno(String hp_regno) {
		this.hp_regno = hp_regno;
	}


	public String getEmail() {
		return email; 
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getContactno() {
		return contactno;
	}


	public void setContactno(String contactno) {
		this.contactno = contactno;
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
		return "HospitalReg [hp_id=" + hp_id + ", hp_name=" + hp_name + ", hp_regno=" + hp_regno + ", email=" + email
				+ ", password=" + password + ", contactno=" + contactno + ", area=" + area + ", city=" + city
				+ ", pincode=" + pincode + "]";
	}
	
	
	
	
}






