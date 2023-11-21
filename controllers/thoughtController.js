const { Thought, User, Reaction } = require('../models');
const { Types } = require('mongoose');

 
module.exports = {
    //get all thoughts
    async getAllThoughts(req, res) {
        try {
            const thought = await Thought.find();
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //get single thought
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'No thoughts found with that id' });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // create new thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.status(201).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //update by id
    async updateThought(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {
                new: true,
            });
            if (!thought) {
                res.status(404).json({ message: 'Thought not found' });
            } else {
                res.json(thought);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // delete by id
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findByIdAndDelete({ _id: req.params.Id });
            res.status(200).json(thought);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    // create reactions
    async createReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { runValidators: true, new: true }
            );
thought ? res.json(thought) : res.status(404).json({ message: 'Not Found' });
        } catch (e) {
    res.status(500).json(e);
}
    },

    //delete reactions
    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: {reactionId: req.params.reactionId } }},
                { runValidators: true, new: true }
            );
thought ? res.json(thought) : res.status(404).json({ message: 'Not Found' });
        } catch (e) {
    res.status(500).json(e);
}
    }
};

