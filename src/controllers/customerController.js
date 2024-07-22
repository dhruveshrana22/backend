// controllers/customerController.js
const Customer = require("../models/customer");
exports.saveInvoice = async (req, res) => {
  const { customerName, ...invoiceData } = req.body;
  try {
    // Find customer by name (or you can use ID)
    const customer = await Customer.findOne({ customerName });

    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    // Add the new invoice to the customer's invoices array
    customer.invoices.push(invoiceData);

    // Save the updated customer document
    await customer.save();

    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ message: "Error saving invoice", error });
  }
};

exports.getInvoices = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(400).json({ message: "Error fetching invoices", error });
  }
};
// Get all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get customer by ID
exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new customer
exports.createCustomer = async (req, res) => {
  const { customerName, mobileNumber, villageName, description } = req.body;
  const newCustomer = new Customer({
    customerName,
    mobileNumber,
    villageName,
    description,
  });

  try {
    const existingCustomer = await Customer.findOne({ customerName });
    if (existingCustomer) {
      return res.status(400).json({ message: "Customer already exists" });
    }
    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update customer
exports.updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    customer.customerName = req.body.customerName;
    customer.mobileNumber = req.body.mobileNumber;
    customer.villageName = req.body.villageName;
    customer.description = req.body.description;

    const updatedCustomer = await customer.save();
    res.json(updatedCustomer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete customer
exports.deleteCustomer = async (req, res) => {
  console.log("req", req);
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    console.log("customer", customer);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json({ message: "Customer deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
