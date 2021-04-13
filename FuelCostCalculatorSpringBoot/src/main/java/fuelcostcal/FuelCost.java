package fuelcostcal;

public class FuelCost 
{
	private String city;
	private  long totalprice;
		
		
	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public long getTotalprice() {
		return totalprice;
	}

	public void setTotalprice(long totalprice) {
		 this.totalprice = totalprice;
	}

	public FuelCost(String city, int totalprice) {
		super();
		this.city = city;
		this.totalprice = totalprice;
	}

	public FuelCost() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	
}
