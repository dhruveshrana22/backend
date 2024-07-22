// routes/customerRoutes.js
const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/allCustomer', customerController.getAllCustomers);
router.get('/allCustomer/:id', customerController.getCustomerById);
router.post('/createCustomer', customerController.createCustomer);
router.put('/updateCustomer/:id', customerController.updateCustomer);
router.delete('/delete/:id', customerController.deleteCustomer);
router.post('/saveInvoice', customerController.saveInvoice);
router.get('/getInvoices', customerController.getInvoices);

module.exports = router;
