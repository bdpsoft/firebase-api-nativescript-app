import Login from './Login';

export default {
  title: 'Web/Login',
};

export const Default = () => {
  const root = document.createElement('div');
  const login = Login({ onLogin: (creds) => alert('Logged in: ' + creds.email) });
  root.appendChild(login);
  return root;
};