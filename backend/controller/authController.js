import User from '../models/User.js';


const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json(
        { success: false, message: "Missing required fields" }
      )
    }


    /////// check user
    const isExist = await User.findOne({email});

    if(isExist){
      res.status(200).json({
        success:false,
        message:'Email already Registered!'
      })
    }

    /////// create user

    const user = await User.create(req.body);


  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: 'Signup failed'
    })
  }
}