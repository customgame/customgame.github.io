import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  const stars = Array.from({ length: 99 }, () => {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
    return star;
  });
  document.body.append(...stars);
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <div style={{ maxWidth: '1920px', height: '100vh', margin: '0 auto' }}>
      <App />
    </div>
  </StrictMode>
);
