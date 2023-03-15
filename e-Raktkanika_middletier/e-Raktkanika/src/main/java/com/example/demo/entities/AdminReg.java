package com.example.demo.entities;

public class AdminReg {

	
	private int admin_id;
	private String admin_name;
	
	private String email,contactno,password,area, city,pincode;

	public AdminReg() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AdminReg(String admin_name, String email, String contactno, String password, String area, String city,
			String pincode) {
		super();
		this.admin_name = admin_name;
		this.email = email;
		this.contactno = contactno;
		this.password = password;
		this.area = area;
		this.city = city;
		this.pincode = pincode;
	}

	public int getAdmin_id() {
		return admin_id;
	}

	public void setAdmin_id(int admin_id) {
		this.admin_id = admin_id;
	}

	public String getAdmin_name() {
		return admin_name;
	}

	public void setAdmin_name(String admin_name) {
		this.admin_name = admin_name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContactno() {
		return contactno;
	}

	public void setContactno(String contactno) {
		this.contactno = contactno;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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
		return "AdminReg [admin_id=" + admin_id + ", admin_name=" + admin_name + ", email=" + email + ", contactno="
				+ contactno + ", password=" + password + ", area=" + area + ", city=" + city + ", pincode=" + pincode
				+ "]";
	}
	
	
	
}
