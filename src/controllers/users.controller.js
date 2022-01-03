import User from "../models/User";


export const createUser = async (req,res)=>{
    const  { username, password, age } = req.body;
    const newUser = new User({ username, password, age})
    const userSaved = await newUser.save()
    res.json(userSaved)
}

export const getUsers = async (req,res)=>{
    const users = await User.find()
    res.json(users)
}

export const getUserById = async (req,res)=>{
    const user = await User.findById(req.params.userId)
    res.json(user)
}

export const editUserById = async (req,res)=>{
    const userUpdated = await User.findByIdAndUpdate(req.params.userId, req.body,{new: true})
    res.json(userUpdated);
}

export const deleteUserById = async (req,res)=>{
    await User.findByIdAndDelete(req.params.userId);
    res.status(204).json();
}