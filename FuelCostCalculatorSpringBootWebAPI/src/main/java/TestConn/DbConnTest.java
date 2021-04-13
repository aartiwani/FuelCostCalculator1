package TestConn;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DbConnTest {
	
		public static void main(String[] args) throws ClassNotFoundException {
			
			try {
				String cn="org.mariadb.jdbc.Driver";
				String url ="jdbc:mariadb://localhost:3306/advjavadb";
				String username="root";
				String password="";
				Connection con = DriverManager.getConnection(url,username,password);
				System.out.println("connection is working or not");
				
				
				
				
		/*	String cn="org.mariadb.jdbc.Driver";
			String url ="jdbc:mariadb://localhost:3306/advjavadb";
			String username="root";
			String password="";
			Class.forName(cn);//not needed in present day jdbc, but still it is ok..
			
			Connection con = DriverManager.getConnection(url,username,password);*/
			
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		}
	}




