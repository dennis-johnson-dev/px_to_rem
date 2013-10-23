#include <iostream>
#include <fstream>
#include <cstring>
#include <string>
using namespace std;

int main() {
  // init input
  string input_line;
  ifstream in_file ("style.css"); 
  // init output
  ofstream out_file;
  out_file.open("style_new.css"); 

  string search_string = "font-size"; 

  if (in_file.is_open()) {
    while (getline (in_file, input_line)) {
      int index = input_line.find(search_string); 
      // if the string is found 
      // find and replace the font-size
      if (index != -1) {
        // convert to character based array for numerical extraction
        char* cstr = new char[input_line.length() +1];
        strcpy (cstr, input_line.c_str());
        char keys[] = "1234567890";

        // locate index of first number in sequence
        // i.e. font-size: 12px; => 1
        int index_of_number = strcspn(cstr, keys); 
        // find the delimiter "p" as in "px"
        int index_of_p = strcspn(cstr, "p");

        int length = index_of_p - index_of_number;
        // convert first integer from a character to an integer
        int first_integer = cstr[index_of_number] - 48;
        int second_integer = cstr[index_of_p - 1] - 48;

        input_line.replace(index, -1, "font-size: "); // 1.2 rem;"); 

        // output
        out_file << input_line << first_integer << ".";
        out_file << second_integer << " rem;" << endl;

        // re-allocate dynamic memory
        delete [] cstr;
      } else {
        // output
        out_file << input_line << endl;
      } 

    } 
    in_file.close();
    out_file.close();
  } else {
    cout << "File wasn't opened correctly" << endl;
  }

  return 0;
}
