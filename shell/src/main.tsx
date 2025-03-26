import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './scss/default.scss';
import './scss/dark.scss';

createRoot(document.getElementById('root')!).render(
    <Suspense>
        <App />
    </Suspense>
);
