import { User } from "../models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).send('User not found');
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).send('Invalid password');
        }
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET);
        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
}

export const loginController = { login };