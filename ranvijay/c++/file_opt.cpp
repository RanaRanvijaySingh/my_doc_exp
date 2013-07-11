    #include <fstream>
    #include <iostream>
    #include <string>
    using namespace std;
    int main()
    {
    string filename;
    cout << "Name your file> ";
    getline( cin, filename );
    fstream file( filename.c_str() );
    if (!file)
    {
    cout << "I could not open the file. Fooey.\n";
    return 0;
    }
    else
    {
    string line;
    int count = 10;
    while ((count > 0) && getline( file, line ))
    {
    cout << line << '\n';
    count--;
    }
    file.close();
    }
    return 0;
    }
