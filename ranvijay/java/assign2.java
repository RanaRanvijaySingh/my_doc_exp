import java.io.*;
import java.util.*;


//......................................FOR BUILDINGS ........................
class Time
{
	short sec , min, hour;
	public void setOpenTime()
	{
		sec=0;
		min=0;
		hour=8;
		//System.out.println("TIME : OPEN TIME SET");	
		
		
	}
	public void setCloseTime()
	{
		sec=0;
		min=0;
		hour=17;
		//System.out.println("TIME : CLOSE TIME SET");	
		
	}
	
}
//......................................FOR ROOMS ........................

abstract class Room 
{
	char room_no[];
	short no_of_chair;
	short no_of_table;
	short capacity_of_room;	
}
class Classroom extends Room
{
	Classroom()
	{
		//System.out.println("CLASSROOM:  OPEN");	
	}
	
}
class Lab extends Room
{
	Lab()
	{
		//System.out.println("LAB:  OPEN");	
	}
}


abstract class Building extends Time
{
	String build_name;
	String establish_date;
	short hight;
	short length;
	short breath;
	float area;
	short no_of_staff;
	Time open_time;
	Time close_time;	
}

class Admin extends Building
{
	short no_of_office;
	Admin()
	{	
		//System.out.println("CANTEEN : IN THE CONSTRUCTOR");	
		
		open_time=new Time();
		close_time=new Time();
	
		open_time.setOpenTime();
		close_time.setCloseTime();
		
		
		
	}
	public boolean checkIfOpenOrClose()
	{
		/*return TRUE if current time is between OPEN and CLOSE time
		else return false*/
		return true;
	}	
	
}

class Department extends Building
{
	short no_of_classroom;
	short no_of_lab;
	short no_of_staffroom;	
	Classroom d_class;
	Lab d_lab;
	Department()
	{	
		//System.out.println("DEPARTMENT : IN THE CONSTRUCTOR");	
		
		d_lab=new Lab();
		d_class	= new Classroom();	
		open_time=new Time();
		close_time=new Time();
	
		open_time.setOpenTime();
		close_time.setCloseTime();
		
		
	}
	public boolean checkIfOpenOrClose()
	{
		/*return TRUE if current time is between OPEN and CLOSE time
		else return false*/
		return true;
	}
	public void attainLecture(Faculty lecturer)	
	{
		//System.out.println("DEPARTMENT : CLASS ROOM WITH THE STUDENTS");
		/*FACULTY object interacting with the Student object*/	
	}
	public void attainLab(Faculty lecturer)	
	{
		//System.out.println("DEPARTMENT : LAB WITH THE STUDENTS");
		/*FACULTY object interacting with the Student object*/		
	}
	
}

class Canteen extends Building
{
	short no_of_tables;
	short no_of_chair;
	Canteen()
	{	
		//System.out.println("CANTEEN : IN THE CONSTRUCTOR");	
		
		open_time=new Time();
		close_time=new Time();
	
		open_time.setOpenTime();
		close_time.setCloseTime();
		
		
		
	}
	public boolean checkIfOpenOrClose()
	{
		/*return TRUE if current time is between OPEN and CLOSE time
		else return false*/
		return true;
	}

	public void orderDish(Student stud)
	{
		//System.out.println("CANTEEN : order dish");		
	}
	public void payBill(Student stud)
	{
		//System.out.println("CANTEEN : pay bill ");		
	}
	public void spendTime(Student stud)
	{
		//System.out.println("CANTEEN : spend time");		
	}
}
class Library extends Building
{
	
	short no_of_books;
	short no_of_tables;
	short no_of_chair;
	
	public boolean checkLibOpenOrClose()
	{
		/*return TRUE if current time is between OPEN and CLOSE time
		else return false*/
		return true;
	}
	public void sitInTheLibrary()
	{
		//System.out.println("LIBRARY : SITTING IN THE LIBRARY ");
	}
	public boolean borrowBook(Student stud)
	{
		/*issue books and update the records*/		
		//System.out.println("LIBRARY : BORROW BOOKS ");
		return true;
	}
	public boolean returnBook(Student stud)
	{
		/*issue books and update the records*/		
		//System.out.println("LIBRARY : RETURN BOOKS ");
		return true;
	}
	public void updateRecords(Student stud)
	{
		/*issue books and update the records*/		
		//System.out.println("LIBRARY : UPDATE RECORDS ");
		
	}
	
}

class Sports extends Building
{
	short no_of_playing_court;	
	Sports()
	{	
		//System.out.println("Sports : IN THE CONSTRUCTOR");	
		
		open_time=new Time();
		close_time=new Time();
	
		open_time.setOpenTime();
		close_time.setCloseTime();
		
		
		
	}
	public boolean checkIfOpenOrClose()
	{
		/*return TRUE if current time is between OPEN and CLOSE time
		else return false*/
		return true;
	}
	public boolean borrowEquipments(Student stud)
	{
		/*issue books and update the records*/		
		//System.out.println("SPORT : BORROW EQUIPMENT ");
		return true;
	}
	public boolean returnEquipment(Student stud)
	{
		/*issue books and update the records*/		
		//System.out.println("SPORT : RETURN EQUIPMENT ");
		return true;
	}
	public void updateRecords(Student stud)
	{
		/*issue books and update the records*/		
		//System.out.println("SPORT : UPDATE RECORDS ");
		
	}
	
	
}
//......................................FOR THE PERSON ........................
abstract class Person
{
	String name;
	byte age;
	char gender[];
	String profession;
	short height;
	short weight;
	char date_of_birth[];
	
}
class Principal extends Person
{
	public void addNewStudent(Student s)
	{
		/*add a new student to the virtual college*/	
		//System.out.println("PRINCIPAL : ADD NEW STUDENT");
	}
}
class Faculty extends Person
{
	char faculty_id[];
	short year_of_experience;
	String expertise;
	Department dept;
	Faculty()
	{
		//System.out.println("FACULTY : CONSTRUCTOR");		
	}
}
class Student extends Person
{
	char student_id[];
	short semester;
	String subject[];
	Department stud_dept;
	Student()
	{
		name="rana";
		age=22;
		semester=8;
		//System.out.println("IN THE STUDENT CONSTRUCOTRS");
		//System.out.println(name+" "+age+" "+semester);
	}
	public boolean motion()
	{
		/*if use is pressing the arrow keys then return 1
		else if the keys are not presed retuyrn false*/
		return false;
	}
	//......................................for the motion of the student...........................
	public void moveForward()
	{
	
	}

	public void turnRight()
	{
	
	}

	public void turnLeft()
	{
	
	}

	public void turnBack()
	{
	
	}
	public void enterInTheCollege()
	{
		//System.out.println("IN THE COLLEGE");
		char exit='n';
		while(exit!='y')
		{
			stud_dept= new Department();
			Library lib=new Library();
			Sports sport= new Sports();
			Canteen cant=new Canteen();
			Admin admin=new Admin();
			//System.out.println("IN THE simulation");
			while(motion())
			{
				System.out.println("IN MOTION");
				/*move according to arrow keys */				
				moveForward();
				turnRight();		
				turnLeft();
				turnBack();
			}


		
			
			/*give choices to the student to perform operations*/
			/*	D : enter the DEPARTMENT BUILDING
				L : enter the LIBRARY BUILDING
				S : enter the SPORTS BUILDING
				C : enter the CANTEEN BUILDING
				A : enter the ADMINISTRATOR BUILDING
			*/
			char choice='C';
			switch(choice)
			{
				case 'D'://System.out.println("DEPARTMENT");
					
					
					if(stud_dept.checkIfOpenOrClose())
					{
						/*press : 1 : to attain LECTURE
							  2 : to attain LAB
							  3 : to attain EXIT DEPARTMENT*/
						int c=2;
						switch(c)
						{
							case 1:	Faculty lecturer=new Faculty(); 
								
								stud_dept.attainLecture(lecturer);
								break;

							case 2:	Faculty lecturer1=new Faculty(); 
								
								stud_dept.attainLab(lecturer1);
								break;
					
							default :break;
						}
						
					}
										
					break;





			
				case 'L':
					 if(lib.checkLibOpenOrClose())
					 {	
						System.out.println("LIBRARY IS OPEN");	
						lib.sitInTheLibrary();
						if(lib.borrowBook(this))
						{
							lib.updateRecords(this);
						}
						if(lib.returnBook(this))
						{
							lib.updateRecords(this);
						}
							

					 }
					else
						{//System.out.println("LIBRARY IS CLOSED");	
							}	
					 break;




			
				case 'S':if(sport.checkIfOpenOrClose())
					 {	
						//System.out.println("SPORTS CENTER IS OPEN");	
						if(sport.borrowEquipments(this))
						{
							sport.updateRecords(this);
						}
						if(sport.returnEquipment(this))
						{
							sport.updateRecords(this);
						}

					 }
					else
						{//System.out.println("SPORTS TIME IS UP");
							}		
					 break;
					




			
				case 'C':if(cant.checkIfOpenOrClose())
					 {	
						//System.out.println("CANTEEN IS OPEN");	
						cant.orderDish(this);
						cant.payBill(this);
						cant.spendTime(this);

					 }
					else
						{//System.out.println("SPORTS TIME IS UP");
							}	
					break;
			





				case 'A':if(admin.checkIfOpenOrClose())
					 {	
						//System.out.println("ADMINISTRATOR BUILDING IS OPEN");	
						

					 }
					else
						{//System.out.println("ADMINISTRATOR BUILDING IS CLOSED");
								}
					break;
			
				default : break;



			}	





//............................................................................................



			exit='y';
			/*if the user chooses to quit 
			make the value of 'exit' = 'y'*/
		}
	}
	public boolean checkIdentification()
	{
		
		//System.out.println("STUDENT CLASS :  CHECK IDENTIFICATION ");
		/*if the studendID is valid return 1 else reuturn 0*/
		return true;	
	}

}
//......................................COLLEGE MAIN  ........................

class College
{
	public static void main(String args[])
	{
		Scanner in = new Scanner(System.in);
		//System.out.println("(COLLEGE) I M IN THE MAIN ");
		Student s= new Student();
		Principal p=new Principal();

		if(s.checkIdentification())
		{
			//System.out.println("STUDENT IDENTIFIED");
			s.enterInTheCollege();
		}
		else
		{
			//System.out.println("THE PERSON IS NOT RECORGANISED ");
			p.addNewStudent(s);
		}
		
	}
}
