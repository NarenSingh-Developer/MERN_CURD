const express = require("express")
const router = express.Router();
require("./db/conn")
const User = require("./model/Schema");

router.get("/", (req, res) => {
  res.send("hello express router this route is Home route")
})

router.post("/add", async (req, res) => {
  const { name, username, email, phone, password, cpassword } = req.body;
  if (!name || !username || !email || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "fill all inputs" })
  }
  try {
    const userExist = await User.findOne({ email: email })
    if (userExist) {
      return res.status(422).json({ message: "email already exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ message: "password not match" });
    } else {
      const user = new User({name, username, email, phone, password, cpassword});
      await user.save();
      res.status(200).json({ message: "User added successfull" });
    }
  } catch (err) {
    console.log(err);
  }
})

router.get("/Users", async(req,res) =>{
  try{
   const Users = await User.find();
   console.log(Users);
  res.send(Users)   
  }catch(err){
    console.log(err);
  }
})
 
router.get("/view/:id", async(req,res) =>{
  try{
    const id = req.params.id;
    console.log(id);
    const view = await User.findById(id);
    console.log(view)
    res.send(view);
  }catch(err){
    console.log(err);
  }
})
router.put("/edit/:id" , async(req,res) =>{
  try{
    const {name, username, email, phone, password, cpassword} = req.body;
    const id = req.params.id;
    const edit = await User.findByIdAndUpdate(id, {name, username, email, phone, password, cpassword});
    const updatevalue = await edit.save();
    res.status(200).json({message : "user find successfull"});
  }catch(err){
    console.log(err);
  }
})

router.delete("/:id", async(req,res) =>{
  try{
   const id = req.params.id;
   const Delete = await User.findByIdAndRemove(id);
  console.log(Delete);
  res.status(200).json({message :  "User deleted"});
  }catch(err){
    console.log(err);
  }
})
module.exports = router;





// router.post("/login", async(req,res) =>{
//   const {username, password} = req.body;
//   if(!username || !password){
//     return res.status(422).json({error : "fill all inputs"})
//   }
//   try{
//     const userExist = await User.findOne({username : username})
//   if(userExist){
//     if(userExist.password === password){
//       return res.status(200).json({message : "login successfull"});
//     }else{
//       return res.status(422).json({message : "password not match"})
//     }
//   }else{
//     return res.status(422).json({message : "username not exist"})
//   }
//   }catch(err){
//     console.log(err);
//   }
// })
