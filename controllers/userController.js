const { User } = require('../models');


module.exports = {
    //GET all users
    async getUsers(req, res) {
        try {
          const users = await User.find();
          res.json(users);
        } catch (err) {
          res.status(500).json(err);
        }
      },
      async getSingleUser(req, res) {
        try {
          const user = await User.findOne({ _id: req.params.userId })
            .select('-__v');
    
          if (!user) {
            return res.status(404).json({ message: 'No user with that ID' });
          }
    
          res.json(user);
        } catch (err) {
          res.status(500).json(err);
        }
      },
      // create a new user
      async createUser(req, res) {
        try {
          const dbUserData = await User.create(req.body);
          res.json(dbUserData);
        } catch (err) {
          res.status(500).json(err);
        }
      },
    //update by id
    async updateUser(req, res) {
        try {
          const user = await User.findByIdAndUpdate(req.params.userId, req.body, {
            new: true,
        });
    
          if (!user) {
            return res.status(404).json({ message: 'No user with this id!' });
          }
    
          res.json(user);
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      },
      async deleteUser(req, res) {
        try {
            const deleteUser = await User.findOneAndDelete({ _id: req.params.userId });
         if(!deleteUser) {
            return res.status(404).json({ message: 'No user with that ID '});
         }
         res.json({ message: 'User was successfully deleted '});
    } catch (err) {
        res.status(500).json(err);
    }
},

    addFriend(req, res) {
        User.findOneAndUpdate( 
            { _id: req.params.userId },
            { $addToSet: {friends: req.body.friendId || req.params.friendId} },
            { new: true }
            )
            .then(dbUserData => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'User not found'});
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(500).json(err));
    },

  };

  