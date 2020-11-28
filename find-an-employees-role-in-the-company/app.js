/* http://www.codewars.com/kata/find-an-employees-role-in-the-company */
function findEmployeesRole(name) {
	var employees = [
		{ firstName: 'Ollie', lastName: 'Hepburn', role: 'Boss' },
		{ firstName: 'Morty', lastName: 'Smith', role: 'Truck Driver' },
		{ firstName: 'Peter', lastName: 'Ross', role: 'Warehouse Manager' },
		{ firstName: 'Cal', lastName: 'Neil', role: 'Sales Assistant' },
		{ firstName: 'Jesse', lastName: 'Saunders', role: 'Admin' },
		{ firstName: 'Anna', lastName: 'Jones', role: 'Sales Assistant' },
		{ firstName: 'Carmel', lastName: 'Hamm', role: 'Admin' },
		{ firstName: 'Tori', lastName: 'Sparks', role: 'Sales Manager' },
		{ firstName: 'Peter', lastName: 'Jones', role: 'Warehouse Picker' },
		{ firstName: 'Mort', lastName: 'Smith', role: 'Warehouse Picker' },
		{ firstName: 'Anna', lastName: 'Bell', role: 'Admin' },
		{ firstName: 'Jewel', lastName: 'Bell', role: 'Receptionist' },
		{ firstName: 'Colin', lastName: 'Brown', role: 'Trainee' }
	];

	var s = "Does not work here!";
	employees.map(function (p) {
		if (p.firstName + " " + p.lastName === name) {
			s = p.role;
		}
	});
	return s;
}
/* ------------------------------------------------------------------ */
console.log(findEmployeesRole("Dipper Pines"), "Does not work here!")
console.log(findEmployeesRole("Morty Smith"), "Truck Driver")
console.log(findEmployeesRole("Anna Bell"), "Admin")