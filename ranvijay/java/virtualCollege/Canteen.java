
////////////////////////////////////////////////////////
/*CREATIONAL DESIGN PATTERN : FACTORY PATTERN*/
////////////////////////////////////////////////////////
class Canteen extends Building implements BuildingTime{

    short no_chair;
    short no_table;
    Staff can_staff[]=new Staff[5];
    
    Canteen()
    {
        /*initialize all the components*/
       // System.out.println("CANTEEN : IN THE CONSTRUCTOR");	
	
        for(int i=0;i<5;i++)
        {
            can_staff[i]=new Staff();
        }
        setOpenCloseTime();
    }
    public void setOpenCloseTime() {
    
        //System.out.println("CANTEEN : time set");	
		
    }

    void orderDish(Student stud) {
        
        //order food 
    }

    void payBill(Student stud) {
        
        //pay for the bill
    }

    void spendTime(Student stud) {
        
        //time pass in the canteen
    }
    
    
}
