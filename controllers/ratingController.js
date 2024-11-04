const Rating = require('../models/Rating');

exports.createRating = async (req, res) => {
    try {
        const { score } = req.body;
        if (score < 1 || score > 5) {
            return res.status(400).json({ message: "Score must be between 1 and 5." });
        }

        const rating = await Rating.create({
            score,
        });

        res.status(201).json(rating);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllRatings = async (req, res) => {
    try {
        const ratings = await Rating.findAll();
        res.status(200).json(ratings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getRatingById = async (req, res) => {
    try {
        const rating = await Rating.findByPk(req.params.id);

        if (!rating) {
            return res.status(404).json({ message: "Rating not found." });
        }

        res.status(200).json(rating);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


