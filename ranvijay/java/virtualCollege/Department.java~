////////////////////////////////////////////////////////
/*CREATIONAL DESIGN PATTERN : FACTORY PATTERN*/
////////////////////////////////////////////////////////
class Department extends Building implements BuildingTime {
    String depart_name;
    short no_of_classroom;
    short no_of_lab;
    short no_of_staffroom;	
    Classroom d_class[]=new Classroom[5];
    Lab d_lab[]=new Lab[5];
    
    Staff d_staff[]=new Staff[5];
    Faculty d_faculty[]=new Faculty[10];
    Department() {
        
        // System.out.println("department  : constructor");
         /*SET DEPARTMENT NAME AND OTHER ATTRIBUTES*/
         for(int i=0;i<5;i++)
         {
             d_class[i]=new Classroom();     
             d_lab[i]=new Lab();
             d_staff[i]=new Staff();
          //   System.out.println(".................dept object initialized...................");
       
         }
         setOpenCloseTime();
       
    }
    public Department checkDepartment(Department dept[],Student student)
	{
		//check which department he belongs to .. 
		return dept[1];
	} 

    public void setOpenCloseTime() {
        
            //System.out.println("department : time setted");
        /*SET THE OPENING AND THE CLOSE TIME OF THE BUILDING*/
    }

    void checkSchedule(Student student) 
    {
        /*student can check the schedule of the day .. */
        //System.out.println("department : chck schedule of the day .");
      
    }

    void attainLecture(Student student) 
    {
        //System.out.println("department : attain lecture ....");
           Lecturer lecturer=new Lecturer();
         
        for(int j=0;j<5;j++)
        {
            d_class[j].checkRoutine();              //which class room is alloted
            lecturer.takeLecture(d_class[j], student);		/*CREATIONAL DESIGN PATTERN : object pool creating student is costly*/
        }
        //System.out.println("department : lecture is over.... ");

    }
    
    void attainLab(Student student) 
    {
        //System.out.println("department : attain lab ....");

        Lecturer lecturer=new Lecturer();
        for(int j=0;j<5;j++)
        {
            d_lab[j].checkRoutine();              //which class room is alloted
            
            lecturer.takeLab(d_lab[j], student);		/*CREATIONAL DESIGN PATTERN : object pool creating student is costly*/
        }
        //System.out.println("department : lab is over.... ");

    }
    
    
    
}
