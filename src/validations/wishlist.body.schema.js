import yup from 'yup';

export const wishlistBodySchema = yup.object().shape({
    userId: yup.number().required(),
    propertyId: yup.number().required(),
});