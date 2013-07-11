import java.io.*;
class College
{
	Student student[];
	Faculty faculty[];
	Department dept;
	Sports sports;
	CentralLibrary centralLibrary;
	initializeCollege()
	{
	
	}
	
	
	
	
	public static void main(String args[])
	{
		initializeCollege();
	}
}
//..............................................................................
//...................PERSON CLASS AND EXTENDED CLASSES..........................
//..............................................................................
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
	
}
class Security extends Person
{
	
}
class Faculty extends Person
{
	char faculty_id[];
	short year_of_experience;
	String expertise;
	Department dept;
	
}
class Student extends Person
{
	char student_id[];
	short semester;
	String subject[];
	Department stud_dept;
	
	public boolean motion()
	{
		/*if use is pressing the arrow keys then return 1
		else if the keys are not presed retuyrn false*/
		return false;
	}
	//......................................for the motion of the student...........................
	public void moveForward()
	{	}

	public void turnRight()
	{	}

	public void turnLeft()
	{	}

	public void turnBack()
	{	}

}
