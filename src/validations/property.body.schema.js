import yup from 'yup';

export const propertyBodySchema = yup.object().shape({
    name: yup.string().required(),
    numberOfGuests: yup.number().required(),
    address: yup.string().required(),
    location: yup.string().required(),
    description: yup.string().required(),
    priceByNight: yup.number().required(),
    // photos: yup.string().required(),
    numberOfRoom: yup.number().required(),
    numberOfBathroom: yup.number().required(),
    allowChildren: yup.boolean().required(),
    allowPets: yup.boolean().required(),
    allowSmoking: yup.boolean().required(),
    allowParties: yup.boolean().required(),
    checkinTime: yup.string().required(),
    checkoutTime: yup.string().required(),
    minNight: yup.number().required(),
    maxNight: yup.number().required(),
    propertyType: yup.string().required(),
    roomType: yup.string().required(),
});