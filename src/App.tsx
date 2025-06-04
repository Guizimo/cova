import './App.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Toaster } from 'sonner';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
      <Toaster position="top-right" theme="dark" richColors closeButton duration={3000} />
    </I18nextProvider>
  );
}

export default App;
