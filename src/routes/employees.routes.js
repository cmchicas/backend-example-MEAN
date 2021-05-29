const employeesControl = require('../controllers/employees.controller.js');

const { Router } = require('express');
const router = Router();

//CRUD
//CREATE - READ - UPDATE - DELETE

router.get('/', employeesControl.getEmployees);

router.post('/', employeesControl.createEmployees);

router.get('/:id', employeesControl.getEmployee);

router.put('/:id', employeesControl.updateEmployees);

router.delete('/:id', employeesControl.deleteEmployees);

module.exports = router;