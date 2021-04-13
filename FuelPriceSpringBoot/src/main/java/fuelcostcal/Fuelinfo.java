package fuelcostcal;

public class Fuelinfo {
	private Boolean fuellid;
	private String city;
	private  int rate;
	private long secs;
	
	
	public long getSecs() {
		return secs;
	}

	public void setSecs(long secs) {
		this.secs = secs;
	}

	public Boolean getFuellid() {
		return fuellid;
	}

	public void setFuellid(Boolean fuellid) {
		this.fuellid = fuellid;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}

	public int getRate() {
		return rate;
	}
	public void setRate(int rate) {
		this.rate = rate;
	}

	public Fuelinfo(Boolean fuellid, String city,int rate) {
		super();
		this.fuellid = fuellid;
		this.city = city;
		this.rate=rate;
	}
	public Fuelinfo()
	{
		super();
	};

}
