package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="camp")
public class Camp {
	

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cid;
	
	@Column
	private String cname;
	
	@Column
	private String cdate;
	
	@Column
	private String ctime;
	
	@Column
	private boolean camp_status;
	
	
	@OneToOne
	@JoinColumn(name="address_id")
	Address address_id;
	
	@OneToOne
	@JoinColumn(name="org_id")
	Organization org_id;
	
	@OneToOne
	@JoinColumn(name="bb_id")
	BloodBank bb_id;

	public int getCid() {
		return cid;
	}

	public void setCid(int cid) {
		this.cid = cid;
	}

	public String getCname() {
		return cname;
	}

	public void setCname(String cname) {
		this.cname = cname;
	}

	public String getCdate() {
		return cdate;
	}

	public void setCdate(String cdate) {
		this.cdate = cdate;
	}

	public String getCtime() {
		return ctime;
	}

	public void setCtime(String ctime) {
		this.ctime = ctime;
	}

	public boolean isCamp_status() {
		return camp_status;
	}

	public void setCamp_status(boolean camp_status) {
		this.camp_status = camp_status;
	}

	public Address getAddress_id() {
		return address_id;
	}

	public void setAddress_id(Address address_id) {
		this.address_id = address_id;
	}

	public Organization getOrg_id() {
		return org_id;
	}

	public void setOrg_id(Organization org_id) {
		this.org_id = org_id;
	}

	public BloodBank getBb_id() {
		return bb_id;
	}

	public void setBb_id(BloodBank bb_id) {
		this.bb_id = bb_id;
	}

	public Camp(String cname, String cdate, String ctime, Address address_id, Organization org_id,
			BloodBank bb_id) {
		super();
		this.cname = cname;
		this.cdate = cdate;
		this.ctime = ctime;
		this.camp_status = false;
		this.address_id = address_id;
		this.org_id = org_id;
		this.bb_id = bb_id;
	}

	public Camp() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	


}


