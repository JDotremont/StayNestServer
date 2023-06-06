import { Message } from "../models/message.model.js";

const createMessage = async (req, res) => {
    try {
        const message = await Message.create(req.body);
        res.status(201).json(message);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const getMessages = async (req, res) => {
    try {
        const messages = await Message.findAll();
        res.status(200).json(messages);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const getMessageById = async (req, res) => {
    try {
        const { id } = req.params;
        const message = await Message.findOne({
            where: {
                id: id
            }
        });
        if (message) {
            res.status(200).json(message);
        } else {
            res.status(404).json({ message: `Message with id ${id} not found` });
        }
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const deleteMessage = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Message.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).send("Message deleted");
        }
        throw new Error('Message not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export const messageController = { createMessage, getMessages, getMessageById, deleteMessage };