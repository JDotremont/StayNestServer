import { DataTypes } from "sequelize";
import { sequelize} from "../db.js";
import { User } from "./user.model.js";

export const Message = sequelize.define('message', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    senderId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    receiverId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
});

Message.belongsTo(User, { foreignKey: { allowNull: false }});
