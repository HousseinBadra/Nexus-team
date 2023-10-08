import React from 'react';
import { useLocation } from 'react-router-dom';
import LoginForm from '../components/loginform';
import RegistrationForm from '../components/registrationForm';

export default function AuthPage() {
  const location = useLocation();
  const currentUrl = location.pathname;
  return <div>{currentUrl === '/login' ? <LoginForm /> : <RegistrationForm />}</div>;
}
