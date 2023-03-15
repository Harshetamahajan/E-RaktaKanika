package com.example.demo.entities;


public class OrganizationReg {
	
	private int org_no;
	private boolean status =true;
	
	private String org_name,email,contactno, org_type, org_regno, password,area, city,pincode;

	public OrganizationReg() {
		super();
		// TODO Auto-generated constructor stub
	}

	public OrganizationReg(int org_no, String org_name, String email, String contactno, String org_type,
			String org_regno, String password, String area, String city, String pincode) {
		super();
		this.org_no = org_no;
		this.org_name = org_name;
		this.email = email;
		this.contactno = contactno;
		this.org_type = org_type;
		this.org_regno = org_regno;
		this.password = password;
		this.area = area;
		this.city = city;
		this.pincode = pincode;
	}

	public OrganizationReg( String org_name, String email, String contactno, String org_type,
			String org_regno, String password, String area, String city, String pincode) {
		super();
		this.org_name = org_name;
		this.email = email;
		this.contactno = contactno;
		this.org_type = org_type;
		this.org_regno = org_regno;
		this.password = password;
		this.area = area;
		this.city = city;
		this.pincode = pincode;
	}

	public int getOrg_no() {
		return org_no;
	}

	public void setOrg_no(int org_no) {
		this.org_no = org_no;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public String getOrg_name() {
		return org_name;
	}

	public void setOrg_name(String org_name) {
		this.org_name = org_name;
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

	public String getOrg_type() {
		return org_type;
	}

	public void setOrg_type(String org_type) {
		this.org_type = org_type;
	}

	public String getOrg_regno() {
		return org_regno;
	}

	public void setOrg_regno(String org_regno) {
		this.org_regno = org_regno;
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
		return "OrganizationReg [org_no=" + org_no + ", status=" + status + ", org_name=" + org_name + ", email="
				+ email + ", contactno=" + contactno + ", org_type=" + org_type + ", org_regno=" + org_regno
				+ ", password=" + password + ", area=" + area + ", city=" + city + ", pincode=" + pincode + "]";
	}
	
   
	
	
	
	
	
	

}
