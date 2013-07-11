
////////////////////////////////////////////////////////
/*CREATIONAL DESIGN PATTERN : ABSTRACT FACTORY PATTERN*/
////////////////////////////////////////////////////////
class Admin extends Building implements BuildingTime{

    short no_of_office;
    Staff a_staff[]=new Staff[5];
    
    Admin()
    {
        /*initialize all the components*/
        //System.out.println("admin : IN THE CONSTRUCTOR");	
	for(int i=0;i<5;i++)
        {
            a_staff[i]=new Staff();
        }
        setOpenCloseTime();
    }
    public void setOpenCloseTime() {
    
        //System.out.println("admin : time set");	
		
    }
    
    
}
