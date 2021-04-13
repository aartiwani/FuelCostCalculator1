package fuelcostcal;

import fuelcostcal.FuelCost;
import fuelcostcal.Fuelinfo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController

public class RestClass
{
	
	@PostMapping("/Calprice")
	public FuelCost tst(@RequestBody Fuelinfo fuelinfo )
	{
		FuelCost fc=new FuelCost();
		
		long secs=fuelinfo.getSecs();
		long fuelinlit=secs/30*1;
		long price = fuelinlit * fuelinfo.getRate();
		fc.setCity(fuelinfo.getCity());
		fc.setTotalprice(price);
		return fc;		
	}
	

}
