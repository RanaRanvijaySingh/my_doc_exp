#include <iostream>
 #include <string>
 #include <regex.h>
#include <stdio.h>
using namespace std;
 int main()
{
  string foo("{foo}");
regex r("\\{(.*)\\}");
smatch m;
bool result = regex_match(foo, m, r); // result returns true

cout << m[0] << endl; // prints: {foo}
cout << m[1] << endl; // prints: {foo} instead of just foo as I would expect
return 0;
}
