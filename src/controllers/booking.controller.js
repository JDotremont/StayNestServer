import { Booking } from '../models/booking.model.js';

const createBooking = async (req, res) => {
    try {
        const userData = {
        ...req.body,
        image: req.file ? req.file.filname : null,
        };
        const startDate = new Date(userData.startDate);
        const endDate = new Date(userData.endDate);
        const booking = await Booking.create(userData);
        res.status(201).json(booking);
        for (let d = start; d <= end; d.setDate(d.getDate() + 1))
            await Availability.update(
                { available: false },
                { where: { propertyId: userData.propertyId, date: d } }
            );
    } catch (error) {
        return res.status(500).json({ error: error.message });  
    }
};

const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.findAll();
        res.status(200).json(bookings);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const getBookingById = async (req, res) => {
    try {
        const { id } = req.params;
        const booking = await Booking.findOne({
            where: {
                id: id
            }
        });
        if (booking) {
            res.status(200).json(booking);
        } else {
            res.status(404).json({ message: `Booking with id ${id} not found` });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const updateBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const booking = await Booking.findOne({ where: { id: id } });
        if (!booking) {
            return res.status(404).send('Booking not found');
        }
        const [updated] = await Booking.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedBooking = await Booking.findOne({ where: { id: id } });
            return res.status(200).json({ booking: updatedBooking });
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Booking.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).send({ message: `Booking deleted`});
        }
        throw new Error("Booking not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export const bookingController = { createBooking, getBookings, getBookingById, updateBooking, deleteBooking };