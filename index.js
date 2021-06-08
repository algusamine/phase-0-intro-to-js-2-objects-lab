// Write your solution in this file!
const employee = {
    name: 'Adam',
    streetAddress: '502 west 141st street'
};
//1: 
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
};
//1:
/*function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, {[key]: value});
}; */
//2:
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};
//3:
function  deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}
//4:
function  destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}