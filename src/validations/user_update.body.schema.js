import yup from 'yup';

export const userUpdateBodySchema = yup.object().shape({
    firstname: yup.string(),
    lastname: yup.string(),
    email: yup.string().email(),
    password: yup.string(),
});