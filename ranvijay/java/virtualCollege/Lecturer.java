class Lecturer 
{
    Faculty faculty[]=new Faculty[10];
    Principal principal=new Principal();
    Lecturer()
    {
        // initialize all parameters 
         //System.out.println("Lecturer : constructor");
         for(int i=0;i<10;i++)
                faculty[i]=new Faculty();
           
    }
    
    void takeLecture(Classroom classroom,Student student) 
    {
        //check all the faculty 
             if(principal.takingClass())
            {
                // take class
            }
            for(int i=0;i<10;i++)
            {
                if(faculty[i].checkFacultySchedule())
                {
                    //take class ..
                }
                else
                {
                    //check for other faculty among the remaining 9 
                    for(int j=0;j<9;j++)
                    {
                        //take class 
                    }
                }
            }
        
         //System.out.println("Lecturer : taking lecture");
    }
    void takeLab(Lab lab,Student student) 
    {
        //check all the faculty 
            if(principal.takingClass())
            {
                // take class
            }
            for(int i=0;i<10;i++)
            {
                if(faculty[i].checkFacultySchedule())
                {
                    //take class ..
                }
                else
                {
                    //check for other faculty among the remaining 9 
                    for(int j=0;j<9;j++)
                    {
                        //take class 
                    }
                }
            }
        
         //System.out.println("Lecturer : taking lab");
    }
    
    
}
