////////////////////////////////////////////////////////
/*CREATIONAL DESIGN PATTERN : FACTORY PATTERN*/
////////////////////////////////////////////////////////
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
	
     //   System.out.println("STUDENT  :   CONSTRUCOTRS");
	
    }

    void startCollegeDay(Department dept[],Sports sports,CentralLibrary centralLibrary,Canteen canteen,Admin admin) {
       // System.out.println("student : start college day");
	Department department;        
	char ch='y';
        while(ch=='y')
        {
            if(true)        //if forward key is pressed.       
            {
                moveForward();
                /*move the person in the forward direction */
            }
            if(true)  //if left key is pressed.
            {
                turnLeft();
                /*turn the person in left direstion  */
            }
            if(true) //if right key is pressed.
            {
                turnRight();
                /*turn the person in Right direstion  */
            }
            if(true)  //if back key is pressed.
            {
                turnBack();
                /*turn the person in back direstion  */
            }
    
         //   System.out.println("STUDENT  :   after the movement in the campus");
            
            
	/*give choices to the student to perform operations*/
                    	/*	D : enter the DEPARTMENT BUILDING
				L : enter the LIBRARY BUILDING
				S : enter the SPORTS BUILDING
				C : enter the CANTEEN BUILDING
				
			*/
           char choice='D';
			switch(choice)
			{
				case 'D'://System.out.println("in the department DEPARTMENT");
					department=dept[0].checkDepartment(dept,this); /*CREATIONAL DESIGN PATTERN : object pool creating student is costly*/                                       
					department.checkSchedule(this);/*CREATIONAL DESIGN PATTERN : object pool creating student is costly*/
                                        department.attainLecture(this);/*CREATIONAL DESIGN PATTERN : object pool creating student is costly*/
                                        department.attainLab(this);/*CREATIONAL DESIGN PATTERN : object pool creating student is costly*/
                                        //System.out.println("out of the department DEPARTMENT");
					break;			
				
                                
                                
                                
                                
                                case 'L'://System.out.println("in the Central library ");
                                        centralLibrary.checkStudentId(this);/*CREATIONAL DESIGN PATTERN : object pool creating student is costly*/
                                        centralLibrary.issueBooks(this);/*CREATIONAL DESIGN PATTERN : object pool creating student is costly*/
                                        centralLibrary.updateRecords(this);/*CREATIONAL DESIGN PATTERN : object pool creating student is costly*/
                                        centralLibrary.receiveBooks(this);/*CREATIONAL DESIGN PATTERN : object pool creating student is costly*/
                                        //System.out.println("out of the library ");
					
					 break;




			
				case 'S'://System.out.println("in the Sports department ");
                                        	sports.forGym(this);
                                                if(sports.borrowEquipments(this))
						{
							sports.updateRecords(this);/*CREATIONAL DESIGN PATTERN : object pool creating student is costly*/
						}
						if(sports.returnEquipment(this))
						{
							sports.updateRecords(this);/*CREATIONAL DESIGN PATTERN : object pool creating student is costly*/
						}
                                                
                                       // System.out.println("out of the sports ");
					
                                    break;
					




			
				case 'C'://System.out.println("CANTEEN IS OPEN");	
                                        canteen.orderDish(this);/*CREATIONAL DESIGN PATTERN : object pool creating student is costly*/
					canteen.payBill(this);/*CREATIONAL DESIGN PATTERN : object pool creating student is costly*/
					canteen.spendTime(this);/*CREATIONAL DESIGN PATTERN : object pool creating student is costly*/	
                                                    
					break;
				default : break;



			
                        }
            
	
            ch ='n';
        }
        
        
        
    }
    private boolean moveForward() {
       return true;
    }
    
    private boolean turnLeft() {
       return true;
    }

    private boolean turnBack() {
        return true;
    }

    private boolean turnRight() {
        
        return true;
    }

}

   
