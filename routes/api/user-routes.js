const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
} = require('../../controllers/userController');

// GET and POST users 
router.route('/').get(getUsers).post(createUser);

// GET, PUT, DELETE user by id 
router.route('/:userID').get(getSingleUser).put(updateUser).delete(deleteUser);

// POST new friend 
router.route('/:user/friends/:friendId').post(addFriend);


module.exports = router;