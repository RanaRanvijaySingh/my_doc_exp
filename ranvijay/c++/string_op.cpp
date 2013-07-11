// regex_match example
#include <iostream>
#include <string>
#include <regex>
using namespace std;
int main ()
{

  if (regex_match ("subject", regex("(sub)(.*)") ))
    cout << "string literal matched\n";


	return 0;
}
