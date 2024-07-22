const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  invoiceDate: { type: String, required: true },
  invoiceNumber: { type: Number, required: true },
  invoiceItems: [
    {
      id: String,
      productName: String,
      productPrice: Number,
      quantity: Number,
      amount: Number,
      profit: Number,
    },
  ],
  discount: String,
  labor: String,
  tax: String,
  billAmount: String,
  memo: String,
  totalProfit: Number,
});

const customerSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  villageName: { type: String, required: true },
  description: { type: String, required: true },
  invoices: [invoiceSchema], // Add this line to include invoices
});

module.exports = mongoose.model('Customer', customerSchema);
