import React from 'react';

export default {};

const authLayout = () => <h1>authLayout</h1>

function authLogin() {
  return (<h1>authLogin</h1>)
}

const authRegister = () => <h1>authRegister</h1>

export const routes = [
  {
    path: '/auth',
    exact: 1,
    component: authLayout,
  },
  {
    path: '/auth/login',
    component: authLogin
  },
  {
    path: '/auth/register',
    component: authRegister
  }


];