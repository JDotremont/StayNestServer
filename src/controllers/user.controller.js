import { User } from "../models/user.model.js";

const createUser = async (req, res) => {
    try {
        const existingUser = await User.findOne({ where: { email: req.body.email } });
        if (existingUser) {
            return res.status(400).json({ error: 'Email is already in use' });
        }

       const user = await User.create(req.body);
        return res.status(201).json({
            user
        });
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({
            where: {
                id: id
            }
        });
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: `User with id ${id} not found` });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findOne({ where: { id: id } });
        if (!user) {
            return res.status(404).send('User not found');
        }
        const [updated] = await User.update({...user, ...req.body}, {
            where: { id: id }
        });
        if (updated) {
            const updatedUser = await User.findOne({ where: { id: id } });
            return res.status(200).json({ user: updatedUser });
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await User.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).send("User deleted");
        }
        throw new Error("User not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export const userController = { createUser, getUsers, getUserById, updateUser, deleteUser };