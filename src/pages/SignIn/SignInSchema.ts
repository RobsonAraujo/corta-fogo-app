import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('O email digitado e invalido')
    .required('Email obrigatorio'),
  password: Yup.string()
    .min(3, 'A senha deve  conter mais que 3 caracteres')
    .required('Senha obrigatoria'),
});

export default SignInSchema;
