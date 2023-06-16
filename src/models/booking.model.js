import { DataTypes } from "sequelize";
import { sequelize} from "../db.js";
import { User } from './user.model.js';
import { Property } from './property.model.js';

export const Booking = sequelize.define('booking', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    propertyId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    numberOfNights: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    numberOfGuests: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
});

Booking.belongsTo(User, { foreignKey: { allowNull: false }});
Booking.belongsTo(Property, { foreignKey: { allowNull: false }});
