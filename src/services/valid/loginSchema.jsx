import * as yup from 'yup';

export const formSchema = yup.object().shape({

    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Campo obrigatório'),
    
});