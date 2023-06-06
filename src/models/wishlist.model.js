import { DataTypes } from "sequelize";
import { sequelize} from "../db.js";
import { User } from "./user.model.js";
import { Property } from "./property.model.js";

export const Wishlist = sequelize.define('wishlist', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    propertyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
});

Wishlist.belongsTo(User, { foreignKey: { allowNull: false }});
Wishlist.belongsTo(Property, { foreignKey: { allowNull: false }});

