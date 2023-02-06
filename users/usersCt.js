const bycript = require("../helpers/handlePass")
const User = require("./usersMd")
const public_url = process.env.public_url; 


const getAllusers = (req, res) => {
  User.find().then(data => {
    !data.length ? next() :  res.status(200).json(data);
   
  }).catch((error) => {

    error.status= 500;
    next(error); 
  }); 
    
  
  
  };
//crear usuario
const createUser = async (req, res) => {
  console.log(req.body.profilePic)
   
    const profilePic = `${public_url}/public/storage/${req.file.filename} `;
    
 
    const password = await bycript.hashPassword(req.body.password);
   
    const newUser = new User({ ...req.body,profilePic,  password });
    newUser.save((error, result) => {
         error
         ? res.status(400).json( { message: error.message})
         : res.status(200).json(result);
    }); 
 };

const updateUser = async (req, res) => {
    try {  
   const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
   res.status(200).json(user);
   
    
    } catch(error) {
        res.status(404).json( { message: "Cambios realizados"})    }

}

const deleteUserById = async (req, res) => {
    try {  
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ user: user.id, message: "Usuario borrado"});

    } catch(error) {
        res.status(404).json( { message: "Usuario no encontrado"})    }
};

module.exports = {getAllusers, deleteUserById , createUser, updateUser}
