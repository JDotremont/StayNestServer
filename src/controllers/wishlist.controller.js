import { Wishlist } from "../models/wishlist.model.js";

const createWishlist = async (req, res) => {
    try {
        const wishlistData = {
            ...req.body,
            image: req.file ? req.file.filename : null,
        };
        const wishlist = await Wishlist.create(wishlistData);
        res.status(201).json(wishlist);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const getWishlists = async (req, res) => {
    try {
        const wishlists = await Wishlist.findAll();
        res.status(200).json(wishlists);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const getWishlistById = async (req, res) => {
    try {
        const { id } = req.params;
        const wishlist = await Wishlist.findOne({
            where: {
                id: id
            }
        });
        if (wishlist) {
            res.status(200).json(wishlist);
        } else {
            res.status(404).json({ message: `Wishlist with id ${id} not found` });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const updateWishlist = async (req, res) => {
    try {
        const { id } = req.params;
        const wishlist = await Wishlist.findOne({ where: { id: id } });
        if (!wishlist) {
            return res.status(404).send('Wishlist not found');
        }
        const [updated] = await Wishlist.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedWishlist = await Wishlist.findOne({ where: { id: id } });
            return res.status(200).json({ wishlist: updatedWishlist });
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteWishlist = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Wishlist.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).send("Wishlist deleted");
        }
        throw new Error("Wishlist not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export const wishlistController = { createWishlist, getWishlists, getWishlistById, updateWishlist, deleteWishlist };