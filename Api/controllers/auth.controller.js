import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from "../utils/generateToken.js";
import { errorHandler } from "../utils/error.js";


export const signup = async (req,res,next) =>{
    try {
        const {fullname,username,password,confirmPassword,gender}= req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({error:"password is not match"})
        }
        const user = await User.findOne({username});

        if (user) {
            return res.status(400).json({error:"This username is already exit"});

        }
        const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

        const profilePicURL = `https://avatar.iran.liara.run/public/${gender}?username=${username}`;

        const newUser = new User({
            fullname,
            username,
            password:hashedPassword,
            gender,
            profilepic:profilePicURL,
        });
		if (newUser) {
			// Generate JWT token here
			generateTokenAndSetCookie(newUser._id, res);
			await newUser.save();

			res.status(201).json({
				_id: newUser._id,
				fullname: newUser.fullname,
				username: newUser.username,
				profilePic: newUser.profilePic,
			});
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}

    } catch (error) {
		next(error)
    }
};

export const login = async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username });
		const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password" });
		}

		generateTokenAndSetCookie(user._id, res);

		res.status(200).json({
			_id: user._id,
			fullname: user.fullname,
			username: user.username,
			profilepic: user.profilepic,
		});
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const logout = (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};