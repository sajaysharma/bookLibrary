import User from '../Model/user.model.js';
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { fullname, email, contact, password } = req.body; 
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already Exists" })
        }
        const hashPassword = await bcryptjs.hash(password, 10);
        const createdUser = new User({
            fullname : fullname,
            email : email,
            contact : contact,
            password : hashPassword,
        });
        await createdUser.save();
        res.status(201).json({ message: " User create Successfully" });
    } catch (error) {
        console.log("Error : " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!user || !isMatch) {
            return res.status(400).json({ message: "Inavalid username or password" });
        } else {
            return res.status(200).json({
                message: "Login Successfully", user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                },
            });
        }
    } catch (error) {
         console.log("Error :" +error.message);
         res.status(500).json({ message: "Internal server error" });
    }
};