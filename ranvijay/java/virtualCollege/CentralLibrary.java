
////////////////////////////////////////////////////////
/*CREATIONAL DESIGN PATTERN : FACTORY PATTERN*/
////////////////////////////////////////////////////////
class CentralLibrary extends Building implements BuildingTime {

    short no_of_books;
    short no_of_tables;
    short no_of_chair;
    Staff c_staff[]=new Staff[5];
    Security l_guard;
    public CentralLibrary() {
        //System.out.println("Central library : IN THE CONSTRUCTOR");	
        l_guard=new Security(); 
        /*initialize all parameters*/
        for(int i=0;i<5;i++)
        {
            c_staff[i]=new Staff();
        }
        setOpenCloseTime();
    }

    
    public void setOpenCloseTime() {
            /*set the closing time and the ending time .*/
        //System.out.println("centrallibrary : time set");
      
    }

    void checkStudentId(Student stud) {
        //check for valid student id 
        l_guard.checkId(stud);
        
    }

    void issueBooks(Student stud) {
        if(checkPending(stud))
        {
            //impose a fine 
        }
        else
        {
            //issue the book .
        }
        updateRecords(stud);
        
    }

    private boolean checkPending(Student stud) 
    {
        //check the record for the student who didnt return the book
        return false;
        
    }

    void updateRecords(Student stud) {
        
        //update the record of the student who has taken or returned the book 
    }

    void receiveBooks(Student stud) {
        
        //take the book back and update the record.. 
        updateRecords(stud);				/*CREATIONAL DESIGN PATTERN : object pool creating student is costly*/
    }
    
}
