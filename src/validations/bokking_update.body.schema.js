import yup from 'yup';

export const bookingUpdateBodySchema = yup.object().shape({
    userId: yup.number(),
    propertyId: yup.number(),
    startDate: yup.date(),
    endDate: yup.date(),
    totalPrice: yup.number(),
    numberOfGuests: yup.number(),
});