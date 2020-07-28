import React, { useRef, useCallback } from 'react';
// import Toast from 'react-native-simple-toast';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  TextInput,
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { Formik } from 'formik';
// import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import Input from '../../components/Input';
// import SignInSchema from './SignInSchema';
// import { useAuth } from '../../hooks/auth';
import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
  ErrorMessage,
} from './styles';

import logImage from '../../assets/logo.png';

interface SingInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  // const navigation = useNavigation();

  const passwordInputRef = useRef<TextInput>(null);

  // const { signIn, user } = useAuth();

  // console.log('user on signin', user);

  // const handleSignIn = useCallback(async (data: SingInFormData) => {
  //   await signIn({ email: data.email, password: data.password });
  // }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logImage} />
            <View>
              <Title>Faça seu Login</Title>
            </View>

            {/* <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={values => handleSignIn(values)}
              validationSchema={SignInSchema}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <>
                  <Input
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      passwordInputRef.current?.focus();
                    }}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    name="email"
                    icon="mail"
                    placeholder="E-mail"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  {errors.email && touched.email ? (
                    <View>
                      <ErrorMessage>{errors.email}</ErrorMessage>
                    </View>
                  ) : null}
                  <Input
                    ref={passwordInputRef}
                    secureTextEntry
                    name="password"
                    icon="lock"
                    placeholder="Senha"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    returnKeyType="send"
                    onSubmitEditing={() => {
                      handleSubmit();
                    }}
                  />
                  {errors.password && touched.password ? (
                    <View>
                      <ErrorMessage>{errors.password}</ErrorMessage>
                    </View>
                  ) : null}
                  <Button onPress={() => handleSubmit()}>Entrar</Button>
                </>
              )}
            </Formik> */}
            <ForgotPassword onPress={() => {}}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        {/* <Icon name="log-in" size={20} color="#ff9000" /> */}
        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
