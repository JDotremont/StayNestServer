import yup from 'yup';

export const loginBodySchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});