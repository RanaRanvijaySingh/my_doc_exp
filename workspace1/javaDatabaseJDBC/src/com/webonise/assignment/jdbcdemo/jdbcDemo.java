package com.webonise.assignment.jdbcdemo;

import java.sql.*;
 
class jdbcDemo 
{
	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";  
 
	private static final String url = "jdbc:mysql://localhost/test";
 
    private static final String user = "root";
 
    private static final String password = "root";
 
    public static void main(String args[]) 
    {
    	try 
    	{
    	
    		Connection con = DriverManager.getConnection(url, user, password);   
    	
    		Statement stat_emp = con.createStatement();
    		Statement stat_dept = con.createStatement();
    		Statement stat_noEMP = con.createStatement();
    		Statement stat_DOB = con.createStatement();
    		Statement stat_DEPT = con.createStatement();
    		Statement stat_EMP = con.createStatement();
    
        
    		   createTableDepartment(stat_DEPT);
             //  System.out.println("now to create statement");
               
               createTableEmployee(stat_EMP);
            //   System.out.println("now to create statement");
            
            String query_emp="SELECT * FROM employee";
            String query_dept="SELECT * FROM department";
            String query_noEMP="SELECT dept_name,COUNT(employee.id) "
            		+ "AS noOfEmployee "
            		+ "FROM employee   "
            		+ "LEFT JOIN department "
            		+ "ON employee.dept_id=department.id GROUP BY dept_name";	
            
            String query_DOB="SELECT t1.fname, t1.age, t1.dob "
            		+ "FROM employee t1 "
            		+ "INNER JOIN employee t2 "
            		+ "ON t2.dob = t1.dob "
            		+ "WHERE t2.id != t1.id";
           // System.out.println("now to create statement");
            
            
            
            ResultSet rs_emp=stat_emp.executeQuery(query_emp);
            ResultSet rs_dept=stat_dept.executeQuery(query_dept);
            ResultSet rs_noEMP=stat_noEMP.executeQuery(query_noEMP);
            ResultSet rs_DOB=stat_DOB.executeQuery(query_DOB);
            //System.out.println("now to create statement");
            
         
            
            
            displayTableEmployee(rs_emp);
            //System.out.println("now to create statement");
            
            displayTableDepartment(rs_dept);
            //System.out.println("now to create statement");
            
            getNoOfEmployee(rs_noEMP);
           // System.out.println("now to create statement");
            
            findSimilarDOB(rs_DOB);
         //   System.out.println("now to create statement");
            
         
 
        } 
        catch (Exception e) 
        {
            e.printStackTrace();
        }
    }


	private static void createTableEmployee(Statement stat_EMP) throws SQLException 
	{
		String query_reg = "create table employee(id TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,"
				+ "fname VARCHAR(15) NOT NULL,"
				+ "age TINYINT(3) UNSIGNED NOT NULL,"
				+ "dob DATE NOT NULL,"
				+ "dept_id TINYINT UNSIGNED NOT NULL,"
				+ "PRIMARY KEY(id),"
				+ "FOREIGN KEY (dept_id) REFERENCES department(id))"; 
	    	stat_EMP.executeUpdate(query_reg);	
	    	
	    	String sql = "insert into employee values(NULL,'rana',22,'1989-11-5',2)";
	    	 stat_EMP.executeUpdate(sql);
	    	 sql = "insert into employee values(NULL,'anvay',22,'1989-5-11',1)";
	    	 stat_EMP.executeUpdate(sql);
	    	
	    	 sql = "insert into employee values(NULL,'vijay',21,'1990-12-6',3)";
	    	 stat_EMP.executeUpdate(sql);
	    	 
	    	 sql = "insert into employee values(NULL,'bhuvan',32,'1972-11-17',2)";
	    	 stat_EMP.executeUpdate(sql);
	    	 
	    	 sql = "insert into employee values(NULL,'aditya',22,'1989-3-5',1)";
	    	 stat_EMP.executeUpdate(sql);
	    	
	    	 sql = "insert into employee values(NULL,'dron',25,'1989-5-11',3)";
	    	 stat_EMP.executeUpdate(sql);
	    	 
	    	 sql = "insert into employee values(NULL,'rakesh',25,'1986-12-12',5)";
	    	 stat_EMP.executeUpdate(sql);
	    	 
	    	 sql = "insert into employee values(NULL,'rahul',22,'1989-4-15',4)";
	    	 stat_EMP.executeUpdate(sql);
	    	 
	    	 sql = "insert into employee values(NULL,'rohit',22,'1989-4-15',4)";
	    	 stat_EMP.executeUpdate(sql);
		
		
	}


	private static void createTableDepartment(Statement stat_DEPT) throws SQLException 
	{
		String query_reg = "create table department("
				+ "id TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,"
				+ "dept_name VARCHAR(15) NOT NULL,"
				+ "PRIMARY KEY(id))"; 
	    	stat_DEPT.executeUpdate(query_reg);	
	    	
	    	String sql = "insert into department values(NULL,'cs')";
	    	 stat_DEPT.executeUpdate(sql);
	    	 
	    	 sql = "insert into department values(NULL,'IS')";
	    	 stat_DEPT.executeUpdate(sql);
	    	 
	    	 sql = "insert into department values(NULL,'mechanical')";
	    	 stat_DEPT.executeUpdate(sql);
	    	 
	    	 sql = "insert into department values(NULL,'electrical')";
	    	 stat_DEPT.executeUpdate(sql);
	    	 
	    	 sql = "insert into department values(NULL,'civil')";
	    	 stat_DEPT.executeUpdate(sql);

		
	}


	private static void findSimilarDOB(ResultSet rs_DOB) throws SQLException 
	{
		System.out.println("\n\n---------------------------------------------------");
        System.out.println("NAME\tAGE\tDOB");
        System.out.println("---------------------------------------------------");
        while(rs_DOB.next())
        {
           //Retrieve by column name
           String name=rs_DOB.getString("fname");
           int age  = rs_DOB.getInt("age");
           String dob=rs_DOB.getString("dob");
           System.out.println(name+"\t"+age+"\t"+dob);
                   
        }
		
	}


	private static void getNoOfEmployee(ResultSet rs_noEMP) throws SQLException
	{
		
		 
		 System.out.println("\n\n---------------------------------------------------");
         System.out.println("DEPARTMENT\tNO OF EMP");
         System.out.println("---------------------------------------------------");
         while(rs_noEMP.next())
         {
            //Retrieve by column name
            String dept_name= rs_noEMP.getString("dept_name");
            int noEMP=rs_noEMP.getInt("noOfEmployee");
            //Display values
            System.out.println(dept_name+"\t\t"+noEMP);
           
         }
		
	}


	private static void displayTableDepartment(ResultSet rs_dept) throws SQLException 
	{

        System.out.println("\n\n---------------------------------------------------");
        System.out.println("ID\tDEPARTMENT NAME");
        System.out.println("---------------------------------------------------");
        while(rs_dept.next())
        {
           //Retrieve by column name
           int id  = rs_dept.getInt("id");
           String dept_name= rs_dept.getString("dept_name");
           
           //Display values
           System.out.println(id+"\t"+dept_name);
          
        }
		
	}

	private static void displayTableEmployee(ResultSet rs_emp) throws SQLException 
	{
		System.out.println("---------------------------------------------------");
        System.out.println("ID\tNAME\tAGE\tDOB\t\tDEPATRMENT");
        System.out.println("---------------------------------------------------");
        while(rs_emp.next())
        {
           //Retrieve by column name
           int id  = rs_emp.getInt("id");
           String name= rs_emp.getString("fname");
           int age = rs_emp.getInt("age");
           String dob=rs_emp.getString("dob");
           int dept_id = rs_emp.getInt("dept_id");
           
           //Display values
           System.out.println(id+"\t"+name+"\t"+age+"\t"+dob+"\t"+dept_id);
          
        }	
	}
}