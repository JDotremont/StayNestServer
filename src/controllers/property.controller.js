import { Property } from "../models/property.model.js";
import { Availability } from "../models/availability.model.js";
import { Op } from "sequelize";
import moment from "moment/moment.js";

const createProperty = async (req, res) => {
    try {
        const propertyData = {
            ...req.body,
            image: req.file ? req.file.filename : null,
        };
        const property = await Property.create(propertyData);
        res.status(201).json(property);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const getProperties = async (req, res) => {
    try {
        const properties = await Property.findAll();
        res.status(200).json(properties);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const getPropertyById = async (req, res) => {
    try {
        const { id } = req.params;
        const property = await Property.findOne({
            where: {
                id: id
            }
        });
        if (property) {
            res.status(200).json(property);
        } else {
            res.status(404).json({ message: `Property with id ${id} not found` });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const updateProperty = async (req, res) => {
    try {
        const { id } = req.params;
        const property = await Property.findOne({ where: { id: id } });
        if (!property) {
            return res.status(404).send('Property not found');
        }
        const [updated] = await Property.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedProperty = await Property.findOne({ where: { id: id } });
            return res.status(200).json({ property: updatedProperty });
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteProperty = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Property.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).send("Property deleted");
        }
        throw new Error("Property not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const searchProperty = async (req, res) => {
    try {
        console.log('req.query', req.query);

        const startDate = moment(req.query.startDate, "YYYY-MM-DD").toDate();
        const endDate = moment(req.query.endDate, "YYYY-MM-DD").toDate();

        console.log('Dates', startDate, endDate);

        const properties = await Property.findAll({
            include: [{
                model: Availability,
                where: {
                    date: {
                        [Op.between]: [startDate, endDate]
                    },
                    isAvailable: true
                }
            }],
            where: {
                city: req.query.city,
                guests: Number(req.query.guests),
                country: req.query.country
            }
        });
        if (!req.body.city || !req.body.country || !req.body.startDate || !req.body.endDate || !req.body.guests) {
            return res.status(400).json({ error: "Missing required fields" });
        }        
        res.json(properties);
    } catch (error) {
        console.error(error.stack);
        return res.status(500).json({ error: error.message });
    }    
}



export const propertyController = { createProperty, getProperties, getPropertyById, updateProperty, deleteProperty, searchProperty };