const employeesControl = {}

const Employee = require('../models/employee.model')

employeesControl.getEmployees = async (req, res) => {
    const employees = await Employee.find()
    res.json(employees)
}
employeesControl.createEmployees = async (req, res) => {
    const newEmployee = new Employee(req.body)
    await newEmployee.save()
    res.json({status: "employee created"})
}
employeesControl.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id)
    res.json(employee)
}
employeesControl.updateEmployees = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: "employees updated"})
}
employeesControl.deleteEmployees = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id) 
    res.json({status: "employees deleted"})
}

module.exports = employeesControl