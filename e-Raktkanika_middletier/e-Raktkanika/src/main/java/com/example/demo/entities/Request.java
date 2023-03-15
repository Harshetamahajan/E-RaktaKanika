package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "request")
public class Request 
{
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	int req_id;
	
	@Column
	String blood_grp;
	
	@Column
	int qty_req;
	
	@Column
	boolean req_status;
	
	@OneToOne
	@JoinColumn(name="bb_id")
	BloodBank bb_id;
	
	@OneToOne
	@JoinColumn(name="login_id")
	Login login_id;

	public Request() {
		super();
	}

	public Request(int req_id, String blood_grp, int qty_req, boolean req_status, BloodBank bb_id, Login login_id) {
		super();
		this.req_id = req_id;
		this.blood_grp = blood_grp;
		this.qty_req = qty_req;
		this.req_status = false;
		this.bb_id = bb_id;
		this.login_id = login_id;
	}
	public Request(String blood_grp, int qty_req, BloodBank bb_id, Login login_id) {
		super();
		this.blood_grp = blood_grp;
		this.qty_req = qty_req;
		this.req_status = false;
		this.bb_id = bb_id;
		this.login_id = login_id;
	}

	public int getReq_id() {
		return req_id;
	}

	public void setReq_id(int req_id) {
		this.req_id = req_id;
	}

	public String getBlood_grp() {
		return blood_grp;
	}

	public void setBlood_grp(String blood_grp) {
		this.blood_grp = blood_grp;
	}

	public int getQty_req() {
		return qty_req;
	}

	public void setQty_req(int qty_req) {
		this.qty_req = qty_req;
	}

	public boolean isReq_status() {
		return req_status;
	}

	public void setReq_status(boolean req_status) {
		this.req_status = req_status;
	}

	public BloodBank getBb_id() {
		return bb_id;
	}

	public void setBb_id(BloodBank bb_id) {
		this.bb_id = bb_id;
	}

	public Login getLogin_id() {
		return login_id;
	}

	public void setLogin_id(Login login_id) {
		this.login_id = login_id;
	}

	@Override
	public String toString() {
		return "Request [req_id=" + req_id + ", blood_grp=" + blood_grp + ", qty_req=" + qty_req + ", req_status="
				+ req_status + ", bb_id=" + bb_id + ", login_id=" + login_id + "]";
	}
	
	
	
}



