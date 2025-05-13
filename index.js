// Write your solution in this file!
// Initialize the employee object
const employee = {
  name: "Sam",
  streetAddress: "123 Main Street"
};

// 1. Non-destructive update
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}

// 2. Destructive update
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// 3. Non-destructive delete
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;


// 4. Destructive delete
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
