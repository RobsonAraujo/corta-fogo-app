import React, { useRef } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  Alert,
} from 'react-native';
// import { Formik } from 'formik';

// import api from '../../services/api';

// import { useNavigation } from '@react-navigation/native';

// import Icon from 'react-native-vector-icons/Feather';
// import SignUpSchema from './SignUpSchema';
import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  Title,
  BackToSignButton,
  BackToSignButtonText,
  ErrorMessage,
} from './styles';

import logImage from '../../assets/logo.png';
// import { TextInput } from 'react-native-gesture-handler';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  const inputEmailRef = useRef<any>(null);
  const inputPasswordRef = useRef<any>(null);

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
              <Title>Crie sua conta</Title>
            </View>

            {/* <Formik
              initialValues={{ name: '', email: '', password: '' }}
              onSubmit={async data => {
                await api.post('users', data);
                navigation.goBack();
                Alert.alert(
                  'Cadastro realizado com sucesso',
                  'Voce ja pode fazer login no aplicativo',
                );
              }}
              validationSchema={SignUpSchema}
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
                      inputEmailRef.current?.focus();
                    }}
                    name="name"
                    icon="user"
                    placeholder="Nome"
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                  />

                  {errors.name && touched.name ? (
                    <View>
                      <ErrorMessage>{errors.name}</ErrorMessage>
                    </View>
                  ) : null}

                  <Input
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      inputPasswordRef.current?.focus();
                    }}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    ref={inputEmailRef}
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
                    returnKeyType="send"
                    onSubmitEditing={() => {
                      handleSubmit();
                    }}
                    ref={inputPasswordRef}
                    // secureTextEntry
                    textContentType="none"
                    name="password"
                    icon="lock"
                    placeholder="Senha"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  {errors.password && touched.password ? (
                    <View>
                      <ErrorMessage>{errors.password}</ErrorMessage>
                    </View>
                  ) : null}
                  <Button
                    onPress={() => {
                      handleSubmit();
                    }}
                  >
                    Entrar
                  </Button>
                </>
              )}
            </Formik> */}
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <BackToSignButton onPress={() => navigation.goBack()}>
        {/* <Icon name="arrow-left" size={20} color="#fff" /> */}
        <BackToSignButtonText>Voltar para logon</BackToSignButtonText>
      </BackToSignButton>
    </>
  );
};

export default SignUp;
