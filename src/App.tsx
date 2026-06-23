import './App.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Toaster } from 'sonner';
import { ThemeProvider, useTheme } from '@/components/theme/theme-provider';

function AppContent() {
  const { theme } = useTheme();

  return (
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
      <Toaster position="top-right" theme={theme} richColors closeButton duration={3000} />
    </I18nextProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
