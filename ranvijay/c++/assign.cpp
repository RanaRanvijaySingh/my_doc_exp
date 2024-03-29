#include <stdio.h>
#include <string>
#include <fstream>
#include <iostream>
using namespace std;
int check_file_type(string name);
void identify_class(string file);
void find_methods(string file, int type);
void correct_indentation(string filename,int type);
int main()
{
	int type=0;
	string filename;
	cout<<"Enter the file name :";
	getline(cin,filename);
	

	type=check_file_type(filename);


	identify_class(filename);

	
	find_methods(filename,type);

	correct_indentation(filename,3);

/*
   	fp = fopen("read","r");
   	c = getc(fp) ;
   	while (c!= EOF)
   	{
   		putchar(c);
		c = getc(fp);
   	}
   	fclose(fp);
*/

   return 0;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~CORRECT INDENTATION OF THE PROGRAMMING FILES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
void correct_indentation(string filename,int type)
{
	string line,word,word2;
	char c;
	fstream file(filename.c_str());
	if(!file)
	{
		cout<<"file not found \n";return;
	}
	else
	{
		string s="__";
		for(int i=0;file>>word;i++)
		{

						
			if((word.compare("class")==0)||(word.compare("def")==0)||(word.compare("if")==0))
			{
				getline(file,line);s=s+s;
				file<<s;//INCOMPLETE AT THIS PART .. 
				
			}
			if(word.compare("end")==0)
			{
				getline(file,line);
				s=s.length()-2;
				file<<s;
			}
			
    		}
	}
	file.close();	
}







//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~IDENTIFY THE METHODS AND THE VARIABLES TYPE PRESENT~~~~~~~~~~~~~~~~~~~~~~~~~~~`
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
void find_methods(string filename, int type)
{
	string spec,dtype,fname;
	string word;
	char c;string next1;
	fstream file(filename.c_str());
	if(!file)
	{
		cout<<"file not found \n";return;
	}
	else
	{
		switch(type)
		{
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FOR THE JAVA FILES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
			case 1: cout<<"\n\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~properties~~~~~~~~~~~~~~~~~~~~~~\n";
				for(int i=0;file>>spec;i++)
				{
					if((spec.compare("public")==0)||(spec.compare("private")==0)||(spec.compare("protected")==0))
					{
						file>>dtype;
						if((dtype.compare("String")==0)||(dtype.compare("int")==0)||(dtype.compare("float")==0)||(dtype.compare("Long")==0)||(dtype.compare("void")==0)||(dtype.compare("Double")==0))
						{
							file>>fname;
							string temp=fname;
									
							int flag=0,flag1=0;
							for(int j=0;j<temp.length();j++)
							{
								if(temp[j]=='(') flag=1;
							}
							if(flag==0){cout<<"variable :"<<fname<<"\t\tdate type :"<<dtype<<"\t\tspecifer :"<<spec<<endl;}
							else
							{
								string temp1=fname;string next;
								for(int j=0;j<temp1.length();j++)
								{
									if((temp1[j]=='(')&&(temp1[j+1]!=')')) flag1=1;
								}
								if(flag1==1)
								{
									file>>next;cout<<"\n\nthe function is : "<<fname<<" "<<next<<endl;
						
								}
								else
									cout<<"\n\nthe function is : "<<fname<<endl;
								
							}						
						}
					}		
				}
				file.close();
				break;	



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FOR THE PHP FILES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
			case 2:
				for(int i=0;file>>word;i++)
				{
					if(word.compare("function")==0)
					{
						file>>fname;
						cout<<"\n\nthe function is : "<<fname<<endl;			
					}

					if((word.compare("public")==0)||(word.compare("private")==0)||(word.compare("protected")==0)||(word.compare("var")==0))
					{
						file>>next1;
						if(next1.compare("function")==0)
						{	
							file>>fname;int flag1=0;
							string temp1=fname;string next;
								for(int j=0;j<temp1.length();j++)
								{
									if((temp1[j]=='(')&&(temp1[j+1]!=')')) flag1=1;
								}
								if(flag1==1)
								{
									file>>next;cout<<"\n\nthe function is : "<<fname<<" "<<next<<endl;
						
								}
								else
									cout<<"\n\nthe function is : "<<fname<<endl;		
						}
						if(next1[0]=='$'&&next1[1]!='t')
						{
							cout<<"\nvariable : "<<next1<<endl;
						}
					}
					
					
				}
				file.close(); break;


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FOR THE RUBY FILES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`


			case 3:for(int i=0;file>>word;i++)
				{
					if(word[0]=='@')
					{
						cout<<"\nvariable :"<<word<<endl;
					
					}	
					if(word.compare("def")==0)
					{
						file>>fname;
						cout<<"\nfunction is : "<<fname<<endl;			
					}
				}
				file.close(); break;


		}
	}
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~IDENTIFY THE CLASSES IN THE CALSS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
void identify_class(string filename)
{
	string line;
	char c;
	fstream file(filename.c_str());
	if(!file)
	{
		cout<<"file not found \n";return;
	}
	else
	{
		cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";
		cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";
		
		//cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";
		string line,classname;
    		for(int i=0;file>>line;i++)
		{
			if(line.compare("class")==0)
			{
				file>>classname;
				
				cout<<"the class name is : "<<classname<<"\n\n"<<endl;
				//cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";
				
			}		
		}
    		
	}
	file.close();	
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~IDENTIFY THE FILE TYPE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
int check_file_type(string name)
{
	string file_type;int c=0,flag=0;
	int size;
	fstream file(name.c_str());
	if(!file)
	{
		cout<<"file not found \n";return 0;
	}
	else
	{
		for(int i=0;i<name.length();i++)
		{
			if(name[i]=='.')
			{
				flag=1;
				for(int j=i+1;j<name.length();j++)
				file_type=file_type+name[j];	
				size=file_type.length();
				
			}
			if(flag==1)break;
		}
		if(file_type.compare("java")==0) 
		{	cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";
			cout<<"IT'S A JAVA FILE\n";
			cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";
			return 1;
		}

		else if(file_type.compare("php")==0)
		{	cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";
			cout<<"IT'S A PHP FILE\n";
			cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";
			return 2;
		}	       

		else if(file_type.compare("cpp")==0) 	
		{
			cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";
			cout<<"IT'S A c++ FILE\n";
			cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";
			return 4;
		}

		else if(file_type.compare("rb")==0) 
		{
			cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";
			cout<<"IT'S A RUBY FILE\n";
			cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";
			return 3;
		}
		
		
		else if(file_type[size-1]=='p')
		{
			cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";
			cout<<"IT'S A PHP FILE\n";
			cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";
			return 2;
		}
		else
		{
				cout<<"file not identified it does not have any extension.\n";
			return 0;
		
		}
	}
}

