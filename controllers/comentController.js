const Comment = require('../models/Coment');

exports.create = async (req, res) => {
    try {
        const { text, date } = req.body;

        const comment = await Comment.create({
            text,
            date: date ? new Date(date) : new Date(), 
        });

        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        console.log("findall")
        const comments = await Comment.findAll();
        console.log(comments); 
        res.status(200).json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

exports.findById = async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id);
        console.log ("findById")

        if (!comment) {
            return res.status(404).json({ message: "Comment not found." });
        }

        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
