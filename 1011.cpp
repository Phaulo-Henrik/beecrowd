#include <iostream>
#include <iomanip>
using namespace std;

int main (){
	
	const double pi {3.14159};
	double V, R, RR;
	
	cin >> R;
	
	RR = (R * R * R);
	
	V = ((4.0/3) * pi * RR);
	
	cout << "VOLUME = " << setprecision(3) << fixed << V << endl;
	
	return 0;
}
