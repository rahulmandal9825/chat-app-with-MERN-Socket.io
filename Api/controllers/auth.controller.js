import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';


export const signup = async (req,res) =>{
    try {
        const {fullname,username,password,confirmPassword,gender}= req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({error:"password is not match"})
        }
        const user = await User.findOne({username});

        if (user) {
            return res.status(400).json({error:"This username is already exit"});

        }
        const hashedPassword = bcryptjs.hashSync(password,10);
        const profilePicURL = `https://avatar.iran.liara.run/public/${gender}?username=${username}`;

        const newUser = new User({
            fullname,
            username,
            password:hashedPassword,
            gender,
            profilepic:profilePicURL,
        });
        await newUser.save();

        res.status(201).json("User Created successfully!");


    } catch (error) {
        res.status(500).json({error:"Internal server error "})
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
			fullName: user.fullName,
			username: user.username,
			profilePic: user.profilePic,
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