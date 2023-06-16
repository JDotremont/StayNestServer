import { Property } from "./property.model.js";
import { Availability } from "./availability.model.js";

Property.hasMany(Availability, { foreignKey: 'propertyId' });
Availability.belongsTo(Property, { foreignKey: 'propertyId' });