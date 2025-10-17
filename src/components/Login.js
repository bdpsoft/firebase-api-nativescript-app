export default function Login({ onLogin }) {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.maxWidth = '320px';
  container.style.margin = '0 auto';

  const title = document.createElement('h2');
  title.textContent = 'Login';
  container.appendChild(title);

  const email = document.createElement('input');
  email.type = 'email';
  email.placeholder = 'Email';
  email.style.display = 'block';
  email.style.width = '100%';
  email.style.marginBottom = '8px';
  container.appendChild(email);

  const pass = document.createElement('input');
  pass.type = 'password';
  pass.placeholder = 'Password';
  pass.style.display = 'block';
  pass.style.width = '100%';
  pass.style.marginBottom = '12px';
  container.appendChild(pass);

  const btn = document.createElement('button');
  btn.textContent = 'Sign In';
  btn.onclick = () => onLogin && onLogin({ email: email.value, password: pass.value });
  container.appendChild(btn);

  return container;
}