import asyncHandler from "../middleware/asyncHandler.js";


import User from '../models/userModel.js'

import generateToken from "../utils/generateToken.js";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    const {email , password} = req.body;

    const user = await User.findOne({email});

    if (user && (await user.matchPassword(password))){

        generateToken(res,user._id);

        

        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin
        });



    }else{
        res.status(401);

        throw new Error ('Invalid Email or Password');
    }

    res.send('auth User');

});


// @desc    Register user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
  
    const userExists = await User.findOne({ email }); 
  
    if (userExists) {
      res.status(400);
      throw new Error('User already exists');
    }
  
    const user = await User.create({
      name,
      email,
      password, // assuming hashing is handled via mongoose middleware
    });
  
    if (user) {
      generateToken(res, user._id);
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email, 
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  });


// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  private
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt','',{
        httpOnly: true,
        expires : new Date(0)
    })

    res.status(200).json({message:'logged out successfully'});
});



// @desc    Logout userProfile
// @route   POST /api/users/profile
// @access  public
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

   if(user){
    res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email, 
        isAdmin: user.isAdmin,
      });
   }
   else{
    res.status(404);
    throw new Error ('User not found')
   }
});




// @desc    update user profile
// @route   PUT /api/users/profile
// @access  private


const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
  
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
  
      if (req.body.password) {
        user.password = req.body.password;
      }
  
      const updatedUser = await user.save(); 
  
      res.status(200).json({
        id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin, 
      });
  
    } else {
      res.status(404);
      throw new Error('User not found');
    }
  });
  


// @desc    Get users
// @route   GET /api/users
// @access  private/admin
const getUsers = asyncHandler(async (req, res) => {
    res.send(' Get user ');
});


// @desc    Get users by ID
// @route   GET /api/users/id
// @access  private/admin
const getUserById = asyncHandler(async (req, res) => {
    res.send(' Get user by ID ');
});


// @desc    Delete users
// @route   delete /api/users
// @access  private/admin
const deleteUser = asyncHandler(async (req, res) => {
    res.send(' delete user ');
});


// @desc    Delete users
// @route   delete /api/users/:id
// @access  private/admin
const updateUser = asyncHandler(async (req, res) => {
    res.send(' update user ');
});



export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser

}