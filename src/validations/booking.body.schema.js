import yup from 'yup';

export const bookingBodySchema = yup.object().shape({
    userId: yup.number().required(),
    propertyId: yup.number().required(),
    startDate: yup.date().required(),
    endDate: yup.date().required(),
    totalPrice: yup.number().required(),
    numberOfGuests: yup.number().required(),
});