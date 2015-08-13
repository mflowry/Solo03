var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var Employee = function(name, stiPercent, compensation, totalBonus)){
   this.name = name;
   this.stiPercent = stiPercent;
   this.compensation = compensation;
   this.totalBonus = totalBonus;
};

var newEmployee1 = new Employee{};
var newEmployee2 = new Employee{};
var newEmployee3 = new Employee{};
var newEmployee4 = new Employee{};


function calculate(array) {
	for (i=1; i<=4; i++){
	newEmployee+i.name = array[0];
	var employeeNum = array[1];
	var salary = parseInt(array[2]);
	var rating = array[3];
    

	var stiPercent;
	switch(rating){
		case 3:
		stiPercent = 4;
		break;
		case 4:
		stiPercent = 6;
		break;
		case 5:
		stiPercent = 10;
		break;
		default:
		stiPercent = 0;
		break;
	}
	if (employeeNum.length == 4) {
		stiPercent += 5;
	}	
	if (salary>65000) {
		stiPercent--;
	}
	if (stiPercent > 13) {
		stiPercent = 13;
	}
	newEmployee+i.stiPercent = stiPercent;
	var totalBonus = Math.round(salary*(stiPercent/100));
	var compensation = salary + totalBonus;

	newEmployee+i.compensation = compensation;
	newEmployee+i.totalBonus = totalBonus;
    }


}
calculate(arrayAtticus);
calculate(arrayJem);
calculate(arrayBoo);
calculate(arrayScout);
console.log(employeesArray);
