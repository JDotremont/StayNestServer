import { DataTypes } from "sequelize";
import { sequelize} from "../db.js";
import { User } from "./user.model.js";

export const Property = sequelize.define('property', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stars: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    numberOfGuests: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    priceByNight: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    priceByWeek: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    cleaningFee: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 40
    },
    photos: {
        type: DataTypes.STRING,
        allowNull: true
    },
    numberOfRoom: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    numberOfBathroom: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    amenities: {
        type: DataTypes.ENUM,
        values: [
          'Free Parking',
          'Kitchen',
          'Swimming Pool',
          'Wifi',
          'Gym',
          'Air Conditioning',
          'Dryer',
          'Washing Machine',
          'Shampoo',
          'Television',
          'Hair Dryer',
          'Heating',
          'Basic Equipment',
          'Cleaning Products',
          'Hot Water',
          'Sheets',
          'Clothing Storage Space',
          'Clothesline',
          'Extra Pillows and Blankets',
          'Hangers',
          'Blinds',
          'Board Games',
          'Children’s Dinnerware',
          'High Chair',
          'Carbon Monoxide Detector',
          'Fire Extinguisher',
          'First Aid Kit',
          'Smoke Detector',
          'Barbecue Utensils',
          'Coffee Maker',
          'Basic Kitchen Equipment',
          'Dining Table',
          'Dishes and Cutlery',
          'Freezer',
          'Nespresso Machine',
          'Oven',
          'Refrigerator',
          'Stove',
          'Wine Glasses',
          'Private Entrance',
          'Barbecue',
          'Fire Pit',
          'Backyard',
          'Outdoor Furniture',
          'Patio or Balcony',
          'Secure Key Box'
        ],
        allowNull: true
      },
    status: {
        type: DataTypes.ENUM('available', 'unavailable'),
        allowNull: false,
        defaultValue: 'available'
    },
    houseRules: {
        type: DataTypes.STRING,
        allowNull: true
    },
    allowChildren: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    allowPets: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    allowSmoking: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    allowParties: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    checkinTime: {
        type: DataTypes.TIME,
        allowNull: false,
        defaultValue: '14:00'
    },
    checkoutTime: {
        type: DataTypes.TIME,
        allowNull: false,
        defaultValue: '12:00'
    },
    minNight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    maxNight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 30
    },
    propertyType: {
        type: DataTypes.ENUM,
        values: [
          'Castle',
          'Apartment',
          'Cottage',
          'Residence Apartment',
          'Villa',
          'Barn',
          'Private Room in Housing',
          'Farm Cottage',
          'Room in Boutique Hotel',
          'Holiday Park',
          'Townhouse',
          'Room in Aparthotel',
          'Loft',
          'Room in Guest House',
          'Hotel Room'
        ],
        allowNull: false
      },
      roomType: {
        type: DataTypes.ENUM,
        values: [
            'single bed',
            'double bed',
            'queen bed',
            'king bed',
            'sofa bed',
            'bunk bed',
            'floor mattress',
            'air mattress',
        ],
        allowNull: false
        },

}, {
    hooks: {
        beforeCreate: (property, options) => {
            property.priceByWeek = property.priceByNight * 7 * 0.9;
        }
    }
});


Property.belongsTo(User, { foreignKey: { allowNull: false }});
