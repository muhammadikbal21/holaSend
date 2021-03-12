import React from 'react';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from '../Signin/SigninElements';

const Signin = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">Logo</Icon>
        <FormContent>
          <Form action="#">
            <FormH1> Sign in to your account</FormH1>
            <FormLabel htmlFor="for"> Email</FormLabel>
            <FormInput type="email" required></FormInput>
            <FormLabel htmlFor="for"> Password</FormLabel>
            <FormInput type="password" required></FormInput>
            <FormButton type="submit">Login</FormButton>
            <Text>Forgot Password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Signin;
