const Rent = require('../models/Rent');

exports.create = async (req, res) => {
    try {
        const { startDate, endDate } = req.body;

        if (!startDate || !endDate) {
            return res.status(400).json({ message: "Start date and end date are required." });
        }

        const start = new Date(startDate);
        const end = new Date(endDate);
        if (isNaN(start) || isNaN(end)) {
            return res.status(400).json({ message: "Invalid date format." });
        }

        const rent = await Rent.create({
            startDate: start,
            endDate: end,
        });

        res.status(201).json(rent);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const rents = await Rent.findAll();
        res.status(200).json(rents);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.findById = async (req, res) => {
    try {
        const rent = await Rent.findByPk(req.params.id);

        if (!rent) {
            return res.status(500).json({ message: error.message });
        }

        res.status(200).json(rent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
