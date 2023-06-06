import yup from 'yup';

export const messageBodySchema = yup.object().shape({
    senderId: yup.number().required(),
    receiverId: yup.number().required(),
    content: yup.string().required(),
});