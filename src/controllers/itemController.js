const Item = require('../models/Item'); // Correct model import

exports.getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (err) {
        console.log("🚀 ~ exports.getItems= ~ err:", err)
        res.status(500).json({ message: err.message });
    }
};

exports.createItem = async (req, res) => {
    console.log("Request body:", req.body); // Log the request body

    const { name, description, image, dropdownValue, customOption, dropdownOptions, price } = req.body;

    const newItem = new Item({
        name,
        description,
        image,
        dropdownValue,
        customOption,
        dropdownOptions,
        price
    });

    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        console.error('Error saving item:', err.message);
        res.status(400).json({ message: err.message });
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });

        await item.remove();
        res.status(200).json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
