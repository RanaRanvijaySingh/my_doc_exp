////////////////////////////////////////////////////////
/*CREATIONAL DESIGN PATTERN : FACTORY PATTERN*/
////////////////////////////////////////////////////////
class Security extends Person {
    Security()
    {
        /*initialize all parameters*/
        //System.out.println("security : constructor");

    }

    int checkId(Person person) {			//behavioural : chain of responsabilty  (depending upon the person identity[message passed]
							//						 the value is returned)

        //System.out.println("security : checkID");
//        if(person is student)
//            return 1
//        else
//            return 2
//     
	return 1; 
    }
    
}
