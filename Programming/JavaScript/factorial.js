function factorial(int){
	if (int < 0) {
		return console.log("error: integer is less than zero");
}
    if (int === 0) {
        return 1;
    } else {
		return int * factorial(int - 1);
    }
}
factorial(5);
console.log(factorial(5));

