import yup from 'yup';

export const propertyUpdateBodySchema = yup.object().shape({
    name: yup.string(),
    numberOfGuests: yup.number(),
    address: yup.string(),
    location: yup.string(),
    description: yup.string(),
    priceByNight: yup.number(),
    // photos: yup.string().required(),
    numberOfRoom: yup.number(),
    numberOfBathroom: yup.number(),
    allowChildren: yup.boolean(),
    allowPets: yup.boolean(),
    allowSmoking: yup.boolean(),
    allowParties: yup.boolean(),
    checkinTime: yup.string(),
    checkoutTime: yup.string(),
    minNight: yup.number(),
    maxNight: yup.number(),
    propertyType: yup.string(),
    roomType: yup.string(),
});