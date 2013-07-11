////////////////////////////////////////////////////////
/*CREATIONAL DESIGN PATTERN : FACTORY PATTERN*/
////////////////////////////////////////////////////////
class Sports extends Building implements BuildingTime{

    short no_of_playing_court;
    short no_of_trofhy;
    Gym gym;
    Staff s_staff[]=new Staff[5];
    Sports() {
        
        /*INITIALIZE ALL PAPRMETERS */
     //   System.out.println("sports :  in the constructor");
      
        for(int i=0;i<5;i++)
        {
            s_staff[i]=new Staff();
        }
          
        gym=new Gym();
        
        setOpenCloseTime();
    }
    public void setOpenCloseTime() {
        
        /*SET OPEN AND CLOSE TIME OF THE BUILDING*/
       // System.out.println("sports : time setted");
    }

    boolean borrowEquipments(Student stud) {
        
        return true;
    }

    void updateRecords(Student stud) {
        
        
    }

    boolean returnEquipment(Student stud) {
        
        return true;
    }

    void forGym(Student stud) 
    {
    
    
        if(gym.aMember(stud))
        {
            //go to gym
        }
        else
        {
            gym.addNewMember(stud);
        }
        
    }


}
