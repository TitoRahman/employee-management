const router = require('express').Router()
const Employee = require('../models/employee.model')

// POST /api/employees/add - untuk menambah employee baru
router.post('/employee/add', async (req, res) => {
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Email = req.body.Email;
    const Address = req.body.Address;
    const Phone = req.body.Phone;

    const employee = new EmployeeModel({
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Address: Address,
        Phone: Phone
    });

    try {
        await employee.save();
        res.send("inserted data");
    } catch (err) {
        console.log(err);
    }
});

// GET /api/employees - untuk menampilkan semua employee
router.get('/employees', async (req, res) => {
    Employee.find({}, (err, data) => {
        if (err) {
            res.send(err);
        }
        res.send(data);
    });
});

// GET /api/employees/:id - untuk menampilkan employee by id
router.get('/employees/:id', async (req, res) => {
    try {
        const data = await Employee.findById(req.params.id)
        res.send(data)
    } catch (err) {
        res.status(500).send({
            message: err.message
        })
    }
});
// PATCH /api/employees/:id - update employee by id
router.patch('/employees/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Employee.findByIdAndUpdate(id, updatedData, options);
        
        console.log(`${data.name} has been updated`)
        res.send(result);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
// DELETE /api/employees/:id - hapus employee by id
router.delete('/employees/:id', async (req, res) => {
    try{
        const id = req.params.id
        const data = await Employee.findByIdAndDelete(id)
        console.log(`${data.name} has been deleted`)
    } catch (err) {
        res.status(400).json({ message: error.message })
    }
})
module.exports = router