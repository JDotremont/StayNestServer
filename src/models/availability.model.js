import { DataTypes } from "sequelize";
import { sequelize} from "../db.js";

export const Availability = sequelize.define('availability', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    propertyId: {
        type: DataTypes.INTEGER
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    isAvailable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    timestamps: false
});